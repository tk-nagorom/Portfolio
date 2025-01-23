import React from "react";
import { motion } from "framer-motion";
import html from "../portfolioimage/html.png";
import css from "../portfolioimage/css.png";
import javascript from "../portfolioimage/javascript.png";
import react from "../portfolioimage/react.png";
import tailwind from "../portfolioimage/tailwind.png";

const Skills = () => {
  return (
    <div
      id="Skills"
      className="bg-gray-900 px-4 py-8 sm:px-8 y lg:pl-[250px] lg:pr-[36px] lg:pb-[36px]  md:pl-[250px] "
    >
      <div>
        <h2 className="text-[24px] text-yellow-400 font-bold underline mb-4">
          Skills
        </h2>
        <h5 className="text-white mb-6">
          These are the technologies I've worked with
        </h5>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {/* HTML */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg cursor-pointer hover:bg-gray-700"
          whileHover={{ y: [-10, 0] }} // Creates a bounce effect
          transition={{
            duration: 0.5, // Controls the speed of the bounce
            repeat: 1, // Repeats the bounce animation once
            repeatType: "reverse", // Reverses the bounce animation
            
          }}
        >
          <img src={html} alt="HTML Logo" className="w-[64px] h-[64px] mb-4" />
          <span className="text-white text-[18px] font-semibold underline">
            HTML
          </span>
        </motion.div>

        {/* CSS */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg cursor-pointer hover:bg-gray-700"
          whileHover={{ y: [-10, 0] }} // Creates a bounce effect
          transition={{
            duration: 0.5,
            repeat: 1,
            repeatType: "reverse",
            
          }}
        >
          <img src={css} alt="CSS Logo" className="w-[64px] h-[64px] mb-4" />
          <span className="text-white text-[18px] font-semibold underline">
            CSS
          </span>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg cursor-pointer hover:bg-gray-700"
          whileHover={{ y: [-10, 0] }} // Creates a bounce effect
          transition={{
            duration: 0.5,
            repeat: 1,
            repeatType: "reverse",
            
          }}
        >
          <img
            src={javascript}
            alt="JavaScript Logo"
            className="w-[64px] h-[64px] mb-4"
          />
          <span className="text-white text-[18px] font-semibold underline">
            JavaScript
          </span>
        </motion.div>

        {/* React */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg cursor-pointer hover:bg-gray-700"
          whileHover={{ y: [-10, 0] }} // Creates a bounce effect
          transition={{
            duration: 0.5,
            repeat: 1,
            repeatType: "reverse",
            
          }}
        >
          <img src={react} alt="React Logo" className="w-[64px] h-[64px] mb-4" />
          <span className="text-white text-[18px] font-semibold underline">
            React
          </span>
        </motion.div>

        {/* Tailwind */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg cursor-pointer hover:bg-gray-700"
          whileHover={{ y: [-10, 0] }} // Creates a bounce effect
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            repeat: 1,
            repeatType: "reverse",
            
          }}
        >
          <img
            src={tailwind}
            alt="Tailwind Logo"
            className="w-[64px] h-[64px] mb-4"
          />
          <span className="text-white text-[18px] font-semibold underline">
            Tailwind
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
