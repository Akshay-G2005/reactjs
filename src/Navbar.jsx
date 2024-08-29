import React, { useState } from 'react';
import logo from './assets/image_1-removebg-preview 1.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='top-0 w-full'>
      <div className='bg-white py-2 px-6 md:px-20 flex justify-between items-center text-lg hidden md:flex'>
        <div className='flex items-center gap-4'>
          <div className='flex items-center cursor-pointer gap-4'>
            <div className='text-[#339FDE]'>
              <MdEmail />
            </div>
            <span>epidosisinvestment@gmail.com</span>
          </div>
          <div className='flex items-center cursor-pointer gap-4'>
            <div className='text-[#339FDE]'>
              <BsTelephone />
            </div>
            <span>9756545862</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <a href='#' className='text-[#339FDE] hover:text-blue-500'><FaFacebookF /></a>
          <a href='#' className='text-[#339FDE] hover:text-blue-500'><FaInstagram /></a>
          <a href='#' className='text-[#339FDE] hover:text-blue-500'><FaTwitter /></a>
          <a href='#' className='text-[#339FDE] hover:text-blue-500'><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Navbar Section */}
      <nav className='bg-transparent'>
        <div className='h-16 flex justify-between items-center z-50 text-[#403E3F] lg:py-5 px-6 md:px-20 py-4'>
          <div className='flex items-center flex-1'>
            <img src={logo} alt='Logo' className='w-32 h-auto' />
          </div>

          <div className='hidden lg:flex items-center text-slate-700 font-serif justify-end font-normal'>
            <ul className='flex gap-8 text-[18px] cursor-pointer font-medium'>
              <li className='hover:text-[#339FDE]'>Home</li>
              <li className='hover:text-[#339FDE]'>Media</li>
              <li className='hover:text-[#339FDE]'>Industry Insights</li>
              <li className='hover:text-[#339FDE]'>Our Services</li>
              <li className='hover:text-[#339FDE]'>Contact Us</li>
            </ul>
            <div className='flex gap-4 ml-10'>
              <button className='px-4 py-2 border border-black rounded-none text-black hover:bg-black hover:text-white transition'>
                Login
              </button>
              <button className='px-4 py-2 bg-[#339FDE] text-white rounded-none hover:bg-gray-800 transition'>
                Sign Up
              </button>
            </div>
          </div>

          <div className='lg:hidden flex items-center'>
            <button onClick={toggleMobileMenu} className='text-black'>
              <span className='material-icons'>
                {isMobileMenuOpen ? <ImCancelCircle /> : <GiHamburgerMenu />}
              </span>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className='lg:hidden bg-white text-slate-700 font-serif'>
            <ul className='flex flex-col gap-4 p-4 text-[18px] cursor-pointer font-medium'>
              <li className='hover:text-[#339FDE]'>Home</li>
              <li className='hover:text-[#339FDE]'>Media</li>
              <li className='hover:text-[#339FDE]'>Industry Insights</li>
              <li className='hover:text-[#339FDE]'>Our Services</li>
              <li className='hover:text-[#339FDE]'>Contact Us</li>
            </ul>
            <div className='flex flex-col gap-4 p-4'>
              <button className='px-4 py-2 border border-black rounded-none text-black hover:bg-black hover:text-white transition'>
                Login
              </button>
              <button className='px-4 py-2 bg-[#339FDE] text-white rounded-none hover:bg-gray-800 transition'>
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
