function PersonalAbout() {
  return (
    <div className="flex flex-col h-96 gap-8 w-[35rem]">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">Personal Information</h2>
        <p className="text-white font-inter font-semibold">
          This section contains my personal details, including contact information
          and professional background.
        </p>
      </div>

      <div className="flex flex-col h-56">
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
  );
}

export default PersonalAbout;