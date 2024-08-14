// import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projets';
import Contact from './components/contact';
import Header from './components/header';
import Footer from './components/footer';
import Services from './components/services';


import ('/src/index.css');

function App() {
  


  return (
    <BrowserRouter>
    <div className="text-white">
    <Header/>

      <main className="">

        <div id="home">
          <Home />
        </div>
        <div id="about" className="">
          <About />
        </div>
        <div id="services" className="">
          <Services/>
        </div>
        <div id="projects" className="">
          <Projects />
        </div>
        <div id="contact" className="">
          <Contact />
        </div>
      </main>

      <Footer/>
    </div>
  </BrowserRouter>
  )
}

export default App
