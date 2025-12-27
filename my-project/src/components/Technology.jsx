import React, { useState } from "react";

const techData = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    name: "HTML",
    article:
      "HTML (HyperText Markup Language) is the backbone of web pages. It structures content using elements like headings, paragraphs, links, and images. Every modern website starts with HTML as its foundation.",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    name: "CSS",
    article:
      "CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, and responsive design, making websites visually appealing and user-friendly.",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    name: "JavaScript",
    article:
      "JavaScript is the programming language of the web. It adds interactivity, dynamic content, and logic to websites. From animations to form validation, JavaScript powers modern web experiences.",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    name: "React",
    article:
      "React is a powerful JavaScript library for building user interfaces. It uses components and a virtual DOM to create fast, scalable, and maintainable applications.",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    name: "Node.js",
    article:
      "Node.js is a runtime environment that allows JavaScript to run on the server. It enables building scalable backend services and APIs using a single programming language across frontend and backend.",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    name: "Express.js",
    article:
      "Express.js is a lightweight web framework for Node.js. It simplifies building APIs and web applications with routing, middleware, and powerful tools for handling requests and responses.",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
    article:
      "MongoDB is a NoSQL database that stores data in flexible JSON-like documents. It’s widely used for modern applications requiring scalability, speed, and schema-less data storage.",
  },
];

const Technology = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <div>
      <div className="w-full mt-16">
        <h2 className="text-center text-3xl font-bold text-white mb-8">
          Technologies I Use
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8 place-items-center">
          {techData.map((tech, i) => (
            <div
              key={i}
              onClick={() => setSelectedTech(tech)}
              className="group flex flex-col items-center space-y-2 cursor-pointer"
            >
              {/* Icon Wrapper */}
              <div className="relative w-20 h-20 flex items-center justify-center">
                {/* RGB Glow */}
                <div
                  className="absolute inset-0 rounded-xl 
                               bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 
                               blur-xl opacity-40 
                               transition-all duration-500 
                               group-hover:blur-2xl group-hover:opacity-90"
                ></div>

                {/* Icon Container */}
                <div
                  className="relative bg-[#0d001a] rounded-xl p-4 shadow-lg
                               transition-all duration-500 
                               group-hover:scale-110 group-hover:shadow-2xl"
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Logo Name */}
              <p className="text-white text-sm font-medium group-hover:text-purple-400 transition">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔵 Popup Modal */}
      {selectedTech && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-[500px] relative">
            <button
              onClick={() => setSelectedTech(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              ✖
            </button>
            <div className="flex flex-col items-center">
              <img
                src={selectedTech.src}
                alt={selectedTech.name}
                className="w-16 h-16 mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{selectedTech.name}</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {selectedTech.article}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Technology;
