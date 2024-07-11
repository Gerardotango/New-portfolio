import { motion } from "framer-motion";
function ExperienceAbout() {
  return (
    <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className=""
          >
    <div className="flex flex-col md:flex-col md:h-96 justify-between">
      <div className="mb-8 md:mb-0 md:">
        <h2 className="text-2xl font-bold mb-2 text-white">Experience</h2>
        <p className="text-white font-inter font-semibold">
          This section contains my professional experience and background.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white md:mb-16">
        <div className="border border-white p-4 rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300">
          <h3 className="font-medium text-sm">2023 - Present</h3>
          <h2 className="text-lg font-bold">Full Stack Developer</h2>
          <p className="font-medium text-sm">Tech Solutions Inc.</p>
        </div>
        <div className="border border-white p-4 rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300">
          <h3 className="font-medium text-sm">2021 - 2022</h3>
          <h2 className="text-lg font-bold">Front-End Developer</h2>
          <p className="font-medium text-sm">Web Design Studio</p>
        </div>
        <div className="border border-white p-4 rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300">
          <h3 className="font-medium text-sm">2017 - 2019</h3>
          <h2 className="text-lg font-bold">Graphic Designer</h2>
          <p className="font-medium text-sm">Web Design Studio</p>
        </div>
        <div className="border border-white p-4 rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-300">
          <h3 className="font-medium text-sm">2017 - 2019</h3>
          <h2 className="text-lg font-bold">Graphic Designer</h2>
          <p className="font-medium text-sm">Web Design Studio</p>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default ExperienceAbout;