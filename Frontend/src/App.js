import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegistorPage from "./RegistorPage";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#2C2C2C",  
        color: "white",             
        minHeight: "100vh",         
        padding: "20px"             
      }}
    >
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "20px",
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
