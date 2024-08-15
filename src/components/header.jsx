import { Link, animateScroll as scroll } from 'react-scroll';
import { useState, useEffect } from 'react';
import DownloadCV from './Downloadcv';

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

  const handleDownloadClick = async (event) => {
    event.preventDefault(); // Empêche le comportement par défaut

    try {
      // Récupérer le fichier PDF
      const response = await fetch('https://cdn2.cvdesignr.com/u/cv/pdf/64ca2dbc32d58_4dba140da750a066dece5ca13ffb63b9109d4903_02aa9.pdf');
      const blob = await response.blob();

      // Créer un lien de téléchargement temporaire
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', 'cv.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Erreur lors du téléchargement du fichier:', error);
    }
  };

  return (
    <header
      className={`bg-orange-800 py-6 px-4 sm:px-6 lg:px-8  fixed top-0 w-full transition-all duration-300 z-50 ${
        isSticky ? 'shadow-lg shadow-[rgba(0,0,0,0.5)]' : ''
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <a href="/" className="text-2xl font-inter font-semibold pl-4 text-white hover:text-gray-300">Gerardo Tango</a>
        </div>
        <div className="lg:flex space-x-4 hidden">
        <a href="/" className="font-inter font-semibold pl-4 text-white hover:text-gray-400">Home</a>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="hover:text-gray-400 font-inter font-semibold cursor-pointer"
          >
            About
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="hover:text-gray-400 font-inter font-semibold cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="hover:text-gray-400 font-inter font-semibold cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="hover:text-gray-400 font-inter font-semibold cursor-pointer"
          >
            Contact
          </Link>
          </div>

          <div className='lg:flex space-x-4 hidden'>
          <Link
          to="/#contact"
          className="hover:bg-white hover:border-white hover:text-black flex items-center border border-white pl-4 pr-4 rounded-full transition-colors duration-300 font-inter font-semibold cursor-pointer"
          onClick={handleDownloadClick}
        >
          <DownloadCV/>
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
        <div className="fixed top-0 left-32 w-full pr-32 pb-28 h-[50rem] bg-[#612503] z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 text-3xl text-white pr-32"
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
          className="flex flex-row hover:bg-white hover:border-white hover:text-black flex items-center border border-white pl-4 pr-4 rounded-full transition-colors duration-300 font-inter font-semibold"
          onClick={handleDownloadClick}
        >
          <DownloadCV/>
          Download cv
        </Link>
          
        </div>
      )}
    </header>
  );
}

export default Header;
