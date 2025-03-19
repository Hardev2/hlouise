import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className=' h-screen pt-24 pb-8 lg:h-screen lg:pt-32 w-full sticky bottom-0 bg-bg-color z-[1] '>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-[55%] px-4'>
          <div>
            <h1 className='text-[3.5rem] text-white font-[800] leading-[5rem]'>
              Sacol, {''}
              <span className='font-custom font-light'>Harvey Louise</span>
            </h1>
          </div>
          <div className='mt-16'>
            <h1 className='text-white text-[5rem] font-extrabold leading-[5rem]'>
              Ready for <span className='text-gray-400'>lift-off?</span>
            </h1>
            <p className='text-gray-color text-[1.5rem]'>
              harveysacol@gmail.com
            </p>
            <div className='relative mt-3 flex gap-3'>
              <button className='text-white bg-bg-color px-3 py-2 cursor-pointer duration-300 rounded-full border-2 border-white hover:animate-hoverBounce hover:shadow-[0px_5px_0px_#ffffff] w-[150px]'>
                Get in touch
              </button>
              <button className='cursor-pointer duration-300 text-black bg-white px-3 py-2 border-[2px] border-solid border-white rounded-full hover:animate-hoverBounce hover:shadow-[0px_5px_0px_#ffffff] hover:bg-bg-color hover:text-white w-[150px]'>
                About Me
              </button>
            </div>
            <div className='mt-24'>
              <p className='text-gray-400'>
                @ 2025 Business Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-10 px-4 py-10 lg:w-[40%] bg-bg-color lg:flex-row'>
          <div className='flex flex-col gap-24'>
            <div className='mt-0'>
              <h1 className='text-white font-semibold'>About</h1>
              <p className='text-gray-400 w-[300px]'>
                Front-end Developer from Cebu, Philippines, passionate about
                crafting clean and dynamic web experiences.
              </p>
            </div>
            <div>
              <h1 className='text-white font-semibold'>Contact</h1>
              <p className='text-gray-400'>
                <span className='font-semibold'>Email:</span>
                harveysacol@gmail.com
              </p>
              <p className='text-gray-400'>
                <span className='font-semibold'>Phone:</span>
                0963888921
              </p>
              <p className='text-gray-400'>
                <span className='font-semibold'>Address:</span>
                Cebu City, Philippines
              </p>
            </div>
            <div>
              <h1 className='text-white font-semibold'>Follow Me</h1>
              <div className='text-white text-lg flex gap-2 '>
                <Link className='hover:text-30-percent'>
                  <FaFacebook />
                </Link>
                <Link className='hover:text-30-percent'>
                  <FaTwitter />
                </Link>
                <Link className='hover:text-30-percent'>
                  <FaLinkedin />
                </Link>
                <Link className='hover:text-30-percent'>
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className='text-white'>Quick Links</h1>
              <div className='flex flex-col text-gray-400 gap-2'>
                <Link className='duration-300 hover:text-gray-color'>Home</Link>
                <Link className='duration-300 hover:text-gray-color'>
                  About
                </Link>
                <Link className='duration-300 hover:text-gray-color'>
                  Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
