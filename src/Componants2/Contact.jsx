import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/services'); 
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <p>Welcome to the Contact page!</p>
      <button onClick={handleNavigate}>Go to services Page</button>
    </div>
  );
};

export default Contact;
