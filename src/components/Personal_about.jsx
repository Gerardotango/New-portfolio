function Personal_about() {
    return(
        <div className='flex flex-col  border border-black h-96'>
      <div>
        <h2 className="text-2xl font-bold mb-4 text-black">Personal Information</h2>
        <p className="text-black">This section contains my personal details, including contact information and<br/> professional background.</p>
      </div>

      <div className="flex flex-row border border-black h-56">
        <div className="flex-1 border border-black p-4">
          <p className="text-black"><strong>Name:</strong> Gerardo Tango</p><br/>
          <p className="text-black"><strong>Nationality:</strong> Congolais</p><br/>
          <p className="text-black"><strong>Freelance:</strong> Available</p>
        </div>
        <div className="flex-1 border border-black p-4">
          <p className="text-black"><strong>Phone:</strong> +243 (9) 743-99129</p><br/>
          <p className="text-black"><strong>Email:</strong> tangogerard890@example.com</p><br/>
          <p className="text-black"><strong>Languages:</strong> English, French</p>
        </div>
      </div>
      </div>
    )
}
export default Personal_about;