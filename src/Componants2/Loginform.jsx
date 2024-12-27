import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Navbar1.css";

const LoginForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/About', {
      state: { name, email, password }, 
    });

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="loginpage">
      <h1 className="text-center">Login page</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label className="p-2">Name:</label>
          <input
            className="name"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="p-2">Email:</label>
          <input
            className="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="p-2">Password:</label>
          <input
            className="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="text-center">
          <button type="submit" className="p-2">Submit</button>
        </div>
        
      </form>
    </div>
  );
};

export default LoginForm;
