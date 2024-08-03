import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-between min-h-screen">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className='min-h-1 min-w-1'>
            <span className="m-2 p-1 text-xl">
              Welcome to Our Website Riya Matrimony.<br /> We Ensure you the Best Partners For you and your family.
            </span>
            </div>
            
            <button 
              className="bg-cyan-500 p-4 m-2 rounded-md text-white hover:bg-cyan-600"
              onClick={handleButtonClick}
            >
              Create a Distributor Account
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
