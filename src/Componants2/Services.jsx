import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Home'); 
  };

  return (
    <div>
      <h1>Services Page</h1>
      <p>Welcome to the Services page!</p>
      <button onClick={handleNavigate}>Go to Home Page</button>
    </div>
  );
};

export default Services;
