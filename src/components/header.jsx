import { Link, animateScroll as scroll } from 'react-scroll';
import { useState, useEffect } from 'react';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-[#612503] bg-[39%] py-6 px-4 sm:px-6 lg:px-8 shadow-md shadow-[rgba(0,0,0,0.5)] fixed top-0 w-full transition-all duration-300 z-50 ${
        isSticky ? 'shadow-lg shadow-[rgba(0,0,0,0.5)]' : ''
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <Link to="/" className="text-2xl font-bold ml-8 font-inter font-semibold">
            Gerardo Tango
          </Link>
        </div>
        <div className="lg:flex space-x-4 hidden">
          <Link to="/" className="hover:text-gray-400 font-inter font-semibold">
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="hover:text-gray-400 font-inter font-semibold"
          >
            About
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="hover:text-gray-400 font-inter font-semibold"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="hover:text-gray-400 font-inter font-semibold"
          >
            Contact
          </Link>
        
        <Link
          to="/#contact"
          className="hover:bg-white hover:border-white hover:text-black flex items-center border border-white pl-4 pr-4 rounded-full transition-colors duration-300 font-inter font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download cv
        </Link>
        </div>
        <button
          className="lg:hidden block text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#9776;
        </button>
      </div>
      {/* Menu Rideau pour les petits et moyens écrans */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[#612503] z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 text-3xl text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          <Link
            to="/"
            className="text-2xl font-bold text-white mb-6"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-2xl font-bold text-white mb-6"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-2xl font-bold text-white mb-6"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="text-2xl font-bold text-white mb-6"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
          to="/#contact"
          className="hover:bg-white hover:border-white hover:text-black flex items-center border border-white pl-4 pr-4 rounded-full transition-colors duration-300 font-inter font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download cv
        </Link>
        </div>
      )}
    </header>
  );
}

export default Header;