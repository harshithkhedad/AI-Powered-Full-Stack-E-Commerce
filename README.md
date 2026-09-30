# AI-Powered Full Stack E-Commerce

A college-ready full-stack e-commerce project with a modern frontend, Java Spring Boot backend, MySQL-ready configuration, authentication-ready structure, shopping cart, and AI-style product recommendations.

## Stack
- Frontend: React + Vite
- Backend: Java 17 + Spring Boot
- Database: MySQL
- AI: Recommendation service abstraction (ready to connect to an AI API)

## Run
### Backend
```bash
cd backend
mvn spring-boot:run
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Backend runs on `http://localhost:8080` and frontend on `http://localhost:5173`.

## Note
This starter project intentionally keeps secrets out of source control. Put API keys and database passwords in environment variables or an untracked `.env` file.
