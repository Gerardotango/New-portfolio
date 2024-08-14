import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Profil from './profil';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { motion } from "framer-motion";


function Home() {
  return (
    <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className=""
          >
    <div className="flex flex-col-reverse md:flex-row items-center h-auto md:h-[40rem] md:bg-center md:bg-cover md:bg-[url('/src/assets/bgr-dev.jpg')] bg-[url('/src/assets/responsive_bg9.jpg')] bg-cover bg-center rounded-br-[20rem] ">
      <div className="flex flex-col justify-center ml-4 md:ml-16 mr-4 md:mr-8 mb-12 md:mb-0">
        <h1 className="text-3xl md:text-4xl mb-4 font-heading pt-12 md:pt-24">Hello I AM</h1>
        <p className="text-3xl md:text-4xl font-extrabold mb-8 font-inter">
          Web Developper <br />
          & Designer
        </p>
        <p className="text-white font-inter text-base md:text-lg">
          Découvrez mes derniers projets <br/>et en savoir
          plus sur moi.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="hover:bg-white hover:border-white hover:text-black flex items-center border border-transparent bg-black pl-4 pr-4 h-10 rounded-full transition-colors duration-300 font-inter font-semibold w-36 md:w-auto cursor-pointer"
          >
            Contact Me
          </Link>

          <div className="flex flex-row gap-4">
            <div className="h-10 w-10 rounded-full flex items-center justify-center bg-black hover:bg-white hover:text-black transition-colors duration-300">
            <a href="https://www.facebook.com/gerardo.tango.56?locale=fr_FR" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
            </div>
            <div className="h-10 w-10 rounded-full flex items-center justify-center bg-black hover:bg-white hover:text-black transition-colors duration-300">
              <a href="https://www.linkedin.com/in/gerardo-tango-8ab41028a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="h-10 w-10 rounded-full flex items-center justify-center bg-black hover:bg-white hover:text-black transition-colors duration-300">
              <a href="https://github.com/Gerardotango/New-portfolio" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
            <div className="h-10 w-10 rounded-full flex items-center justify-center bg-black hover:bg-white hover:text-black transition-colors duration-300">
              <a href="https://www.whatsapp.com/Discussions/" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-full ml-0 pt-24 md:ml-96 mt-8 md:mt-96 md:pt-2">
        <div className="rounded-full w-[10rem] md:w-[22rem] h-[10rem] md:h-[22rem] overflow-hidden">
          <Profil />
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default Home;