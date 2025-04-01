const FileUpload = ({ onFileUpload }) => {
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
  
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const jsonData = JSON.parse(event.target.result);
          onFileUpload(jsonData);
        } catch (error) {
          alert('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    };
  
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Upload Questions JSON</h2>
        <input
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>
    );
  };
  
  export default FileUpload;