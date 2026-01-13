# 🚀 Job Application Tracker — Full Stack DevOps Project

A **production-ready Job Application Tracker** built with **React, Node.js, Express, and MongoDB**, containerized using **Docker & docker-compose**.  
Designed as a **portfolio-grade DevOps project** with authentication, role-based access, health checks, and a modern responsive UI.

---

## ✨ Features

### 🔐 Authentication & Security
- JWT-based authentication
- Role-based access control (User / Admin)
- Secure password hashing
- Protected routes

### 📊 Application Management
- Track job applications (company, role, status, notes)
- Create, view, and manage applications
- Admin panel to view users

### 🎨 Frontend (React + Tailwind CSS)
- Modern gradient UI with glassmorphism
- Responsive design (mobile & desktop)
- Login, Register, Dashboard, Admin panel
- Clean SaaS-style layout

### ⚙ Backend (Node.js + Express)
- RESTful APIs
- MongoDB integration
- API base route (`/api`)
- Health & readiness checks

### 🐳 DevOps & Production
- Dockerfile (frontend & backend)
- docker-compose (single command startup)
- Health checks for containers
- Graceful shutdown handling
- Ready for CI/CD & Kubernetes

---

## 🛠 Tech Stack

**Frontend**
- React 18
- Vite
- Tailwind CSS
- Axios

**Backend**
- Node.js 20
- Express
- MongoDB (Mongoose)
- JWT

**DevOps**
- Docker
- docker-compose

---

## 📁 Project Structure

```
job-application-tracker/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Admin.jsx
│   │   └── App.jsx
│   └── Dockerfile
│
├── backend/
│   ├── src/
│   │   ├── server.js
│   │   ├── routes/
│   │   ├── models/
│   │   └── middleware/
│   └── Dockerfile
│
└── docker-compose.yml
```

---

## 🔌 API Overview

Base URL: `http://localhost:5000/api`

- `GET /health` → API health check  
- `GET /ready` → Readiness check  
- `POST /auth/register` → Register user  
- `POST /auth/login` → Login user  
- `GET /jobs` → List job applications  
- `POST /jobs` → Add job  
- `GET /admin/users` → Admin-only user list  

---

## 🧪 Health Checks

- **Liveness**: `/health`
- **Readiness**: `/ready`
- Integrated with Docker health checks

---

## 🏭 Production Notes

- Use strong `JWT_SECRET`
- Secure environment variables
- Enable HTTPS behind reverse proxy
- Add CI/CD (GitHub Actions, Jenkins)
- Can be deployed to AWS ECS / EKS

---

## 📄 License

MIT

---

## ⭐ Why This Project?

- Real-world **DevOps-ready full-stack app**
- Clean architecture & best practices
- Dockerized microservice-style setup
- Perfect for **resume & portfolio**
- Interview-ready project

---

Maintained by **Dhairya5991**
