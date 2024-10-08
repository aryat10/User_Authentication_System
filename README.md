
# ⚠️👤User Authentication System

Welcome to the **User Authentication System** project! This is a simple yet functional prototype designed to manage user registration and login processes, ensuring that only authorized users can access the system. This project is built with **React JS** for the frontend and **Node.js** with **Express.js** for the backend, using **MongoDB** as the database.

## 📝 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Important Notes](#important-notes)
- [Challenges](#challenges)
- [Future Improvements](#future-improvements)
- [Conclusion](#conclusion)
- [Contact](#contact)

## 📖 Overview

This project is a **simple prototype** of a user authentication system, allowing:

- **Existing users** to log in securely.
- **New users** to register and create an account.
  
All user credentials, including usernames and passwords, are securely stored in a **MongoDB** database, which I manage as an admin.

## ✨ Features

- **🔐 User Registration**: A dedicated route for new users to sign up.
- **🔓 User Login**: Secure login process for registered users.
- **👨‍💻 Admin Control**: Manage and monitor all user data through **MongoDB Compass**.
- **💻 Frontend Prototype**: Simple, intuitive interface built with **React JS**.
- **⚙️ Backend API**: Robust server-side logic powered by **Node.js** and **Express.js**.

## 🛠️ Technologies Used

- **Frontend**: [React JS](https://reactjs.org/)
- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **HTTP Requests**: [Axios](https://axios-http.com/)
- **Cross-Origin Resource Sharing**: [CORS](https://expressjs.com/en/resources/middleware/cors.html)

## 👨🏻‍💻 Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/user-auth-system.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd user-auth-system
   ```

3. **Install dependencies for the backend**:
   ```bash
   cd backend
   npm install
   ```

4. **Install dependencies for the frontend**:
   ```bash
   cd ../frontend
   npm install
   ```

5. **Set up your environment variables**:
   - Create a `.env` file in the `backend` directory and add your MongoDB connection string and other required environment variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=8000
     ```
   
6. **Run the backend server**:
   ```bash
   cd ../backend
   npm start
   ```

7. **Run the frontend development server**:
   ```bash
   cd ../frontend
   npm start
   ```

## ▶️ Usage

1. **Registration**: New users can sign up by providing their username and password. The information is stored securely in the MongoDB database.
2. **Login**: Registered users can log in with their credentials. Upon successful login, they gain access to the system.
3. **Admin Access**: As an admin, you can manage and monitor user data through MongoDB Compass.

## ❗ Important Notes

- Ensure that MongoDB is running on your local machine or a remote server.
- The backend and frontend servers should be run separately to ensure proper functioning.
- The project requires Node.js and npm to be installed on your system.

## 🧗 Challenges

- **Security Concerns**: Ensuring that user data, especially passwords, is stored securely. I used bcrypt for hashing passwords before storing them in the database.
- **Handling CORS**: Configuring CORS to allow communication between the frontend and backend running on different ports.
- **Managing State**: Using React hooks like `useState` and `useEffect` to manage the application state effectively.

## 🚀 Future Improvements

- **Enhanced Security**: Implementing JWT for authentication and session management.
- **Password Reset**: Adding a password reset functionality for users who forget their credentials.
- **User Roles**: Introducing different user roles with varying levels of access.
- **UI/UX Improvements**: Improving the frontend design to make it more user-friendly and visually appealing.

## 🎉 Conclusion

This **User Authentication System** project serves as a foundational example of how to create a full-stack application with user authentication. It demonstrates how frontend and backend technologies can be integrated to build a secure, functional, and scalable application.

## 📞 Contact

For any questions or suggestions, feel free to reach out:

- **GitHub**: [aryat/10](https://github.com/aryat10)
- **Email**: srivastavatayra@gmail.com
