import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

function ShareIcons() {
  return (
    <div className="item-center flex gap-2 my-1">
      <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-800 text-white transition-all duration-300 hover:opacity-80">
        <FaFacebookF />
      </span>
      <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-green-600 text-white transition-all duration-300 hover:opacity-80">
        <FaWhatsapp />
      </span>
      <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-500 text-white transition-all duration-300 hover:opacity-80">
        <FaLinkedinIn />
      </span>
      <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-400 text-white transition-all duration-300 hover:opacity-80">
        <FaTwitter />
      </span>
      <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-red-500 text-white transition-all duration-300 hover:opacity-80">
        <FaPinterest />
      </span>
    </div>
  );
}

export default ShareIcons;
