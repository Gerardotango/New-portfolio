import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ici ajouter la logique d'envoi du formulaire
    console.log('Nom :', name);
    console.log('Email :', email);
    console.log('Message :', message);
  };

  return (
    <section className="bg-white md:h-[40rem] flex justify-center items-center py-12 md:py-0">
      <div className="flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl  font-inter font-semibold text-black">Contact-me</h2>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-row justify-center">
            <div className="bg-orange-900  md:w-2/3 lg:w-1/2 p-6 md:p-8">
              <form onSubmit={handleSubmit} className="sm:mr-4 ml-4 mt-8 mb-8 bg-orange-900 pt-6">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white font-inter font-semibold mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border-b-2 border-white text-white py-2 px-3 rounded w-full bg-transparent"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white font-inter font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border-b-2 border-white text-white py-2 px-3 rounded w-full bg-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-white  font-inter font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="border-b-2 border-white text-white rounded w-full bg-transparent"
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-black hover:bg-blue-600 text-white  font-inter font-semibold py-2 px-4 rounded-full w-full"
                >
                  Envoyer
                </button>
              </form>
            </div>
            <div className="bg-orange-900 md:w-2/3 lg:w-1/2 p-6 md:p-8 flex flex-col justify-center items-center">
              <div className="text-white  font-inter font-semibold mb-4">Adresse</div>
              <div className="text-white  font-inter font-semibold mb-4">123 Rue de l'exemple, 75000 Paris</div>
              <div className="flex gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;