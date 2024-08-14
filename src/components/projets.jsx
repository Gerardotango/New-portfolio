import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";

function MyProjects() {
  const projects = [
    {
      id: 1,
      number: 1,
      title: 'Biblical Teachings',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augue luctus venenatis.',
      descriptions: 'React js, Tailwindcss, Node js, Postgresql',
      image: './src/assets/Projet1.png'
    },
    {
      id: 2,
      number: 2,
      title: 'Wordpress',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augue luctus venenatis.',
      descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in augue luctus venenatis.',
      image: './src/assets/Gerardo.JPG'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
        </div>
        <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border-transparent rounded-lg p-6"
          >
        <div className="flex flex-col sm:flex-row justify-center gap-12">
        <div className="bg-orange-900 rounded-lg shadow-md overflow-hidden w-full max-w-2xl sm:w-1/2">
        <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className=""
          >
         <div className="p-6">
    <h1 className="text-3xl  text-white mb-2 font-heading">{projects[currentIndex].number}</h1>
    <h1 className="text-3xl font-bold text-white mt-12">{projects[currentIndex].title}</h1>
  </div>
  <div className="p-6 border border-b-white border-transparent ml-4 mr-4">
    <p className="text-white mb-4 ">{projects[currentIndex].description}</p>
    <p className="text-white mb-4">{projects[currentIndex].descriptions}</p>
    
  </div>
  <div className='p-6'>
    <div className='w-[1.7rem]'>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
     <FaGithub size={25} className='text-white hover:text-black'/>
    </a>
    </div>
    </div>
    </motion.div>
</div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-2xl sm:w-1/2">
            <img
              src={projects[currentIndex].image}
              alt={`Project ${currentIndex + 1}`}
              className="w-full h-96 object-cover"
            />
            <div className="flex justify-between items-center mt-4 px-4 pb-4">
              <button
                className="bg-orange-900 hover:bg-black text-white py-2 px-4 rounded-lg"
                onClick={handlePrev}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="bg-orange-900 hover:bg-black text-white py-2 px-4 rounded-lg"
                onClick={handleNext}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MyProjects;