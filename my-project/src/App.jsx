import React from "react";

import State from "./components/Stats";
import Service from "./components/Service";
import PortfolioSection from "./components/Portfolio";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TeamSection from "./components/TeamSection";
import Technology from "./components/Technology";
export default function App() {
  return (
    <div className=" bg-[#160014] text-white font-sans scroll-smooth">
      {/* ================= NAVBAR ================= */}
      <NavBar />

      {/* ================= HERO ================= */}
      <Hero />

      {/* ================= ABOUT ================= */}
      <About />
      {/* ================= TECHNOLOGY ================= */}
      <Technology />
      {/* ================= STATS ================= */}

      <State />

      {/* ================= SERVICES ================= */}
      <Service />

      {/* ================= PORTFOLIO ================= */}

      <PortfolioSection />
      {/* ================= TeamSection ================= */}
      <TeamSection />
      {/* ================= CONTACT ================= */}

      <Contact />
      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
