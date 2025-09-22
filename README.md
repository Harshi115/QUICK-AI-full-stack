      🚀 Full-Stack AI SaaS Platform

# 🚀 QuickAI  

[![React](https://img.shields.io/badge/Frontend-React-61DBFB?logo=react&logoColor=white)](https://react.dev/)  
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)  
[![Express.js](https://img.shields.io/badge/Framework-Express-000000?logo=express&logoColor=white)](https://expressjs.com/)  
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791?logo=postgresql&logoColor=white)](https://www.postgresql.org/)  
[![Clerk](https://img.shields.io/badge/Auth-Clerk-3E63DD?logo=clerk&logoColor=white)](https://clerk.com/)  
[![Stripe](https://img.shields.io/badge/Payments-Stripe-635BFF?logo=stripe&logoColor=white)](https://stripe.com/)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  

**QuickAI** is a **full-stack AI SaaS platform** built with the **PERN stack** (PostgreSQL, Express.js, React, Node.js).  
It brings together multiple **AI-powered tools** within a subscription-based model — making **content creation, image editing, and career development** easier than ever.  

---

## ✨ Features  

- 🔐 **Authentication & User Management** – Secure login & profiles with **Clerk**  
- 💳 **Subscription System** – Unlock premium features using **Stripe billing**  
- 🗄️ **Scalable Database** – Serverless **PostgreSQL (Neon)** for reliability  
- 📝 **Article Generator** – Generate long-form articles from titles & word counts  
- 📰 **Blog Title Generator** – Suggest optimized titles from keywords & categories  
- 🎨 **AI Image Generator** – Create unique, high-quality images from text prompts  
- 🖼️ **Background & Object Remover** – Professional image editing tools  
- 📄 **Resume Analyzer** – AI-driven career insights for job seekers  

---

## 🛠️ Tech Stack  

| Layer       | Technology |
|-------------|------------|
| **Frontend** | React.js |
| **Backend** | Node.js + Express.js |
| **Database** | PostgreSQL (Neon serverless) |
| **Auth** | Clerk |
| **Payments** | Stripe |

---

## 🚀 Getting Started  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/your-username/quickai.git
cd quickai
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
DATABASE_URL=your_neon_postgres_url
CLERK_API_KEY=your_clerk_key
STRIPE_SECRET_KEY=your_stripe_key
# Run backend
cd server
npm run dev

# Run frontend
cd ../client
npm start


📌 Roadmap

 Add more AI tools (e.g., Email Writer, Code Generator)

 Implement dark mode UI

 Release mobile app version

🤝 Contributing

Contributions are welcome!

Fork the repo

Create your feature branch (git checkout -b feature/YourFeature)

Commit changes (git commit -m 'Add new feature')

Push to branch (git push origin feature/YourFeature)

Open a Pull Request

📜 License

This project is licensed under the MIT License.



