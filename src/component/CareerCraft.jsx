import React from "react";
import { motion } from "framer-motion";

const websites = [
  {
    name: "AIcruit",
    title: "Interview Prep",
    description:
      "Ace interviews with real-time AI-driven simulations and actionable feedback.",
    color: "bg-gradient-to-br from-blue-800 to-blue-900 text-white",
    link: "https://careercraft-cruit.vercel.app/",
    icon: "🧠",
  },
  {
    name: "AIres",
    title: "Resume Generator",
    description:
      "Design tailored, professional resumes that stand out from the crowd effortlessly.",
    color: "bg-gradient-to-br from-gray-200 to-white text-black",
    link: "https://careercraft-res.vercel.app/",
    icon: "📄",
  },
  {
    name: "Portfoliobuilder",
    title: "Portfolio Web",
    description:
      "Showcase your achievements with modern, responsive digital portfolios.",
    color: "bg-gradient-to-br from-gray-900 to-black text-white",
    link: "https://careercraft-portfolio.vercel.app/",
    icon: "🗂️",
  },
];

const CareerCraft = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-white text-white flex flex-col font-sans"
    >
      <header className="p-6 bg-black shadow-lg border-b border-blue-800 rounded-b-4xl flex justify-center relative">
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        >
          CareerCraft
        </motion.h1>

        <motion.p
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-gray-400 italic"
        >
          {/* Fueling professional growth with smart tools */}
        </motion.p>
      </header>

      <main className="flex-grow p-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-3 text-white tracking-tight">
            Shape Your Career Journey
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            CareerCraft empowers you with AI-driven tools to elevate your career
            — from confident interviews to standout resumes and stunning
            portfolios.
          </p>
          <p className="text-md text-gray-400 max-w-xl mx-auto mt-4">
            Your career deserves more than templates. It deserves
            transformation.
          </p>
          <p className="text-md text-gray-400 max-w-xl mx-auto mt-2 italic">
            Built for dreamers. Designed for doers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 mt-14">
          {websites.map((site, index) => (
            <motion.a
              key={site.name}
              href={site.link}
              initial={{ opacity: 0, y: 40 }}
              whileHover={{ scale: 1.08, rotate: [0, 1, -1, 0] }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`rounded-2xl backdrop-blur-md bg-opacity-30 border border-white/10 hover:border-blue-400 shadow-xl hover:shadow-blue-500/40 transition-all duration-300 p-6 transform cursor-pointer ${site.color}`}
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col h-full"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">
                    {site.icon} {site.title}
                  </h3>
                  <p className="text-sm opacity-90">{site.description}</p>
                </div>
                <div className="mt-auto">
                  <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full transition-all">
                    Explore {site.name}
                  </span>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>
      </main>

      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-black p-6 text-center text-sm text-gray-500 border-t rounded-t-4xl border-blue-900"
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <span>© 2025 CareerCraft — Smart Tools. Smarter Careers.</span>
          <a
            href="mailto:careercraft.ai@gmail.com"
            className="text-blue-400 hover:text-blue-500 transition-colors"
          >
            careercraft6969@gmail.com
          </a>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default CareerCraft;
