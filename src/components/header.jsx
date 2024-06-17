import { Link, animateScroll as scroll } from 'react-scroll';

function Header() {
    return(
        <header className="bg-orange-900 bg-[39%] bg-opacity-70 py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" className="text-2xl font-bold ml-8">
              Gerardo Tango
            </Link>
          </div>
          <div className="lg:flex space-x-4 hidden">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="hover:text-gray-400"
            >
              About
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="hover:text-gray-400"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="hover:text-gray-400"
            >
              Contact
            </Link>
            </div>
      
            <Link to="/#contact" className="hover:bg-white hover:border-white hover:text-black flex items-center border border-white pl-4 pr-4 rounded-full transition-colors duration-300">
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
            
          <button
            className="lg:hidden block text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776;
          </button>
        </div>
      </header>
    )
}
export default Header;