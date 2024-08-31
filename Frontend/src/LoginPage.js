import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async(e) =>{
    e.preventDefault()

    try{
      const response = await axios.post('http://localhost:8000/login',loginData)
      const {success,message} = response.data
       if(success){
        console.log('Login successfull')
      }
      else{
        console.log(message)
      }
      setLoginData({
        username: '',
        password: ''
      })
    }
    catch(error){
      console.error('Login error',error)
    }
    
  }

  const handleChange = (e) => {
    console.log(e); // this e acts as an object
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={loginData.username}
          onChange={handleChange}
        />
        <br />

        <input
          type="password"
          name="password"
          placeholder="password"
          required
          value={loginData.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
        <p>
          Not registered yet ? go to <Link to="/registor">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
