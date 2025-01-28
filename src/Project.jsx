import React, { useState } from "react";
import screenshotcerto from "../portfolioimage/screenshotcerto.png";
import Screensnnipets from "../portfolioimage/Screensnnipets.png";
import Randomwords from "../portfolioimage/Randomwords.png";
import expenstracker from "../portfolioimage/expenstracker.png";

const projects = [
  {
    id: 1,
    image: screenshotcerto,
    alt: "Screenshot Certo",
    title: "Responsive Design",
    descriptionShort:
      "This design demonstrates my ability to create user-friendly, responsive layouts that adapt seamlessly across different screen sizes. ...",
    descriptionLong:
      "This design demonstrates my ability to create user-friendly, responsive layouts that adapt seamlessly across different screen sizes. The project includes modern UI elements, intuitive navigation, and a visually appealing color scheme. It showcases my proficiency in using tools like HTML, CSS, and JavaScript (or a framework/library if applicable) to deliver a polished and functional interface. The design ensures accessibility and usability for diverse users, highlighting my skills in crafting professional front-end solutions.",
    link: "https://meek-selkie-dbf229.netlify.app",
  },
  {
    id: 2,
    image: Screensnnipets,
    alt: "Screens Snippets",
    title: "Snippets App",
    descriptionShort:
      "Snippets is an app I built that allows users to share photos, their feelings, and messages with their close friends.",
    descriptionLong:
      "Snippets is an app I built that allows users to share photos, their feelings, and messages with their close friends. It’s designed to provide a personal and seamless way to stay connected and express oneself. The app focuses on easy sharing, offering a platform where users can quickly upload pictures, share their emotions, and send messages within a trusted circle of friends.",
    link: "https://whimsical-torte-bbe175.netlify.app/",
  },
  {
    id: 3,
    image: Randomwords,
    alt: "Random Words",
    title: "Random Words Game",
    descriptionShort:
      "Random Words is an app I created that generates random words for users to guess.",
    descriptionLong:
      "Random Words is an app I created that leverages an API to generate random words based on the number of inputs provided. The app gives you the first and last letter of a randomly selected word and pronounces it for you, offering a helpful tip to guess the word. After every ten attempts, it scores you on your spelling accuracy, providing feedback on correct and incorrect spellings.",
    link: "https://incandescent-lolly-ff02cf.netlify.app/",
  },
  {
    id: 4,
    image: expenstracker,
    alt: "Expense Tracker",
    title: "Expenses Tracker",
    descriptionShort:
      "Expenses Tracker is a financial management app that helps users track their income and expenses.",
    descriptionLong:
      "Expenses Tracker is a financial management app that helps users track their income and expenses. It features an Income page for recording all income sources and an Expenses page that automatically deducts expenses from your income for real-time balance updates. The app includes a spending limit feature to help you stay within your budget, and a real-time currency conversion from dollars to naira for international users. A Chart Bar visualizes your spending patterns, and a future expense scheduler allows you to plan and track upcoming payments. This user-friendly app makes it easy to manage and optimize your finances.",
    link: "https://stalwart-maamoul-47aae2.netlify.app/",
  },
];

const Project = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDescription = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div id="Project" className="w-full min-h-screen bg-gray-900 pt-16 px-4 xl:pl-[200px] lg:pl-[200px] md:pl-[250px]">
      <div className="max-w-[1200px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-6 rounded-lg flex flex-col items-center shadow-lg hover:bg-gray-700 transition-colors duration-300 "
          >
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-[200px] object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-white font-bold text-lg mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm text-center mb-4">
              {expandedProject === project.id
                ? project.descriptionLong
                : project.descriptionShort}
            </p>
            <button
              onClick={() => toggleDescription(project.id)}
              className="text-blue-500 text-sm"
            >
              {expandedProject === project.id ? "See Less" : "See More"}
            </button>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-green-600 mt-4"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
