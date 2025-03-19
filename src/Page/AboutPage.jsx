import React, { useState, useEffect } from 'react';
import Loader from '../Components/Loader'; // Adjust the import path if needed

const AboutPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay before loading content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust time as needed (2 seconds here)

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  if (loading) return <Loader />; // Show loader while loading is true

  return <div className='bg-bg-color w-full h-screen'>about page</div>;
};

export default AboutPage;
