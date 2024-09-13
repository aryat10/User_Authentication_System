import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [loginMessage, setLoginMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        loginData
      );
      const { success, message } = response.data;
      if (success) {
        setLoginMessage({ type: "success", text: "Login successful! ✅" });
        console.log("Login successful ✅", response.data);
      } else {
        setLoginMessage({ type: "error", text: message });
      }
      setLoginData({
        username: "",
        password: "",
      });
    } catch (error) {
      console.error("Login error", error);
      setLoginMessage({
        type: "error",
        text: "Login failed. Please try again. ❌",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
        textAlign: "center",
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
        Login Page 📋
      </h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
            value={loginData.username}
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
            value={loginData.password}
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
          Submit
        </button>

        <p style={{ marginTop: "20px" }}>
          Not registered yet? Go to{" "}
          <Link
            to="/registor"
            style={{ color: "#1B1A55", textDecoration: "underline" }}
          >
            Sign up
          </Link>
        </p>
      </form>

      {loginMessage && (
        <p
          style={{
            color: loginMessage.type === "error" ? "red" : "lightgreen",
            marginTop: "20px",
          }}
        >
          {loginMessage.text}
        </p>
      )}
    </div>
  );
};

export default Login;
