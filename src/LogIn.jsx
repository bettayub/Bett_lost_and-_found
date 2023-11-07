// SignUp.js

import React, { useState } from "react";
import "./SignUp.css";
import { Link,useNavigate } from 'react-router-dom'


function LogIn(
  {
    jwToken,
    setJWToken,
    btnText ,
    setUsername,
    setRole ,
    setIsLoggedIn,
    role ,
    setBtnText,
    isLoggedIn,
  }
) {
    const history = useNavigate();
    
  const [formData, setFormData] = useState({
    username: "",
    password: "", // State for the Remember Me checkbox
  });

  const handleSubmit = (event) => {
    event.preventDefault();
   
    // TODO: Submit form data to backend
   
    fetch("http://127.0.0.1:5555/lost&found/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response data:", data);

        localStorage.setItem("jwtToken", data.access_token);
        setIsLoggedIn(true);

        // const username_uppper = toTitleCase(data.username);
        setBtnText(`Logout, ${data.username}`);
        console.log(data.username)
        history("/HomePage")
        setFormData({
          username: "",
          password: "",
        });
        setJWToken(data.access_token);
        setRole(data.role)
        setUsername(data.username);
      })
      .catch((response) => {
        console.error("Error:", response.message);
      });


    console.log("Form Data:", formData);
  };


  return (
    <div className="sign-up-container">
      
      <form onSubmit={handleSubmit}>
      <h1>Log In</h1>
        <input
          type="text"
          name="username"
          placeholder="Name"
          value={formData.name}
          onChange={(event) => {
            setFormData({ ...formData, username: event.target.value });
          }}
        />
      
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={(event) => {
            setFormData({ ...formData, password: event.target.value });
          }}
        />

        {/* Remember Me Checkbox
        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div> */}

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LogIn;
