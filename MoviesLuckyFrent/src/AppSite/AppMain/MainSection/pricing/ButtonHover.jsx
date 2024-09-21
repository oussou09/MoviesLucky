import React from 'react';
import { Link } from 'react-router-dom';

const ButtonHover = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="relative inline-flex items-center justify-center px-[15px] py-[5px] text-white font-bold text-lg uppercase tracking-wide overflow-hidden bg-transparent border-[3px] border-[#1f83ed] rounded-lg transition-all duration-300 group"
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 bg-[#1f83ed] w-0 h-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
    </Link>
  );
};

export default ButtonHover;
