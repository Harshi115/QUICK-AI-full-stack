import { clerkClient } from "@clerk/express";

// Middleware to check userId and hasPremiumPlan

// Labels which Clerk call actually failed, rather than a bare error.message —
// see the matching LabeledError in controllers/aiController.js for why.
class LabeledError extends Error {
    constructor(label, cause) {
        super(`${label}: ${cause.message}`)
        this.cause = cause
    }
}

export const auth = async (req, res, next)=>{
    try {
        const {userId, has} = await req.auth();
        const hasPremiumPlan = await has({plan: 'premium'});

        const user = await clerkClient.users.getUser(userId)
            .catch(error => { throw new LabeledError("Fetching Clerk user failed", error) });

        if(!hasPremiumPlan && user.privateMetadata.free_usage){
            req.free_usage = user.privateMetadata.free_usage
        } else{
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: {
                    free_usage: 0
                }
            }).catch(error => { throw new LabeledError("Resetting usage count failed", error) });
            req.free_usage = 0;
        }

        req.plan = hasPremiumPlan ? 'premium' : 'free';
        next()
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}