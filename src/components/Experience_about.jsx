function Experience_about() {
    return(
        <div className='flex flex-col   h-96'>
      <div>
        <h2 className="text-2xl font-bold mb-4 text-black">Experience</h2>
        <p className="text-black font-inter font-semibold">This section contains my personal details, including contact information and<br/> professional background.</p>
      </div>
       
      <div className="grid  grid-cols-2 grid-rows-2 h-56 text-black  gap-4 mt-8">
        <div className="border border-black p-4">
          <h2>2023 - present</h2>
          <h1>Full Stack Developer</h1>
          <p>. Tech solutions Inc.</p>
        </div>
        <div className="border border-black p-4">
        <h2>2021 - 2022</h2>
          <h1>Front-End Developer</h1>
          <p>. Web Design Studio</p>
        </div>
        <div className="border border-black p-4">
        <h2>2017 - 2019</h2>
          <h1>Graphic Designer</h1>
          <p>. Web Design Studio.</p>
        </div>
        <div className="border border-black p-4">
        <h2>2017 - 2019</h2>
          <h1>Graphic Designer</h1>
          <p>. Web Design Studio.</p>
      </div>
      
        
        
      </div>
      </div>
    )
}
export default Experience_about;