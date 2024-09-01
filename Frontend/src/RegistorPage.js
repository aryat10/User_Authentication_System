import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RegistorPage = () => {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    password: ''
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(null); // State to track registration status

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
      const response = await axios.post('http://localhost:8000/registor', registrationData);
      console.log('Registration successful✅:', response.data);
      setRegistrationSuccess(true);  // Set success state to true
      setRegistrationData({ username: '', password: '' });  // Clear form
    } catch (error) {
      console.error('Registration error❌:', error);
      setRegistrationSuccess(false);  // Set success state to false
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#535C91",
        color: "white",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <h1>Registration Page📝</h1>

      <form onSubmit={handleRegistration}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={registrationData.username}
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "5px",
            width: "20%",
            marginBottom: "10px",
            borderRadius: "3px",
          }}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={registrationData.password}
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            color: "black",
            padding: "5px",
            width: "20%",
            marginBottom: "10px",
            borderRadius: "3px",
          }}
        />
        <br />
        <button type="submit" style={{ padding: "10px", borderRadius: "5px", backgroundColor: "white", color: "#535C91", cursor: "pointer" }}>
          Register
        </button>
      </form>

      {/* Display success or error message */}
      {registrationSuccess === true && (
        <p style={{ color: "lightgreen" }}>Registration complete! 🎉</p>
      )}
      {registrationSuccess === false && (
        <p style={{ color: "red" }}>Registration failed. Please try again. ❌</p>
      )}

      <p>
        Already a User? Go to{" "}   
        <Link
          to="/login"
          style={{ color: "white", textDecoration: "underline" }}
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default RegistorPage;
