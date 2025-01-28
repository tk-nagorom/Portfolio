import React from 'react';
import screenshotcerto from '../portfolioimage/screenshotcerto.png';
import Screensnnipets from '../portfolioimage/Screensnnipets.png';
import Randomwords from '../portfolioimage/Randomwords.png';
import expenstracker from '../portfolioimage/expenstracker.png';

const Project = () => {
  return (
    <div className=" bg-gray-900 flex flex-wrap gap-6 justify-between px-4">
      {/* First Project Card */}
      <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg hover:bg-gray-700 w-[280px]">
        <img
          src={screenshotcerto}
          alt="Screenshot Certo"
          className="w-[280px] h-[300px] mb-4 transition-transform duration-300 hover:scale-110"
        />
        <span className="text-white text-[18px] font-semibold underline mb-2">
          A Responsive Design
        </span>
        <h3 className="text-white font-bold text-lg mb-2">Project Name</h3>
        <p className="text-gray-400 text-sm text-center mb-4">
          A brief description of the project and its purpose.
        </p>
        <a
          href="https://meek-selkie-dbf229.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-green-600"
        >
          View Live
        </a>
      </div>

      {/* Second Project Card */}
      <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg hover:bg-gray-700 w-[280px]">
        <img
          src={Screensnnipets}
          alt="Screens Snippets"
          className="w-[280px] h-[300px] mb-4 transition-transform duration-300 hover:scale-110"
        />
        <span className="text-white text-[18px] font-semibold underline mb-2">
          A Responsive Design
        </span>
        <h3 className="text-white font-bold text-lg mb-2">Project Name</h3>
        <p className="text-gray-400 text-sm text-center mb-4">
          A brief description of the project and its purpose.
        </p>
        <a
          href="https://whimsical-torte-bbe175.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-green-600"
        >
          View Live
        </a>
      </div>

      {/* Third Project Card */}
      <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg hover:bg-gray-700 w-[280px]">
        <img
          src={Randomwords}
          alt="Random Words"
          className="w-[280px] h-[300px] mb-4 transition-transform duration-300 hover:scale-110"
        />
        <span className="text-white text-[18px] font-semibold underline mb-2">
          A Responsive Design
        </span>
        <h3 className="text-white font-bold text-lg mb-2">Project Name</h3>
        <p className="text-gray-400 text-sm text-center mb-4">
          A brief description of the project and its purpose.
        </p>
        <a
          href="https://incandescent-lolly-ff02cf.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-green-600"
        >
          View Live
        </a>
      </div>

      {/* Fourth Project Card */}
      <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg hover:bg-gray-700 w-[280px]">
        <img
          src={expenstracker}
          alt="Expense Tracker"
          className="w-[280px] h-[300px] mb-4 transition-transform duration-300 hover:scale-110"
        />
        <span className="text-white text-[18px] font-semibold underline mb-2">
          A Responsive Design
        </span>
        <h3 className="text-white font-bold text-lg mb-2">Project Name</h3>
        <p className="text-gray-400 text-sm text-center mb-4">
          A brief description of the project and its purpose.
        </p>
        <a
          href="https://stalwart-maamoul-47aae2.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-green-600"
        >
          View Live
        </a>
      </div>
    </div>
  );
};

export default Project;
