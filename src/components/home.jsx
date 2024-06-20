import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Profil from './profil';

function Home() {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const images = [
  //   'https://picsum.photos/id/1005/800/800',
  //   'https://picsum.photos/id/1006/800/800',
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [images.length]);

  return (
    <div className="flex flex-row items-center h-[33rem] rounded-br-[25rem] bg-orange-900">
      <div className="flex flex-col justify-center ml-16 mr-8 mb-12">
        <h1 className="text-4xl mb-4 font-heading pt-24">Hello I AM</h1>
        <p className="text-4xl font-bold mb-8 font-inter font-semibold">
          Web Developper <br />
          Designer
        </p>
        <p className="text-white font-inter">
          Découvrez mes derniers projets et en savoir <br />
          plus sur moi.
        </p>
        <div className="flex flex-row gap-4 mt-8">
          <Link
            to="/projects"
            className="hover:bg-white hover:border-white hover:text-black flex items-center border border-black bg-black pl-4 pr-4 h-10 rounded-full transition-colors duration-300 font-inter font-semibold"
          >
            Contact Me
          </Link>
          <Link
            to="/projects"
            className="hover:bg-white hover:border-white hover:text-black flex items-center border border-white pl-4 pr-4 h-10 rounded-full transition-colors duration-300 font-inter font-semibold"
          >
            Download cv
          </Link>
        </div>
      </div>
      <div className="flex-1 h-full ml-96 mt-56">
        <div className="rounded-full w-[22rem] h-[22rem] overflow-hidden">
          {/* <img
            src={images[currentImageIndex]}
            alt="Profile"
            className="w-full h-full object-cover transition-opacity duration-1000"
          /> */}
          <Profil/>
        </div>
      </div>
    </div>
  );
}

export default Home;