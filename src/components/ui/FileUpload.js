import React from 'react';

const FileUpload = ({ 
  onFileSelect, 
  acceptedTypes = "video/mp4,video/mov,audio/mp3,audio/wav", 
  maxSize = 100, // in MB
  className = '',
  ...props 
}) => {
  const [dragActive, setDragActive] = React.useState(false);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [error, setError] = React.useState('');
  
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFile = (file) => {
    // Check file type
    const fileType = file.type;
    const validTypes = acceptedTypes.split(',');
    if (!validTypes.includes(fileType)) {
      return `File type not supported. Please upload ${acceptedTypes.replace(/,/g, ', ')}`;
    }
    
    // Check file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSize) {
      return `File too large. Maximum size is ${maxSize}MB`;
    }
    
    return '';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const validationError = validateFile(file);
      
      if (validationError) {
        setError(validationError);
        return;
      }
      
      setSelectedFile(file);
      setError('');
      if (onFileSelect) onFileSelect(file);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validationError = validateFile(file);
      
      if (validationError) {
        setError(validationError);
        return;
      }
      
      setSelectedFile(file);
      setError('');
      if (onFileSelect) onFileSelect(file);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div 
        className={`relative border-2 border-dashed rounded-soft p-8 text-center cursor-pointer transition-colors
          ${dragActive ? 'border-pastel-lavender bg-pastel-lavender/20' : 'border-gray-300 hover:border-pastel-lavender'}
          ${error ? 'border-red-300' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload').click()}
        {...props}
      >
        {/* Cute cloud icon */}
        <div className="flex justify-center mb-4">
          <svg className="w-16 h-16 text-pastel-skyBlue" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"></path>
          </svg>
        </div>
        
        <p className="mb-2 text-lg font-medium">
          {selectedFile ? selectedFile.name : 'Drag & drop your file here or click to browse'}
        </p>
        <p className="text-sm text-gray-500">
          Supported formats: MP4, MOV, MP3, WAV (Max: {maxSize}MB)
        </p>
        
        {/* Sparkles for cute effect */}
        <div className="absolute -top-2 -right-2">
          <svg className="w-6 h-6 text-pastel-peach" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707.707-.707A1 1 0 0115 2a1 1 0 01.707 1.707l-.707.707.707.707A1 1 0 1115 7a1 1 0 01-.707-.293l-.707-.707-.707.707A1 1 0 1112 6a1 1 0 01.707-.707l.707-.707-.707-.707A1 1 0 0112 2z"></path>
          </svg>
        </div>
        
        <input
          id="file-upload"
          type="file"
          accept={acceptedTypes}
          onChange={handleChange}
          className="hidden"
        />
      </div>
      
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FileUpload;
