import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer >
            <div className="border-t bg-green-700 border-white mt-8 p-5 text-center w-[100vw] text-white fixed bottom-0">
        <p>&copy; {new Date().getFullYear()} DailyTasks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
