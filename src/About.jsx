import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="About"
      className="bg-[#0a192f] text-white py- sm:py-10 px-4 sm:px-8 md:pr-[100px] md:pl-[250px]"
    >
      <div>
        {/* Title Section */}
        <div className="mb-8 flex justify-center sm:justify-start lg:ml-[370px] ">
          <h3 className="text-2xl sm:text-3xl font-bold border-b-4 border-white-500 inline-block">
            About
          </h3>
        </div>

        {/* Responsive Column Layout */}
        <div className="md:flex md:flex-col lg:grid lg:grid-cols-2 lg:gap-6 space-y-8 lg:space-y-0 lg:ml-[-400px]">
          {/* Intro Section */}
          <div className="lg:text-right">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold">
              Hi, I'm Otuonye Chinagorom, nice to meet
              <br className="hidden sm:inline" /> you. Please take a look
              <br className="hidden sm:inline" /> around.
            </p>
          </div>

          {/* Description Section */}
          <motion.div
            initial={{ y: "25%" }} // Start off-screen to the right
            whileInView={{ y: 10 }} // Animate to its final position when in view
            viewport={{ once: false, amount: 0.5 }}// Trigger animation once, when 50% of the text is in view
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              duration: 1,
                delay: 0.2
            }} // Smooth spring animation
          >
            <h4 className="text-sm sm:text-base md:text-lg leading-relaxed pb-[60px]">
              I am a dedicated front-end developer with a passion for designing and building exceptional digital
              experiences. I specialize in developing highly responsive and visually appealing web applications that
              provide seamless performance across all devices. With expertise in writing efficient and reusable React
              functions, I focus on blending creativity with functionality to deliver user-centric solutions that elevate
              engagement and drive results. With a strong eye for detail and a commitment to excellence, I strive to create
              web applications that are not only visually stunning but also optimized for an outstanding user experience.
            </h4>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
