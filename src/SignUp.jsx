import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
  });

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5555/lost&found/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        history('/HomePage');
      } else {
        if (response.status === 400) {
          const data = await response.json();
          setError(data.message);
        } else {
          setError('Failed to sign up. Please try again later.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to connect to the server. Please try again later.');
    }
  };

  const handleRoleChange = (event) => {
    setFormData({ ...formData, role: event.target.value });
  };

  return (
    <div className="sign-up-container flex flex-col items-center mt-5">
      <div className="BtnLinks mt-5 md:mt-0 md:mr-4">
        <Link to="/LogIn">
          <button className="bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Log In
          </button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md p-4 mt-2 rounded bg-gray-100" style={{ maxHeight: '700px' }}>
        <h1 className="font-bold text-2xl border-b-2 border-green-500 mb-4">CREATE ACCOUNT</h1>

        <div className="mb-3">
          <label className="block mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(event) => {
              setFormData({ ...formData, username: event.target.value });
            }}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(event) => {
              setFormData({ ...formData, email: event.target.value });
            }}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(event) => {
              setFormData({ ...formData, password: event.target.value });
            }}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Role *</label>
          <select
            value={formData.role}
            onChange={handleRoleChange}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full p-2 rounded bg-green-500 hover:bg-green-700 text-white font-bold transition duration-300"
          style={{ maxWidth: "150px" }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
