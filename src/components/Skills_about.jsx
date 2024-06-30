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

function Skills_about() {
    return (
        <div className='flex flex-col h-96'>
            <div>
                <h2 className="text-2xl font-bold mb-4 text-black">Skills</h2>
                <p className="text-black">This section contains my personal details, including contact information and<br /> professional background.</p>
            </div>

            <div className="grid grid-cols-4 grid-rows-4 h-56 text-black  gap-4 mt-8">
                <div className="border border-black pl-10 pt-[4px] flex-wrap">
                <ImHtmlFive2 size={35}/>
                </div>
                <div className="border border-black pl-10 pt-[4px]">
                <TbBrandCss3  size={35}/>
                </div>
                <div className="border border-black pl-10 pt-[4px]">
                <IoLogoJavascript size={35}/>
                </div>
                <div className="border border-black pl-10 pt-[4px]">
                <FaReact size={35}/>
                </div>
                <div className="border border-black pl-10 pt-[4px]">
                <SiAngular size={35}/>
                </div>
                <div className="border border-black pl-10 pt-[4px]">
                <FaNodeJs size={35}/>
                </div>
                <div className="border border-black pl-10 pt-[4px]">
                <SiExpress size={35}/>
                </div>
                <div className="border border-black pl-10 pt-[4px]">
                <SiAdobephotoshop size={35}/>
                </div>
                <div className="border border-black pl-10 pt-[4px]">
                <SiCanva size={35}/>
                </div>
                <div className="border border-black pl-10 pt-[4px]">
                <SiMysql size={35}/>
                </div>
                <div className="border border-black pl-10 pt-[4px]">
                <BiLogoPostgresql size={35}/>
                </div>
                <div className="border border-black pl-10 pt-[4px]">
                <SiMongodb size={35}/>
                </div>
                <div className="border border-black pl-10 pt-[4px]">
                <FaGithub size={35}/>
                </div>
                <div className="border border-black pl-10 pt-[4px]">
                <FaWordpress size={35}/>
                </div>
                <div className="border border-black pl-10 pt-[4px]">
                <SiAdobeillustrator size={35}/>
                </div>
            </div>
        </div>
    )
}

export default Skills_about;