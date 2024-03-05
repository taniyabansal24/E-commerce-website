import React from 'react';
import logo from '../assets/logo.png';
import 'boxicons/css/boxicons.min.css'; 

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300 py-8 md:py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="w-full md:w-1/4 mb-4 md:mb-0 flex items-center justify-center md:justify-start">
          <img className="w-2/3 md:w-full" src={logo} alt="UrbanNest" />
        </div>
        <ul className="flex flex-wrap justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
          <li className="mx-4">Company</li>
          <li className="mx-4">Product</li>
          <li className="mx-4">Offices</li>
          <li className="mx-4">About</li>
          <li className="mx-4">Contact</li>
        </ul>
        <div className="flex items-center justify-center md:justify-end">
          <div className="footer-icons-container mx-2">
            <i className='bx bxl-instagram text-2xl'></i>
          </div>
          <div className="footer-icons-container mx-2">
            <i className='bx bxl-pinterest-alt text-2xl'></i>
          </div>
          <div className="footer-icons-container mx-2">
            <i className='bx bxl-whatsapp text-2xl'></i>
          </div>
        </div>
      </div>
      <hr className="my-6 md:my-8 border-gray-500" />
      <div className="text-center">
        <p className="text-sm">Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
