import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <div className="flex flex-col items-center bg-orange-900 h-auto md:h-46 pt-16 md:pt-8 gap-5 ">
      {/* <div className="flex flex-col md:flex-row space-x-4 space-y-2 md:space-y-0 font-inter font-semibold ">
        <a href="/" className="pl-4 text-white hover:text-gray-300">Home</a>
        <a href="/about" className="text-white hover:text-gray-300">About</a>
        <a href="/projects" className="text-white hover:text-gray-300">Projects</a>
        <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
      </div>
       */}
      <div className="bg-orange-800 w-full pb-4">
      {/* <div className="flex flex-row space-x-4 mt-4 justify-center">
        <a href="#" className="text-white hover:text-black">
          <FaFacebookF />
        </a>
        <a href="#" className="text-white hover:text-black">
          <FaLinkedinIn />
        </a>
        <a href="#" className="text-white hover:text-black">
          <FaWhatsapp />
        </a>
      </div> */}
      <p className="text-white text-center mt-6 font-inter">
        © 2024 Mon Portfolio. Tous droits réservés.
      </p>
      </div>
    </div>
  );
}

export default Footer;