
function DownloadCV() {
    
    const handleDownloadClick = async (event) => {
        event.preventDefault(); // Empêche le comportement par défaut
    
        try {
          // Récupérer le fichier PDF
          const response = await fetch('https://cdn2.cvdesignr.com/u/cv/pdf/64ca2dbc32d58_4dba140da750a066dece5ca13ffb63b9109d4903_02aa9.pdf');
          const blob = await response.blob();
    
          // Créer un lien de téléchargement temporaire
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.setAttribute('download', 'cv.pdf');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (error) {
          console.error('Erreur lors du téléchargement du fichier:', error);
        }
      };
  
    return (
      <a
        
        onClick={handleDownloadClick}
        className="lg:flex space-x-4 hidden hover:bg-white hover:border-white hover:text-black flex items-center border border-white pl-4 pr-4 rounded-full transition-colors duration-300 font-inter font-semibold"
      >
        <svg
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download cv
      </a>
    );
  };
  
  export default DownloadCV;