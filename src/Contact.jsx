import React from 'react';

const Contact = () => {
  return (
    <div 
    id="Contact"
    className="bg-gray-900 text-white px-4 md:pl-[250px] pt-[100px] flex items-center pb-[40px] sm:px-8">
      <div className="w-full max-w-md">
        <div className="mb-6">
          <h2 className="text-3xl font-bold border-b-4 border-gray-500 inline-block">Contact</h2>
          <p className="mt-2 text-gray-400">
            Submit the form below or send me an email - myemail@gmail.com
          </p>
        </div>
        <form action="">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 bg-gray-800 text-gray-300 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 bg-gray-800 text-gray-300 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 bg-gray-800 text-gray-300 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-3 rounded mt-4 hover:bg-gray-600 transition duration-300"
          >
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
