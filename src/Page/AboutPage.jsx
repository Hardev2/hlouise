import React from 'react';
import Loader from '../Components/Loader';
import { useState, useEffect } from 'react';

const AboutPage = () => {
  const [loading, setLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate 2 seconds delay
  }, []);

  if (loading) return <Loader />;
  return <div className='bg-bg-color w-full min-h-screen '>AboutPage</div>;
};

export default AboutPage;
