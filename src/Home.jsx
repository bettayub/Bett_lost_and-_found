// #home.jsx

import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home-container flex flex-col md:flex-row'>
      <Navbar />

      {/* Text div on the left half page */}
      <div className='md:w-1/2 p-4 order-first md:order-last'>
        <h3 className='text-center md:text-left text-2xl md:text-3xl mb-4'>
          Found and Lost app is your go-to platform for a seamless experience in managing lost and found items
        </h3>
        <p className='text-center md:text-left'>
          With the Found and Lost app, we are on a mission to simplify and streamline the process of reuniting lost items with their rightful owners. Our dedicated platform aims to foster a strong sense of community, connecting people from all walks of life who have lost and found items. We believe that through open and effective communication, we can make a significant impact on the lives of our users and contribute to a world where lost possessions find their way back home. Together, we are committed to creating a positive and helpful environment where the joy of rediscovery knows no bounds.
        </p>
      </div>

      {/* Buttons div at the bottom in its own container */}
      <div className='md:w-1/2 flex justify-center items-center mt-4 md:mt-0'>
        <div className='buttons-container flex flex-col items-center md:items-start'>
          <Link to='/lostApplication'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2'>
              Report lost item
            </button>
          </Link>
          <Link to='/foundApplication'>
            <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
              Report found item
            </button>
          </Link>
        </div>
      </div>

      {/* Image div taking a full half page on the right */}
      <div className='md:w-1/2 order-last md:order-first'>
        <img src={'./src/Homeimage/Logo Design for Lost and Found.jpeg'} alt="none" className='w-full h-full' />
      </div>
    </div>
  );
}

export default Home;
