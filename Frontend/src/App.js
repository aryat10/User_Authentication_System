import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegistorPage from "./RegistorPage";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#282c34",  
        color: "#f5f5f5",           
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "'Playfair Display', serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
          marginBottom: "20px",
          fontSize: "2.5rem",
          background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,0,150,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          padding: "10px",
        }}
      >
        Welcome to User Authentication System 🔒
      </h1>

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registor" element={<RegistorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
