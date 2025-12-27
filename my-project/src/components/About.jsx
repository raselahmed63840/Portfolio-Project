import React from "react";
import profileImage from "../photo/rasel.png";
const About = () => {
  return (
    <div>
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="relative inline-block group">
            <div
              className="absolute inset-0 rounded-xl 
                           bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400
                           blur-2xl opacity-40 transition-all duration-500
                           group-hover:blur-3xl group-hover:opacity-70"
            ></div>

            <img
              src={profileImage}
              alt="about"
              className="relative rounded-xl shadow-xl object-cover z-10
                           transition-all duration-500 group-hover:scale-105"
            />
          </div>

          <div>
            <span className=" text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
              About
            </span>{" "}
            <span></span>
            <span className=" text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              Me
            </span>
            <p className="text-gray-300 mb-6">
              I’m a MERN stack developer specialized in building responsive,
              dynamic, and modern web applications.
            </p>
            {/* SKILLS */}
            {[
              { skill: "HTML & CSS", level: "90%" },
              { skill: "Tailwind CSS", level: "85%" },
              { skill: "JavaScript", level: "92%" },
              { skill: "Node.js", level: "70%" },
              { skill: "Express.js", level: "86%" },
              { skill: "MongoDB", level: "84%" },
              { skill: "React JS", level: "90%" },
            ].map((s, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between text-white">
                  <span>{s.skill}</span>
                  <span>{s.level}</span>
                </div>

                {/* OUTER BAR */}
                <div className="w-full bg-[#1a1a1a] h-2 rounded-full mt-1 relative overflow-hidden">
                  {/* Soft RGB animated background */}
                  <div
                    className="
                    absolute inset-0 
                    bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 
                    blur-xl opacity-30
                  "
                  ></div>

                  {/* ACTUAL PROGRESS BAR */}
                  <div
                    className="
                    bg-gradient-to-r 
                    from-purple-500 via-pink-500 to-orange-400 
                    h-2 rounded-full shadow-md shadow-purple-500/30
                    relative z-10 transition-all duration-500
                  "
                    style={{ width: s.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TECHNOLOGY LOGOS SECTION */}
      </section>
    </div>
  );
};

export default About;
