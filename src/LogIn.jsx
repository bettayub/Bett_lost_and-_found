// SignUp.js

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function LogIn({
  jwToken,
  setJWToken,
  btnText,
  setUsername,
  setRole,
  setIsLoggedIn,
  role,
  setBtnText,
  isLoggedIn,
}) {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

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

        setBtnText(`Logout, ${data.username}`);
        console.log(data.username);
        history("/HomePage");
        setFormData({
          username: "",
          password: "",
        });
        setJWToken(data.access_token);
        setRole(data.role);
        setUsername(data.username);
      })
      .catch((response) => {
        console.error("Error:", response.message);
      });

    console.log("Form Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-4 mt-2 rounded bg-gray-100" style={{ maxHeight: '700px' }}>

      <h1 className="font-bold text-2xl border-b-2 border-green-500 mb-4">Login</h1>
        <div className="mb-2">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={(event) =>
              setFormData({ ...formData, username: event.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 rounded bg-green-500 hover:bg-green-700 text-white font-bold transition duration-300"
          style={{ maxWidth: "150px" }}
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default LogIn;
