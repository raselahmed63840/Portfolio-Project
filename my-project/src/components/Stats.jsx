import React from "react";

const State = () => {
  return (
    <div>
      {/* ================= STATS ================= */}
      <section className="w-full bg-gradient-to-b bg-[#160014]  py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 items-center text-center gap-8">
            {/* Experience */}
            <div className="relative">
              <h2
                className="text-5xl md:text-6xl font-bold 
          bg-gradient-to-r from-purple-500 to-orange-400 
          bg-clip-text text-transparent drop-shadow-lg"
              >
                1.2+
              </h2>
              <p className="mt-3 text-gray-300 tracking-wide">
                Years Of Experience
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:flex justify-center">
              <span className="h-20 w-[1px] bg-gradient-to-b from-transparent via-gray-500 to-transparent"></span>
            </div>

            {/* Projects */}
            <div className="relative">
              <h2
                className="text-5xl md:text-6xl font-bold 
          bg-gradient-to-r from-pink-500 to-purple-500 
          bg-clip-text text-transparent drop-shadow-lg"
              >
                7+
              </h2>
              <p className="mt-3 text-gray-300 tracking-wide">
                Project Completed
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:flex justify-center">
              <span className="h-20 w-[1px] bg-gradient-to-b from-transparent via-gray-500 to-transparent"></span>
            </div>

            {/* Learning */}
            <div className="relative">
              <h2
                className="text-5xl md:text-6xl font-bold 
          bg-gradient-to-r from-orange-400 to-pink-500 
          bg-clip-text text-transparent drop-shadow-lg"
              >
                100%
              </h2>
              <p className="mt-3 text-gray-300 tracking-wide">
                Learning & Growth
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default State;
