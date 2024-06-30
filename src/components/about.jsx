import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Personal_about from './Personal_about';
import Experience_about from './Experience_about';
import Education_about from './Education_about';
import Skills_about from './Skills_about';

function About() {
  return (
    <section className="bg-white h-auto py-24 flex justify-center gap-12 ">
      <div className="flex flex-col h-96">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4 text-black">About</h2>
          <p className="text-black font-inter font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Sed ut risus in augue luctus venenatis.</p>
        </div>
        <div className="flex flex-col gap-10">

        <Link to="/personal" className="text-blue-500 hover:text-blue-700 border border-black text-center py-2">
            Personal
          </Link>
          <Link to="/experience" className="text-blue-500 hover:text-blue-700 border border-black text-center py-2">
            Experience
          </Link>
          <Link to="/skills" className="text-blue-500 hover:text-blue-700 border border-black text-center py-2">
            Skills
          </Link>
          <Link to="/education" className="text-blue-500 hover:text-blue-700 border border-black text-center py-2">
            Education
          </Link>
        </div>
      </div>
      <Routes>
        <Route path='/personal' element={<Personal_about/>} />
        <Route path='/experience' element={<Experience_about/>} />
        <Route path='/education' element={<Education_about/>} />
        <Route path='/skills' element={<Skills_about/>} />
      </Routes>
    </section>
  );
}

export default About;

