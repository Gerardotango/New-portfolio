import { motion } from "framer-motion";
function PersonalAbout() {
  return (
    <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className=""
          >
    <div className="md:flex flex-col md:h-96 md:gap-4 md:ml-16 md:mt-16 md:mw-[35rem] ml-2 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-4 text-white">Personal Information</h2>
        <p className="text-gray font-inter font-semibold">
          This section contains my personal details, including contact information
          and professional background.
        </p>
      </div>

      <div className="md:h-56 h-56 md:flex md:flex-row flex flex-col md:mt-8">
        <div className="flex-1">
          <p className="text-white">
            <strong>Name:</strong> Gerardo Tango
          </p>
          <p className="text-white">
            <strong>Nationality:</strong> Congolese
          </p>
          <p className="text-white">
            <strong>Freelance:</strong> Available
          </p>
        </div>
        <div className="flex-1">
          <p className="text-white">
            <strong>Phone:</strong> +243 (9) 743-99129
          </p>
          <p className="text-white">
            <strong>Email:</strong> tangogerard890@example.com
          </p>
          <p className="text-white">
            <strong>Languages:</strong> English, French
          </p>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default PersonalAbout;