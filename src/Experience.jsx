import React from 'react';
import html from '../portfolioimage/html.png';
import css from '../portfolioimage/css.png';
import javascript from '../portfolioimage/javascript.png';
import react from '../portfolioimage/react.png';
import tailwind from '../portfolioimage/tailwind.png';

const Experien = () => {
  return (
    <div 
    id="Skill"
    className="bg-gray-900 px-4 py-8 sm:px-8 md:px-12 lg:pl-[320px] lg:pr-[36px] lg:pb-[36px]">
      <div>
        <h2 className="text-[24px] text-yellow-400 font-bold underline mb-4">Skills</h2>
        <h5 className='text-white mb-6'>These are the technologies I've worked with</h5>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {/* HTML */}
        <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg hover:bg-gray-700">
          <img src={html} alt="HTML Logo" className="w-[64px] h-[64px] mb-4" />
          <span className="text-white text-[18px] font-semibold underline">HTML</span>
        </div>
        {/* CSS */}
        <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg hover:bg-gray-700">
          <img src={css} alt="CSS Logo" className="w-[64px] h-[64px] mb-4" />
          <span className="text-white text-[18px] font-semibold underline">CSS</span>
        </div>
        {/* JavaScript */}
        <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg hover:bg-gray-700">
          <img src={javascript} alt="JavaScript Logo" className="w-[64px] h-[64px] mb-4" />
          <span className="text-white text-[18px] font-semibold underline">JavaScript</span>
        </div>
        {/* React */}
        <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg hover:bg-gray-700">
          <img src={react} alt="React Logo" className="w-[64px] h-[64px] mb-4" />
          <span className="text-white text-[18px] font-semibold underline">React</span>
        </div>
        {/* Tailwind */}
        <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg hover:bg-gray-700">
          <img src={tailwind} alt="Tailwind Logo" className="w-[64px] h-[64px] mb-4" />
          <span className="text-white text-[18px] font-semibold underline">Tailwind</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
