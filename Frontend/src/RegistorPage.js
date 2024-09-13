import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RegistorPage = () => {
  const [registrationData, setRegistrationData] = useState({
    username: "",
    password: "",
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/registor",
        registrationData
      );
      console.log("Registration successful✅:", response.data);
      setRegistrationSuccess(true);
      setRegistrationData({ username: "", password: "" });
    } catch (error) {
      console.error("Registration error❌:", error);
      setRegistrationSuccess(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#F2F3F7",
        color: "#333",
        padding: "40px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: "bold",
          color: "#1B1A55",
          marginBottom: "20px",
        }}
      >
        Registration Page 📝
      </h1>

      <form onSubmit={handleRegistration}>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={registrationData.username}
            onChange={handleChange}
            style={{
              backgroundColor: "#FFFFFF",
              color: "#333",
              padding: "12px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #ddd",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={registrationData.password}
            onChange={handleChange}
            style={{
              backgroundColor: "#FFFFFF",
              color: "#333",
              padding: "12px",
              width: "100%",
              borderRadius: "5px",
              border: "1px solid #ddd",
              boxSizing: "border-box",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "12px",
            borderRadius: "5px",
            backgroundColor: "#1B1A55",
            color: "#FFFFFF",
            border: "none",
            cursor: "pointer",
            width: "100%",
            fontSize: "16px",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#12124d")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#1B1A55")
          }
        >
          Register
        </button>
      </form>

      {registrationSuccess === true && (
        <p style={{ color: "lightgreen", marginTop: "20px" }}>
          Registration complete! 🎉
        </p>
      )}
      {registrationSuccess === false && (
        <p style={{ color: "red", marginTop: "20px" }}>
          Registration failed. Please try again. ❌
        </p>
      )}

      <p style={{ marginTop: "20px" }}>
        Already a User? Go to{" "}
        <Link
          to="/login"
          style={{ color: "#1B1A55", textDecoration: "underline" }}
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default RegistorPage;
