# 🩺 Prescription & Medication Management Tool — Backend

Welcome to the backend API server for the Prescription and Medication Management Tool!  
This backend is built with **Express.js**, **MongoDB**, and **Node.js**.

---

## 🚀 Base URL
> http://localhost:5000/

---

## 📚 API Endpoints

### 👤 User Authentication

| Method | Endpoint           | Description                |
|:------:|:-------------------|:----------------------------|
| POST   | `/user/signUp`       | Create a new user account |
| POST   | `/user/login`        | Log in user and get token  |
| POST   | `/user/logout`       | Log out user (frontend can just clear token) |

### 📝 Profile Management

| Method | Endpoint                   | Description               |
|:------:|:---------------------------|:---------------------------|
| POST   | `/profile/createOrUpdate`    | Create or update user profile |
| GET    | `/profile/:userId`           | Get user profile details |

### 💊 Medication Management

| Method | Endpoint          | Description                |
|:------:|:------------------|:----------------------------|
| POST   | `/medication/add`   | Add a new medication schedule |
| GET    | `/medication/:userId` | Get all medications for a user |

---

## 🛠️ Setup Instructions (for Developers)

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```
## 🛠️ Create a .env file in the root directory:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
JWT_SECRET=your_secret_key
```

## 🔥 Special Notes for Frontend

### 🛡️ Token Authentication
- After a successful login (`/user/login`), **save the token** in `localStorage` or `cookies`.
- When accessing protected routes, **send the token** in the `Authorization` header like this:

```http
Authorization: Bearer <token>
```
# Prescription and Medication Management Tool

## Overview
Medication management is essential for patients, especially those with chronic conditions requiring ongoing prescriptions. This project aims to provide a **user-friendly tool** that helps patients track medications, receive reminders, renew prescriptions easily, and improve adherence.

## Features

### 🔹 Interactive Medication Dashboard
- Displays a clear **overview** of medications, upcoming doses, and recent actions.
- Customizable layout with **drag-and-drop** functionality.



### 🔹 Prescription Renewal Requests
- One-click **prescription renewal requests** with status updates.
- Automatic **reminders** for expiring prescriptions.

### 🔹 Medication History & Insights
- Scrollable **timeline** for past and current medications.
- Search & filter history with an intuitive UI.


### 🔹 User Profiles & Health Info
- Manage **allergies, conditions, and doctor contact details**.
- Upload prescriptions with drag-and-drop functionality.

### 🔹 Analytics & Progress Tracking
- **Graphs** displaying adherence trends over time.
- Gamification elements with **badges and achievements**.






## Tech Stack
- **Frontend:** React, Tailwind CSS, Chart.js
- **Backend:** Node.js, Express, MongoDB




## Installation & Setup
```bash
git clone https://github.com/your-repo-name.git
cd prescription-management-tool
npm install
npm start

