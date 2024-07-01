function ExperienceAbout() {
  return (
    <div className="flex flex-col h-96">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-black">Experience</h2>
        <p className="text-black font-inter font-semibold">
          This section contains my professional experience and background.
        </p>
      </div>

      <div className="grid grid-cols-2 grid-rows-2 h-56 text-black gap-4 mt-8">
        <div className="border border-black p-4 rounded-md">
          <h3 className="font-medium text-sm">2023 - Present</h3>
          <h2 className="text-lg font-bold">Full Stack Developer</h2>
          <p className="font-medium text-sm">Tech Solutions Inc.</p>
        </div>
        <div className="border border-black p-4 rounded-md">
          <h3 className="font-medium text-sm">2021 - 2022</h3>
          <h2 className="text-lg font-bold">Front-End Developer</h2>
          <p className="font-medium text-sm">Web Design Studio</p>
        </div>
        <div className="border border-black p-4 rounded-md">
          <h3 className="font-medium text-sm">2017 - 2019</h3>
          <h2 className="text-lg font-bold">Graphic Designer</h2>
          <p className="font-medium text-sm">Web Design Studio</p>
        </div>
        <div className="border border-black p-4 rounded-md">
          <h3 className="font-medium text-sm">2017 - 2019</h3>
          <h2 className="text-lg font-bold">Graphic Designer</h2>
          <p className="font-medium text-sm">Web Design Studio</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceAbout;