import React from 'react';
import { motion } from 'framer-motion';
import linkedin from '../portfolioimage/linkedin.png';
import email from '../portfolioimage/email.png';
import resum from '../portfolioimage/resum.png';
import github from '../portfolioimage/github.png';

const Home = () => {
  return (
    <div 
      id="Home"
      className="bg-[#0a192f] text-gray-300 flex flex-col justify-center md:pl-[250px]  md:pr-[25px] sm:px-8"
    >
      {/* Main Content */}
      <motion.div
  className="mt-[250px] flex flex-col items-start mx-4 sm:mx-0 mb-[100px]"
  initial={{ y: '10vw' }} // Start off-screen
  animate={{ y: 0 }} // Animate to original position
  transition={{ duration: 1, delay: 0.2 }}
  viewport={{ once: false, amount: 0.2 }} // Animate every time it's in view
  
>
  <p className="text-red-400 text-lg md:text-xl">Hi, my name is </p>
  <h1 className="text-[40px] md:text-[60px] font-bold text-white mb-2">
    Otuonye Chinagorom
  </h1>
  <h2 className="text-[24px] md:text-[32px] font-semibold text-gray-400">
    I'm a Front-End <br />Developer.
  </h2>
  <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
    I’m a front-end developer specializing in creating responsive and functional 
    React web applications. <br />I focus on designing digital experiences that 
    are user-friendly and visually appealing.
  </p>
  <button className="bg-transparent border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-[#0a192f] transition-colors">
    View Work
  </button>
</motion.div>


      {/* Sidebar */}
      <motion.div
        className="fixed left-6 top-1/3 flex flex-col items-start space-y-6 md:block hidden"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 1 }} // Delay the animation to start after the main content
      
      >
        <div className="flex items-center space-x-4 group cursor-pointer">
          <span className="hidden text-5xl md:text-3xl group-hover:inline">Linkedin</span>
          <img src={linkedin} alt="Linkedin" className="w-16 h-16 md:w-12 md:h-12" />
        </div>
        <div className="flex items-center space-x-4 group cursor-pointer">
          <span className="hidden text-5xl md:text-3xl group-hover:inline">Email</span>
          <img src={email} alt="Email" className="w-16 h-16 md:w-12 md:h-12" />
        </div>
        <div className="flex items-center space-x-4 group cursor-pointer">
          <span className="hidden text-5xl md:text-3xl group-hover:inline">Resume</span>
          <img src={resum} alt="Resume" className="w-16 h-16 md:w-12 md:h-12" />
        </div>
        <div className="flex items-center space-x-4 group cursor-pointer">
          <span className="hidden text-5xl md:text-3xl group-hover:inline">Github</span>
          <img src={github} alt="Github" className="w-16 h-16 md:w-12 md:h-12" />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;


