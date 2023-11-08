// #navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { CgSearchFound } from 'react-icons/cg';

function Navbar({ btnText }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="flex justify-between items-center p-2 fixed top-0 w-full h-16 z-10 bg-white">
      <div className='flex items-center gap-6'>
        <Link to='/HomePage' className='text-black text-2xl font-semibold opacity-80'>
          Lost & Found
        </Link>
        <CgSearchFound className='text-2xl' />
      </div>
      <div className='md:hidden'>
        {/* Dropdown button moved to the right end */}
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={handleClick}
        >
          Dropdown button
          <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        {/* Dropdown menu displayed on the right */}
        <div id="dropdown" className={`z-10 ${click ? 'block' : 'hidden'} bg- divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-16 right-0`}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <Link to='/lost' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Lost items</Link>
            </li>
            <li>
              <Link to='/found' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Found items</Link>
            </li>
            <li>
              <Link to='/received' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Received rewards</Link>
            </li>
            <li>
              <Link to='/pendingclaims' className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>Pending claims</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='hidden md:flex items-center'>
        <ul className={`flex list-none ${click ? 'flex-col justify-center items-center w-full h-screen bg-black absolute top-0 right-0 transition duration-300' : 'flex-row'}`}>
          <li className='px-4'>
            <Link to='/lost' className='text-black'>Lost items</Link>
          </li>
          <li className='px-4'>
            <Link to='/found' className='text-black'>Found items</Link>
          </li>
          <li className='px-4'>
            <Link to='/received' className='text-black'>Received rewards</Link>
          </li>
          <li className='px-4'>
            <Link to='/pendingclaims' className='text-black'>Pending claims</Link>
          </li>
          <li className='px-4'>
            <Link to='/login'>
              <button className='text-brown bg-wheat' id='logoutbtn'>
                {btnText}
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
