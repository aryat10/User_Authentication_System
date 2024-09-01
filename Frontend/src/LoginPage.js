import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        loginData
      );
      const { success, message } = response.data;
      if (success) {
        console.log("Login successful");
      } else {
        console.log(message);
      }
      setLoginData({
        username: "",
        password: "",
      });
    } catch (error) {
      console.error("Login error", error);
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
    <div style={{ backgroundColor: "grey", color: "white", padding: "20px", borderRadius: "5px" }}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={loginData.username}
          onChange={handleChange}
          style={{ backgroundColor: "white", color: "black", padding: "5px", width: "100%", marginBottom: "10px", borderRadius: "3px" }}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={loginData.password}
          onChange={handleChange}
          style={{ backgroundColor: "white", color: "black", padding: "5px", width: "100%", marginBottom: "10px", borderRadius: "5px" }}
        />
        <br />
        <button type="submit" style={{ backgroundColor: "white", color: "black", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>Submit</button>
        <p>
          Not registered yet? Go to <Link to="/register" style={{ color: "white", textDecoration: "underline" }}>Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
