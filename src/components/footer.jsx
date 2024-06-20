import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <div className="flex flex-col items-center bg-orange-900 h-56 pt-16 gap-5">
      <div className="flex flex-row space-x-4 font-inter font-semibold">
        <a href="/" className="text-white hover:text-gray-300">Home</a>
        <a href="/about" className="text-white hover:text-gray-300">About</a>
        <a href="/projects" className="text-white hover:text-gray-300">Projects</a>
        <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
      </div>
      <div className="flex flex-row space-x-4 mt-4">
      <a href="#" className="text-white hover:text-blue-600">
      <FaFacebookF />
      </a>
      <a href="#" className="text-white hover:text-blue-600">
      <FaLinkedinIn />
      </a>
      <a href="#" className="text-white hover:text-blue-600">
      <FaWhatsapp />
      </a>
      </div>
      <p className="text-white text-center mt-6 font-inter">
        © 2024 Mon Portfolio. Tous droits réservés.
      </p>
    </div>
  );
}

export default Footer;