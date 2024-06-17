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
    {
      name: 'Angular',
      icon: 'fab fa-angular',
      color: 'text-red-500',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
    },
    {
      name: 'Figma',
      icon: 'fab fa-figma',
      color: 'text-purple-500',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    },
    {
      name: 'Photoshop',
      icon: 'fab fa-adobe',
      color: 'text-red-500',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg'
    },
    {
      name: 'Node.js',
      icon: 'fab fa-node-js',
      color: 'text-green-500',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'MySQL',
      icon: 'fas fa-database',
      color: 'text-blue-500',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
      name: 'PostgreSQL',
      icon: 'fas fa-database',
      color: 'text-green-500',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
    }
  ];

  return (
    <section className='h-[50rem] bg-white'>
      <div className='flex flex-row items-center justify-center h-full'>
        <div className='w-1/2 pr-12'>
          <h2 className="text-3xl font-bold mb-4 text-black">About Me</h2>
          <p className="text-black mb-8">
            Je suis un développeur web passionné, spécialisé dans les technologies
            front-end telles que React.js et Tailwind CSS. J'aime créer des
            applications web visuellement attrayantes et performantes.
          </p>
          <p className="text-black mb-8">
            En plus de mon travail, j'aime explorer de nouveaux outils et
            technologies, lire des articles sur le développement web et participer à
            des projets open source.
          </p>
        </div>
        <div className='w-1/2 flex justify-center items-center border border-black'>
          <div className='flex flex-wrap justify-center items-center gap-6'>
            {technologies.map((tech, index) => (
              <div key={index} className='w-20 h-20 bg-gray-200 rounded-full flex flex-col justify-center items-center hover:scale-110 transition-transform duration-300'>
                <img src={tech.image} alt={tech.name} className='w-10 h-10 object-contain' />
                <span className={`text-sm font-semibold ${tech.color}`}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;