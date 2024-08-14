import { motion } from "framer-motion";
function Education_about() {
  return (
    <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className=""
          >
    <div className="flex flex-col h-auto sm:h-96 md:h-96 lg:h-96 xl:h-96">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">Education</h2>
        <p className="text-white font-inter font-semibold">
          This section contains my personal details, including contact information.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 h-auto sm:h-56 text-black gap-4 mt-8 text-white md:mb-16 md:ml-6">
        <div className="border border-white p-4 rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300">
          <h2 className="font-medium text-sm">2023 - 2024</h2>
          <h1 className="text-lg font-bold">Certified Web Developer</h1>
          <p className="font-medium text-sm">. Kadea Academy.</p>
        </div>
        <div className="border border-white p-4 rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300">
          <h2 className="font-medium text-sm">2022</h2>
          <h1 className="text-lg font-bold">Front-end Track</h1>
          <p className="font-medium text-sm">. OpenClassroom.</p>
        </div>
        <div className="border border-white p-4 rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300">
          <h2 className="font-medium text-sm">2017 - 2019</h2>
          <h1 className="text-lg font-bold">Graphic Design</h1>
          <p className="font-medium text-sm">. Primo Pix Design.</p>
        </div>
        <div className="border border-white p-4 rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300">
          <h2 className="font-medium text-sm">2019 - 2022</h2>
          <h1 className="text-lg font-bold">Computer Science</h1>
          <p className="font-medium text-sm">. William Booth University.</p>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
export default Education_about;