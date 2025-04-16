import React from "react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Ayush Kumar Gupta",
    img: "/akg.png",
    desc: "Full Stack developer passionate about crafting intuitive and responsive user experiences. Designed and built Aicruit, translating ideas into clean, modern interfaces with real impact.",
    bg: "bg-blue-900",
  },
  {
    name: "Aashi Tripathi",
    img: "/aashi.png",
    desc: "Full Stack Developer, driven by a love for building seamless, user-friendly digital experiences. Created AIResume to turn resume building into an intelligent, interactive experience — blending clean design with AI-powered personalization for real-world impact.",
    bg: "bg-purple-800",
  },
  {
    name: "Aayush Sharma",
    img: "/aayush.jpg",
    desc: "Full stack developer with a knack for building sleek and functional projects. Created PortfolioHub — a no-code portfolio builder that lets users craft personalized portfolio websites in minutes.",
    bg: "bg-slate-800",
  },
];

const AboutUs = () => {
  return (
    <div className="py-2 px-6 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {team.map((member) => (
          <div
            key={member.name}
            className={`relative text-center rounded-xl px-6 pt-16 pb-6 ${member.bg} shadow-lg`}
          >
            <motion.div
              className="absolute top-[-40px] left-1/2"
              initial={{ x: "-150%" }} // Start from far left
              animate={{ x: ["-150%", "150%", "-50%"] }} // Move right, then back to center
              transition={{
                duration: 1.8, // Smooth and fast
                ease: "easeInOut",
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-md"
              />
            </motion.div>
            <h3 className="text-xl font-semibold mt-2">{member.name}</h3>
            <p className="text-sm text-gray-200 mt-2">{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
