import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-white py-12">
      <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border-transparent rounded-lg p-6"
          >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Contact</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md md:max-w-xl">
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border-transparent rounded-lg p-6"
          >
            <div className="p-6 bg-orange-900">
              <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
              <form className=''>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white font-bold mb-2">Name</label>
                  <input
                   type="text"
                   id="name"
                   name="name"
                   className="bg-orange-900 text-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                   placeholder="Enter your name"
                   />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-orange-900 text-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-white font-bold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="bg-orange-900 text-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    rows="4"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                   className="hover:bg-white hover:border-white hover:text-black flex items-center border border-black bg-black pl-4 pr-4 h-10 rounded-full transition-colors duration-300 font-inter font-semibold w-36 md:w-auto"
                >
                  Send message
                </button>
              </form>
            </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border-transparent rounded-lg p-6"
          >
          <div className="mb-[9rem] bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md md:max-w-xl">
            <div className="p-6 bg-orange-900">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="mb-4">
                <p className="text-white font-bold mb-2"><FaPhone className="inline-block mr-2" /> Phone:</p>
                <p className="text-white">+1 (123) 456-7890</p>
              </div>
              <div className="mb-4">
                <p className="text-white font-bold mb-2"><FaEnvelope className="inline-block mr-2" /> Email:</p>
                <p className="text-white">tangogerard890@gmail.com</p>
              </div>
              <div className="mb-4">
                <p className="text-white font-bold mb-2"><FaMapMarkerAlt className="inline-block mr-2" /> Address:</p>
                <p className="text-white">17 ubangi salongo lemba, kinshasa DRC</p>
              </div>
            </div>
          </div>
          </motion.div>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Contact;