import React from 'react';

function About() {
  const technologies = [
    {
      name: 'HTML',
      icon: 'fab fa-html5',
      color: 'text-orange-500',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS',
      icon: 'fab fa-css3-alt',
      color: 'text-blue-500',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'JavaScript',
      icon: 'fab fa-js-square',
      color: 'text-yellow-500',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'React',
      icon: 'fab fa-react',
      color: 'text-blue-400',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
  ];

  return (
    <section className='h-[50rem] bg-white flex justify-center items-center'>
      <div className='flex flex-col items-center gap-8 w-3/4'>
        <div>
          <h2 className="text-3xl font-extrabold text-black font-inter">About Me</h2>
        </div>
        <div className='flex justify-between items-center w-full'>
          <div className='w-1/2'>
            <p className="text-black mb-8 font-inter font-semibold">
              Je suis un développeur web passionné, spécialisé dans les technologies
              front-end telles que React.js et Tailwind CSS. J'aime créer des
              applications web visuellement attrayantes et performantes.
            </p>
          </div>
          <div className='w-1/2'>
            <p className="text-black mb-8 font-inter font-semibold">
              En plus de mon travail, j'aime explorer de nouveaux outils et
              technologies, lire des articles sur le développement web et participer à
              des projets open source.
            </p>
          </div>
        </div>
        <div className='flex justify-between items-start w-full border border-black p-4'>
          <div className='grid grid-cols-4 gap-4'>
            {technologies.map((tech, index) => (
              <div key={index} className='flex flex-col items-center justify-center bg-gray-200 rounded-full w-20 h-20 hover:scale-110 transition-transform duration-300 border border-black'>
                <img src={tech.image} alt={tech.name} className='w-10 h-10 object-contain' />
                <span className={`text-sm font-semibold ${tech.color}`}>{tech.name}</span>
              </div>
            ))}
          </div>
          <div className='w-1/2 border border-black p-4'>
            <div className='w-full flex flex-col gap-4'>
              <div className='w-full bg-gray-200 rounded-full h-4'>
                <div className='bg-blue-500 h-4 rounded-full w-9/12'></div>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-4'>
                <div className='bg-green-500 h-4 rounded-full w-8/12'></div>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-4'>
                <div className='bg-yellow-500 h-4 rounded-full w-7/12'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;