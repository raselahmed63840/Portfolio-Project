import React from "react";
import {
  FaHome,
  FaUser,
  FaTools,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { MdPhoto } from "react-icons/md";
const NavBar = () => {
  return (
    <div>
      <header className="fixed top-0 w-full bg-[#160014] backdrop-blur-lg z-50 border-b border-black/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <h1 className="text-3xl font-extrabold cursor-pointer tracking-wide">
            <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
              Ra
            </span>
            <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              sel
            </span>
          </h1>

          {/* Navbar Menu */}
          <nav className="hidden md:flex items-center space-x-10 text-white text-lg font-medium">
            <a
              href="#home"
              className="hover:text-purple-400 flex items-center gap-2 transition"
            >
              <FaHome className="text-xl" /> Home
            </a>

            <a
              href="#about"
              className="hover:text-purple-400 flex items-center gap-2 transition"
            >
              <FaUser className="text-xl" /> About Me
            </a>

            <a
              href="#services"
              className="hover:text-purple-400 flex items-center gap-2 transition"
            >
              <FaTools className="text-xl" /> Services
            </a>

            <a
              href="#portfolio"
              className="hover:text-purple-400 flex items-center gap-2 transition"
            >
              <MdPhoto className="text-xl" /> Portfolio
            </a>

            <a
              href="#contact"
              className="hover:text-purple-400 flex items-center gap-2 transition"
            >
              <FaEnvelope className="text-xl" /> Contact
            </a>

            {/* Gradient Button */}
            <button className="bg-gradient-to-r from-purple-500 to-orange-400 px-6 py-2 rounded-full shadow-md hover:scale-105 transition text-white text-lg">
              Connect With Me
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
