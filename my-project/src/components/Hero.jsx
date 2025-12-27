import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import profileImage from "../photo/rasel.png";
import resumePDF from "../assets/rasel-resume.pdf";
import javalogo from "../photo/JavaScript.png";
import mongodblogo from "../photo/MongoDB.png";
import nodelogo from "../photo/Node.png";

const Hero = () => {
  // State for modals
  const [showContact, setShowContact] = useState(false);
  const [showResume, setShowResume] = useState(false);

  return (
    <div>
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-4"
      >
        {/* 🔵 Rotating Tech Logos Circle */}
        <div className="relative w-60 h-60 flex justify-center items-center mb-6">
          <div className="absolute w-full h-full rounded-full border-2 border-purple-500/30 animate-slow-spin">
            {/* Tech Icons */}
            <img
              src={reactLogo}
              className="absolute w-10 h-10 top-0 left-1/2 -translate-x-1/2"
              alt="React logo"
            />
            <img
              src={javalogo}
              className="absolute w-10 h-10 bottom-0 left-1/2 -translate-x-1/2"
              alt="JavaScript logo"
            />
            <img
              src={mongodblogo}
              className="absolute w-10 h-10 left-0 top-1/2 -translate-y-1/2"
              alt="MongoDB logo"
            />
            <img
              src={nodelogo}
              className="absolute w-10 h-10 right-0 top-1/2 -translate-y-1/2"
              alt="Node.js logo"
            />
          </div>

          {/* Glow + Profile */}
          <div className="absolute w-44 h-44 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 blur-xl opacity-70 animate-pulse"></div>
          <img
            src={profileImage}
            alt="profile"
            className="w-40 h-40 rounded-full border-2 relative z-10 shadow-xl object-cover"
          />
        </div>

        <p className="mt-2 text-purple-300 text-sm">
          Nature-inspired — calm, green & quiet
        </p>

        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
          I'm{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
            Rasel
          </span>{" "}
          <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
            Ahmed
          </span>
          , <br />
          <span className="text-orange-400">MERN Developer.</span>
        </h1>

        <p className="mt-4 max-w-xl text-gray-300">
          I build clean, fast, and scalable web applications using React.js,
          Node.js, Express.js, MongoDB, and Tailwind CSS.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setShowContact(true)}
            className="bg-gradient-to-r from-purple-500 to-orange-400 px-6 py-2 rounded-full shadow-md hover:scale-105 transition text-white text-lg"
          >
            Contact Me
          </button>

          <button
            onClick={() => setShowResume(true)}
            className="border border-purple-500 px-5 py-2 rounded-full hover:bg-purple-600/20 text-white"
          >
            My Resume
          </button>
        </div>
      </section>

      {/* 🔵 Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              ✖
            </button>
            <img
              src={profileImage}
              alt="Rasel Ahmed"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-purple-500 object-cover"
            />
            <h2 className="text-2xl font-bold text-center">Rasel Ahmed</h2>
            <p className="text-center text-sm text-gray-400 mb-4">
              MERN Stack Developer | Focused on clean UI & scalable apps
            </p>
            <div className="space-y-2 text-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-purple-400"
              >
                🌐 Facebook
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-purple-400"
              >
                💼 LinkedIn
              </a>
              <a
                href="https://wa.me/8801863840840"
                className="block hover:text-purple-400"
              >
                📱 WhatsApp: 01863840840
              </a>
              <a
                href="mailto:rasel63840@gmail.com"
                className="block hover:text-purple-400"
              >
                ✉️ Gmail: rasel63840@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 🔵 Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-[600px] relative">
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">
              📄 My Resume
            </h2>
            <div className="text-sm text-gray-300 max-h-80 overflow-y-auto p-4 border border-purple-500 rounded">
              <p>
                <strong>Rasel Ahmed</strong> — MERN Stack Developer passionate
                about building modern, user-friendly web applications. Skilled
                in React.js, Node.js, Express.js, MongoDB, and TailwindCSS.
                Experienced in designing responsive UIs, interactive forms, and
                scalable backend APIs.
              </p>
              <p className="mt-2">
                <strong>Skills:</strong> React.js, TailwindCSS, Node.js,
                Express.js, MongoDB, JavaScript, Responsive Design, UI/UX.
              </p>
              <p className="mt-2">
                <strong>Projects:</strong> Portfolio Website, Scalable Form
                Builder, Team Section UI, Privacy Policy Modals.
              </p>
              <p className="mt-2">
                <strong>Contact:</strong> rasel63840@gmail.com | WhatsApp:
                01863840840
              </p>
            </div>
            <div className="text-center mt-4">
              <a
                href={resumePDF}
                download="Rasel-Ahmed-Resume.pdf"
                className="bg-gradient-to-r from-purple-500 to-orange-400 px-6 py-2 rounded-full shadow-md hover:scale-105 transition text-white"
              >
                ⬇️ Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
