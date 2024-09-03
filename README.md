# User Authentication System

## Overview

This project is a simple prototype of a user authentication system. It allows authorized users to log in to the website, while new users must register through a separate route. All user data, including usernames and passwords, is stored securely in a MongoDB database, which I control as the admin.

The frontend is built using React JS, serving as a basic prototype interface, while the backend is developed with Node.js and Express.js. The project also integrates `axios` for making HTTP requests and `cors` to handle cross-origin resource sharing.

## Features

- **User Registration**: New users can register through a dedicated registration page.
- **User Login**: Registered users can log in using their credentials.
- **Admin Control**: All user data is monitored and managed through MongoDB Compass.
- **Frontend Prototype**: Simple user interface created with React JS.
- **Backend Functionality**: Server-side logic is handled by Node.js and Express.js.

## Technologies Used

- **React JS**: Frontend framework for creating the user interface.
- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Web framework for handling backend routing and middleware.
- **MongoDB**: Database for storing user information.
- **Axios**: Library for making HTTP requests from the frontend to the backend.
- **CORS**: Middleware to enable cross-origin requests between frontend and backend.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/user-auth-system.git
