import React, { useState } from 'react';

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
      <div className="bg-orange-900 rounded w-full md:w-2/3 lg:w-1/2 p-6 md:p-8">
        <h2 className="text-3xl font-bold mb-4 text-black">Contactez-moi</h2>
        <form onSubmit={handleSubmit} className="sm:mr-4 ml-4 mt-8 mb-8 bg-orange-900 pt-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-bold mb-2">
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
            <label htmlFor="email" className="block text-white font-bold mb-2">
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
            <label htmlFor="message" className="block text-white font-bold mb-2">
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
            className="bg-black hover:bg-blue-600 text-white py-2 px-4 rounded-full w-full"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;