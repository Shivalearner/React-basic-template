import React from "react";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black/80 p-6 text-center">
      <p className="text-white"> © 2025 Your Website. All rights reserved.</p>
      <div className="flex gap-2 justify-center ">
        <a
          href="#"
          className=" text-blue-400 hover:text-white flex items-center gap-2"
        >
          <FaLinkedin />
          LinkedIn
        </a>
        <a
          href="#"
          className=" text-blue-400 hover:text-white flex items-center gap-2"
        >
          <FaWhatsapp />
          WhatsApp
        </a>
        <a
          href="#"
          className=" text-blue-400 hover:text-white flex items-center gap-2"
        >
          <FaInstagram />
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
