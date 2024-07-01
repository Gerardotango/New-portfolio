function Education_about() {
    return(
        <div className='flex flex-col   h-96'>
      <div>
        <h2 className="text-2xl font-bold mb-4 text-black">Education</h2>
        <p className="text-black font-inter font-semibold">This section contains my personal details, including contact information and<br/> professional background.</p>
      </div>
       
      <div className="grid  grid-cols-2 grid-rows-2 h-56 text-black  gap-4 mt-8">
        <div className="border border-black p-4 rounded-md">
        <h2 className="font-medium text-sm">2023 - 2024</h2>
          <h1 className="text-lg font-bold">Certified Web Developer</h1>
          <p className="font-medium text-sm">. Kadea Academy.</p>
        </div>
        <div className="border border-black p-4 rounded-md">
        <h2 className="font-medium text-sm">2022</h2>
          <h1 className="text-lg font-bold">Front-end Track</h1>
          <p className="font-medium text-sm">. OpenClassroom.</p>
        </div>
        <div className="border border-black p-4 rounded-md">
        <h2 className="font-medium text-sm">2017 - 2019</h2>
          <h1 className="text-lg font-bold">Graphic Design</h1>
          <p className="font-medium text-sm">. Primo Pix Design.</p>
        </div>
        <div className="border border-black p-4 rounded-md">
        <h2 className="font-medium text-sm">2019 - 2022</h2>
          <h1 className="text-lg font-bold">Computer Science</h1>
          <p className="font-medium text-sm">. William Booth University.</p>
      </div>
      
        
        
      </div>
      </div>
    )
}
export default Education_about;