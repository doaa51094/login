import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token !== 'one-hand1234') {
      navigate('/login');
    }
  }, [navigate]);

  return <div className='home'>Welcome to the dashboard</div>;
};

export default Home;
