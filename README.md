# 📝 SmartPitch 

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)  
[![React](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)  
[![Strapi](https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white)](https://strapi.io/)  
[![Clerk](https://img.shields.io/badge/auth-Clerk-blueviolet?style=for-the-badge&logo=clerk)](https://clerk.com/)  
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)  
[![Shadcn/UI](https://img.shields.io/badge/shadcn/ui-black?style=for-the-badge)](https://ui.shadcn.com/)  
[![Neon Postgres](https://img.shields.io/badge/postgres-neon-0088CC?style=for-the-badge&logo=postgresql&logoColor=white)](https://neon.tech/)  
[![Gemini](https://img.shields.io/badge/AI-Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://deepmind.google/technologies/gemini/)  

🚀 An **AI-powered CV/Resume Builder** that helps job seekers create stunning, professional resumes with less stress and more impact.  
Built with **React (Vite)**, **Strapi**, **Shadcn/UI**, **TailwindCSS**, **Clerk (Auth)**, **Gemini AI**, and **Neon Postgres**.  

---

## ✨ Features  

- 🤖 **AI Resume Generation (Gemini)** – Generate professional CV content using **Google’s Gemini AI**  
- 🎨 **Modern UI** – Responsive design with **TailwindCSS + Shadcn/UI**  
- ⚡ **Fast & Optimized** – Powered by **Vite** for speed  
- 📂 **Strapi CMS Integration** – Manage resumes & templates  
- 🔐 **Authentication with Clerk** – Secure user login & sessions  
- 🗄 **Postgres (Neon)** – Serverless, cloud-native DB  
- 📑 **Multiple Templates** – Choose from sleek resume layouts  
- ☁️ **Export Options** – Download as **PDF, DOCX**, or share a link  

---

## 🛠 Tech Stack  

| Layer        | Technology |
|--------------|------------|
| Frontend     | React (Vite), TailwindCSS, Shadcn/UI |
| Backend      | Strapi (Node.js Headless CMS) |
| Database     | Neon Postgres |
| Auth         | Clerk |
| AI           | Gemini (Google AI) |
| Deployment   | Vercel (Frontend), Render/DigitalOcean (Backend), Neon (DB) |

---

## 📦 Project Structure  

```bash
ai-resume-builder/
│
├── frontend/                # Vite + React + TailwindCSS + Shadcn/UI
│   ├── src/
│   │   ├── components/      # UI Components
│   │   ├── pages/           # Routes
│   │   ├── service/         # API Calls (Axios)
│   │   └── App.jsx
│   └── vite.config.js
│
├── backend/                 # Strapi CMS
│   ├── api/                 # Resume API
│   └── config/              # Database + Clerk integration
│
├── README.md
└── package.json

Getting Started
Prerequisites

Node.js >= 18

Yarn / NPM

Strapi CLI

Neon Postgres database

Clerk account (Sign up free
)

Gemini API key (Google AI Studio
)

Installation
# Clone repo
git clone https://github.com/yourusername/ai-resume-builder.git
cd ai-resume-builder

# Install frontend
cd frontend
npm install
npm run dev

# Install backend (Strapi)
cd ../backend
npm install
npm run develop

⚙️ Environment Variables
Frontend (/frontend/.env)
VITE_STRAPI_API_URL=http://localhost:1337
VITE_STRAPI_API_KEY=your_strapi_api_key
VITE_CLERK_FRONTEND_API=your_clerk_frontend_api
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_GEMINI_API_KEY=your_gemini_api_key

Backend (/backend/.env)
DATABASE_URL=postgres://<user>:<password>@<host>/<db>
STRAPI_API_TOKEN=your_strapi_api_token
CLERK_SECRET_KEY=your_clerk_secret_key
GEMINI_API_KEY=your_gemini_api_key

🔐 Authentication (Clerk)

This project uses Clerk
 for authentication.

✨ Out-of-the-box sign-in, sign-up, and user management

🔐 Secure session handling for both frontend & backend

👤 Access user data (name, email, profile image) inside React via useUser()

Example usage:

import { useUser } from "@clerk/clerk-react";

function Dashboard() {
  const { user } = useUser();
  return <h1>Welcome, {user?.firstName} 👋</h1>;
}

🤖 AI Integration (Gemini)

This project uses Gemini
 for resume content generation.

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

async function generateResumeSection(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  return result.response.text();
}

📸 Screenshots
Resume Builder	Resume Preview

	
📌 Roadmap

 AI-powered cover letter generation (Gemini)

 Multi-language resume generation 🌍

 Drag-and-drop resume sections

 Resume template marketplace

 Public resume sharing with link

🤝 Contributing

Contributions are welcome!
Please fork the repo and submit a pull request.

📜 License

MIT License – free to use, modify, and distribute.

🌟 Acknowledgements

Clerk
 – Authentication

Strapi
 – Headless CMS

Neon
 – Serverless Postgres

TailwindCSS
 – Styling

Shadcn/UI
 – UI Components

Gemini AI
 – AI resume generation
