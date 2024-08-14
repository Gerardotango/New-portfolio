import React from 'react';
import { ImHtmlFive2 } from "react-icons/im";
import { TbBrandCss3 } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiAngular } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { motion } from "framer-motion";

function Skills_about() {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className=""
          >
        <div className='flex flex-col h-auto md:h-96'>
            <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2>
                <p className="text-white">This section contains my personal details, including contact information and<br /> professional background.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-8 md:grid-rows-4 text-white gap-4 mt-8">
                <div className="flex justify-center items-center hover:border-gray-100 transition-all duration-300 ease-in-out rounded-2xl">
                    <ImHtmlFive2 size={30} className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
                <div className="flex justify-center items-center hover:border-gray-100 transition-all duration-300 ease-in-out rounded-2xl">
                    <TbBrandCss3 size={30} className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
                <div className="flex justify-center items-center hover:border-gray-100 transition-all duration-300 ease-in-out rounded-2xl">
                    <IoLogoJavascript size={30} className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
                <div className="flex justify-center items-center hover:border-gray-100 transition-all duration-300 ease-in-out rounded-2xl">
                    <FaReact size={30} className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
                <div className="flex justify-center items-center hover:border-gray-100 transition-all duration-300 ease-in-out rounded-2xl">
                    <SiAngular size={30} className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
                <div className="flex justify-center items-center hover:border-gray-100 transition-all duration-300 ease-in-out rounded-2xl">
                    <FaNodeJs size={30} className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
                <div className="flex justify-center items-center hover:border-gray-100 transition-all duration-300 ease-in-out rounded-2xl">
                    <SiExpress size={30} className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
                <div className="flex justify-center items-center hover:border-gray-100 transition-all duration-300 ease-in-out rounded-2xl">
                    <SiAdobephotoshop size={30} className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
                <div className="flex justify-center items-center hover:border-gray-100 transition-all duration-300 ease-in-out rounded-2xl">
                    <SiCanva size={30} className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
                <div className="flex justify-center items-center hover:border-gray-100 transition-all duration-300 ease-in-out rounded-2xl">
                    <SiMysql size={30} className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
                <div className="flex justify-center items-center hover:border-gray-100 transition-all duration-300 ease-in-out rounded-2xl">
                    <BiLogoPostgresql size={30} className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
                <div className="flex justify-center items-center hover:border-gray-100 transition-all duration-300 ease-in-out rounded-2xl">
                    <SiMongodb size={30} className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
                <div className="flex justify-center items-center hover:border-gray-100 transition-all duration-300 ease-in-out rounded-2xl">
                    <FaGithub size={30} className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
                <div className="flex justify-center items-center hover:border-gray-100 transition-all duration-300 ease-in-out rounded-2xl">
                    <FaWordpress size={30} className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
                <div className="flex justify-center items-center hover:border-gray-100 transition-all duration-300 ease-in-out rounded-2xl">
                    <SiAdobeillustrator size={30} className="transition-transform duration-300 ease-in-out hover:scale-110" />
                </div>
            </div>
        </div>
        </motion.div>
    )
}

export default Skills_about;