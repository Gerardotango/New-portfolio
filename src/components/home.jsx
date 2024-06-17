import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://picsum.photos/id/1005/800/800',
    'https://picsum.photos/id/1006/800/800',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-row items-center h-[33rem]">
      <div className="flex flex-col justify-center ml-12 mr-8">
        <h1 className="text-4xl mb-4 font-train-one pt-24">Hello I AM</h1>
        <p className="text-4xl font-bold mb-8">
          Web Developper <br />
          Designer
        </p>
        <p className="text-white">
          Découvrez mes derniers projets et en savoir <br />
          plus sur moi.
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Link
            to="/projects"
            className="bg-black hover:bg-blue-600 text-white py-2 px-4 rounded-full"
          >
            Download cv
          </Link>
          <Link
            to="/projects"
            className="bg-transparent hover:bg-blue-600 text-white py-2 px-4 rounded-full border-2 border-white"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="flex-1 h-full ml-96 mt-56">
        <div className="rounded-full w-[22rem] h-[22rem] overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt="Profile"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;