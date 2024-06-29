import React from 'react';

function Projects() {
  const projects = [
    {
      title: 'Projet 1',
      description: 'Une application web réactive créée avec React.js et Tailwind CSS.',
      image: '/src/assets/Gerardo.JPG',
      link: '#'
    },
    {
      title: 'Projet 2',
      description: 'Un site web de commerce électronique avec une conception moderne.',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    },
    {
      title: 'Projet 3',
      description: 'Une application de gestion de tâches avec des fonctionnalités avancées.',
      image: 'https://via.placeholder.com/300x200',
      link: '#'
    }
  ];

  return (
    <section className='h-auto py-24 flex justify-center items-center flex flex-col bg-orange-900'>
      <div className='mb-12 sm:mb-24'>
        <h2 className="text-3xl font-inter font-extrabold text-white">Projects</h2>
      </div>
      <div className="px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden border-2 border-white bg-transparent hover:scale-105 transition-transform duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 hover:scale-105 transition-transform duration-300 font-inter font-semibold">{project.title}</h3>
              <p className="text-white mb-4 hover:scale-105 transition-transform duration-300 font-inter font-semibold">{project.description}</p>
              <a
                href={project.link}
                className="bg-black hover:bg-white hover:text-black text-white py-2 px-4 rounded-full hover:scale-105 transition-transform duration-300 font-inter font-semibold"
              >
                see the project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;