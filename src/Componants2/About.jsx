import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate(); 

  const handleNavigate = () => {
    navigate('/Contact'); 
  };

  const location = useLocation();
  const { name, email, password } = location.state || {}; 

  return (
    <div class="text-center">
      <h2>Welcome, {name}!</h2>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      
      <button onClick={handleNavigate}>Go to Contact Page</button>
    </div>
  );
};

export default About;
