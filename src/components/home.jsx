import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Profil from './profil';

function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center h-auto md:h-[40rem] rounded-br-[25rem] bg-orange-900">
      <div className="flex flex-col justify-center ml-4 md:ml-16 mr-4 md:mr-8 mb-12">
        <h1 className="text-3xl md:text-4xl mb-4 font-heading pt-12 md:pt-24">Hello I AM</h1>
        <p className="text-3xl md:text-4xl font-extrabold mb-8 font-inter">
          Web Developper <br />
          Designer
        </p>
        <p className="text-white font-inter">
          Découvrez mes derniers projets <br/>et en savoir
          plus sur moi.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Link
            to="/projects"
            className="hover:bg-white hover:border-white hover:text-black flex items-center border border-black bg-black pl-4 pr-4 h-10 rounded-full transition-colors duration-300 font-inter font-semibold w-36 md:w-auto"
          >
            Contact Me
          </Link>
          <Link
            to="/projects"
            className="hover:bg-white hover:border-white hover:text-black flex items-center border border-white pl-4 pr-4 h-10 rounded-full transition-colors duration-300 font-inter font-semibold w-36 md:w-auto"
          >
            Download cv
          </Link>
        </div>
      </div>
      <div className="flex-1 h-full ml-0 pt-24 md:ml-96 mt-8 md:mt-96">
        <div className="rounded-full w-[10rem] md:w-[22rem] h-[10rem] md:h-[22rem] overflow-hidden border border-white">
          <Profil />
        </div>
      </div>
    </div>
  );
}

export default Home;