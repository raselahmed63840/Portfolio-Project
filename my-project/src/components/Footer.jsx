import { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import profileImage from "../photo/rasel.png";
import shakibImage from "../photo/sakib.png";
const Footer = () => {
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);
  const [isTermsOpen, setTermsOpen] = useState(false);

  const teamMembers = [
    {
      name: "Rasel Ahmed",
      title: "Founder",
      designation: "MERN Developer",
      photo: profileImage,
      link: "https://github.com/raselahmed63840",
    },
    {
      name: "Tawabur Rahman Sakib ",
      title: "Co-Founder",
      designation: "UI/UX Designer",
      photo: shakibImage,
      link: "https://www.linkedin.com",
    },
    {
      name: "Nusrat Jahan",
      title: "Project Manager",
      designation: "Team Lead",
      photo:
        "https://img.freepik.com/premium-vector/pretty-female-cartoon-face-stock-illustration_1323048-18750.jpg",
      link: "https://facebook.com",
    },
  ];

  return (
    <footer className="bg-[#160014] text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Branding & Contact */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
              Rasel
            </span>{" "}
            <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              Ahmed
            </span>
          </h2>
          <p className="mt-2 text-purple-400">
            MERN Developer | Let’s build something amazing together!
          </p>
          <p className="mt-1">
            Reach me at{" "}
            <a
              href="mailto:rasel63840@gmail.com"
              className=" text-white font-semibold hover:underline hover:text-purple-400"
            >
              rasel63840@gmail.com
            </a>
          </p>
        </div>

        {/* Social & Links */}
        <div className="flex flex-col md:items-end space-y-4">
          <p className="text-sm">
            Follow me on social media or contact me directly!
          </p>
          <div className="flex justify-between space-x-12 text-2xl">
            <a
              href="https://github.com/raselahmed63840"
              className="hover:text-purple-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rasel-ahmed-37b344288/"
              className="hover:text-purple-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://web.facebook.com/rasel.ahammed.33865"
              className="hover:text-purple-400 transition"
            >
              <FaFacebook />
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <button
              onClick={() => setTermsOpen(true)}
              className="hover:text-purple-400 transition"
            >
              Terms of Service
            </button>
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-purple-400 transition"
            >
              Privacy Policy
            </button>
            <a href="#" className="hover:text-purple-400 transition">
              Connect with Me
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        ©2025 Rasel Ahmed. All rights reserved.
      </div>

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative overflow-y-auto max-h-[80vh]">
            <button
              onClick={() => setPrivacyOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              ✖
            </button>
            <img
              src="https://img.freepik.com/free-vector/banner-policies-rules-agreement_107791-3232.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Privacy Policy Banner"
              className="rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              Privacy Policy
            </h2>
            <p className="text-gray-700 mb-2">
              At <strong>Rasel Ahmed</strong>, your privacy is our top priority.
              We are committed to safeguarding your personal information and
              ensuring transparency in how we handle your data. This Privacy
              Policy outlines the types of information we collect, how we use
              it, and the steps we take to protect it.
            </p>

            <h3 className="text-lg font-semibold text-purple-600 mt-4">
              🔎 Information We Collect
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
              <li>
                <strong>Personal Details:</strong> Name, email address, and
                contact information when you reach out to us.
              </li>
              <li>
                <strong>Usage Data:</strong> Pages visited, interactions, and
                preferences to improve your experience.
              </li>
              <li>
                <strong>Cookies:</strong> Small files that help us remember your
                settings and personalize content.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-purple-600 mt-4">
              ⚙️ How We Use Your Information
            </h3>
            <p className="text-gray-700 mb-2">
              Your data is used to provide better services, respond to
              inquiries, personalize your experience, and keep you updated about
              new projects or features. We never sell or share your information
              with third parties without your consent.
            </p>

            <h3 className="text-lg font-semibold text-purple-600 mt-4">
              🛡️ Data Protection
            </h3>
            <p className="text-gray-700 mb-2">
              We implement industry‑standard security measures to protect your
              information against unauthorized access, disclosure, or misuse.
              Regular updates and monitoring help us maintain a secure
              environment.
            </p>

            <h3 className="text-lg font-semibold text-purple-600 mt-4">
              👤 Your Rights
            </h3>
            <ul className="list-disc list-inside text-gray-700 mb-2 space-y-1">
              <li>Request access to the personal data we hold about you.</li>
              <li>
                Ask for corrections if your information is inaccurate or
                incomplete.
              </li>
              <li>Request deletion of your data when it’s no longer needed.</li>
              <li>Opt‑out of communications at any time.</li>
            </ul>

            <h3 className="text-lg font-semibold text-purple-600 mt-4">
              📩 Contact Us
            </h3>
            <p className="text-gray-700 mb-2">
              If you have any questions about this Privacy Policy or how your
              information is handled, please reach out at{" "}
              <a
                href="mailto:rasel63840@gmail.com"
                className="text-purple-600 font-semibold hover:underline"
              >
                rasel63840@gmail.com
              </a>
              . .
            </p>
            {/* ...rest of policy content */}
          </div>
        </div>
      )}

      {/* Terms of Service Modal with Team Members */}
      {isTermsOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative overflow-y-auto max-h-[80vh]">
            <button
              onClick={() => setTermsOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-purple-700 mb-6">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <a
                  key={index}
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center hover:scale-105 transition"
                >
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-24 h-24 rounded-full border-4 border-purple-400 mb-3"
                  />
                  <h3 className="text-lg font-semibold text-purple-600">
                    {member.name}
                  </h3>
                  <p className="text-gray-700 text-sm">{member.title}</p>
                  <p className="text-gray-500 text-xs">{member.designation}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
