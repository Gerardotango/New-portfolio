import { motion } from "framer-motion";

function Services() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border border-b-black border-transparent rounded-lg p-6"
          >
            <div className="flex flex-col mb-4">
              <div className="bg-orange-800 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-800">Web Development</h3>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus
              in augue luctus venenatis.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-b-black border-transparent rounded-lg p-6"
          >
            <div className="flex flex-col mb-4">
              <div className="bg-orange-800 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-800">UI/UX Design</h3>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus
              in augue luctus venenatis.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-b-black border-transparent rounded-lg p-6"
          >
            <div className="flex flex-col mb-4">
              <div className="bg-orange-800 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-800">Logo Design</h3>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus
              in augue luctus venenatis.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border border-b-black border-transparent rounded-lg p-6"
          >
            <div className="flex flex-col mb-4">
              <div className="bg-orange-800 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-800">SEO</h3>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus
              in augue luctus venenatis.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;