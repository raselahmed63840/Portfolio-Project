import React, { useState } from "react";
import profileImage from "../photo/rasel.png";
import sakibImage from "../photo/sakib.png";

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const team = [
    {
      name: "Rasel Ahmed",
      title: "Founder",
      designation: "MERN Developer",
      image: profileImage,
      desc: "Rasel leads the team with deep expertise in React, Node.js, and TailwindCSS. He ensures every project is user-friendly and scalable.",
    },
    {
      name: "Tawabur Rahman Sakib",
      title: "UI/UX Designer",
      designation: "Creative Lead",
      image: sakibImage,
      desc: "Sakib crafts intuitive interfaces and smooth user flows, making every app visually appealing and easy to use.",
    },
    {
      name: "Nusrat Jahan",
      title: "Project Manager",
      designation: "Team Coordinator",
      image:
        "https://img.freepik.com/premium-vector/pretty-female-cartoon-face-stock-illustration_1323048-18750.jpg",
      desc: "Nusrat keeps the team organized and on track, ensuring deadlines are met and quality is maintained.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Helping{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Team Members
          </span>
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <button
              key={index}
              onClick={() => setSelectedMember(member)}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full border-4 border-white mb-2"
              />
              <h3 className="text-xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-sm text-gray-300">{member.title}</p>
              <p className="text-xs text-gray-400">{member.designation}</p>
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-[#1a1a1a] p-8 rounded-lg max-w-2xl w-full text-white relative overflow-y-auto max-h-[80vh]">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
              >
                ✖
              </button>

              {/* Image area that fully fills width with controlled height */}
              {/* Image area with full head visible and no cropping */}
              <div className="w-full h-full object-contain object-center pt-2">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-contain object-top"
                />
              </div>

              <h3 className="text-2xl font-bold mb-2">{selectedMember.name}</h3>
              <div className="text-purple-400 font-medium">
                {selectedMember.title}
              </div>
              <div className="text-gray-400 text-sm mb-4">
                {selectedMember.designation}
              </div>
              <div className="text-gray-300 text-sm leading-relaxed">
                {selectedMember.desc}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
