import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Personal_about from './Personal_about';
import Experience_about from './Experience_about';
import Education_about from './Education_about';
import Skills_about from './Skills_about';


function About() {
  return (
    <section className="bg-white py-24 flex justify-center gap-12">
      <div className="flex flex-col h-auto">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-4 text-black">About</h2>
          <p className="text-black font-inter font-semibold">
            Get to know me better through these sections.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <Link
            to="/personal"
            className="text-blue-500 hover:text-blue-700 border border-black py-2 px-4 rounded-md"
          >
            Personal
          </Link>
          <Link
            to="/experience"
            className="text-blue-500 hover:text-blue-700 border border-black py-2 px-4 rounded-md"
          >
            Experience
          </Link>
          <Link
            to="/skills"
            className="text-blue-500 hover:text-blue-700 border border-black py-2 px-4 rounded-md"
          >
            Skills
          </Link>
          <Link
            to="/education"
            className="text-blue-500 hover:text-blue-700 border border-black py-2 px-4 rounded-md"
          >
            Education
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/personal" element={<Personal_about/>} />
        <Route path="/experience" element={<Experience_about />} />
        <Route path="/education" element={<Education_about />} />
        <Route path="/skills" element={<Skills_about />} />
      </Routes>
    </section>
  );
}

export default About;
