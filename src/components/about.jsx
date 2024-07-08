import { useState } from 'react';
import PersonalAbout from './Personal_about';
import ExperienceAbout from './Experience_about';
import Education_about from './Education_about';
import Skills_about from './Skills_about';

const About = () => {
  const [activeOption, setActiveOption] = useState('Personal');

  const options = [
    {
      name: 'Personal',
      description: <PersonalAbout />
    },
    {
      name: 'Experience',
      description: <ExperienceAbout />
    },
    {
      name: 'Education',
      description: <Education_about />
    },
    {
      name: 'Skills',
      description: <Skills_about />
    }
  ];

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };

  const getOptionDescription = () => {
    const selectedOption = options.find(opt => opt.name === activeOption);
    return selectedOption ? selectedOption.description : '';
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">About</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-12">
          <div className="bg-orange-900 rounded-lg shadow-md overflow-hidden w-full md:w-1/2 lg:w-1/3 h-96">
            {options.map(option => (
              <div
                key={option.name}
                className={`cursor-pointer flex justify-center items-center h-1/4 ${
                  activeOption === option.name ? 'text-blue-500' : 'text-gray-800'
                }`}
                onClick={() => handleOptionClick(option.name)}
              >
                <h3 className="text-lg font-bold text-white">{option.name}</h3>
              </div>
            ))}
          </div>
          <div className="bg-orange-900 rounded-lg shadow-md overflow-hidden w-full md:w-1/2 lg:w-2/3 h-96">
            <p className="text-white p-4">{getOptionDescription()}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;