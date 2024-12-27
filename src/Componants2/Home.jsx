import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Loginform.jsx"

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/Loginform'); 
  };

  return (
    <div>
    
    </div>
  );
};

export default Home;
