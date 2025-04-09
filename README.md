
# 📝 Feedback Collection App

A simple full-stack application to collect and display user feedback using **React** for the frontend, **Node.js + Express** for the backend, and **MongoDB** for data storage.

---

## 🚀 Features

- Submit feedback with **name**, **email**, and **message**
- Display all submitted feedbacks in a styled list
- Backend REST API to handle GET and POST requests
- MongoDB integration for persistent storage

---

## 🛠️ Tech Stack

**Frontend**: React  
**Backend**: Node.js + Express  
**Database**: MongoDB (via Mongoose)  
**Other Tools**: CORS, dotenv

---

## 📁 Folder Structure

```
project-root/
├── backend/
│   └── server.js        # Express server with feedback API
├── frontend/
│   └── src/
│       └── FeedbackList.jsx  # Feedback display component
│       └── App.js
│       └── index.js
├── .env                 # Environment variables (MongoDB URI, etc.)
├── .gitignore
└── README.md
```

---

## 🧪 API Endpoints

- `POST /feedback` – Submit feedback
- `GET /feedback` – Get all feedbacks

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/feedback-app.git
cd feedback-app
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file and add:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/your-db-name
```

Start the backend:

```bash
node server.js
```

### 3. Frontend setup

```bash
cd frontend
npm install
npm start
```

---

## 🛡️ Security

- Ensure your `.env` file is listed in `.gitignore`
- Do **not** expose MongoDB credentials in source code
- Use environment variables for production

---

## 📦 Future Improvements

- Add authentication
- Form validation and error handling
- Admin panel to moderate feedback

---

## 📄 License

This project is open-source and free to use.

---

> Made with ❤️ by Nikhil Verma
```

Let me know if you want it tailored to your repo name or to include screenshots or deploy instructions!