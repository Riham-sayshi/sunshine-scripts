"use client";

import React, { useState } from 'react';
// import { useTranslations } from 'next-intl'; // Removed unused import
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import FileUpload from '@/components/ui/FileUpload';
// import Select from '@/components/ui/Select'; // Removed unused import
// import Textarea from '@/components/ui/Textarea'; // Removed unused import
import AdvancedToolsSection from '@/components/AdvancedToolsSection';

export default function TranscribePage() {
  // const t = useTranslations('Transcribe'); // Removed unused variable
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [reviewType, setReviewType] = useState('ai'); // 'ai' or 'human'

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
    setTranscription(''); // Clear previous transcription
    setUploadProgress(0); // Reset progress
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          // Simulate transcription result after upload
          setTranscription(`This is a simulated transcription for the file: ${file.name}. The content would appear here after processing. This includes handling various audio formats and providing an accurate text output. The system supports both English and Arabic transcription. You can edit this text below.`);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Placeholder for actual upload logic
    console.log('Uploading file:', file.name);
    // Replace with your actual API call to upload and transcribe
    // await uploadAndTranscribeApi(file, setUploadProgress);
  };

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-purple-800 mb-8 text-center">Upload & Transcribe</h1>

      <Card className="max-w-2xl mx-auto mb-6">
        <FileUpload 
          onFileChange={handleFileChange} 
          progress={uploadProgress} 
          isUploading={isUploading} 
        />
        {file && !isUploading && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 mb-2">Selected file: {file.name}</p>
            <Button onClick={handleUpload} variant="mint" disabled={isUploading}>
              {isUploading ? 'Uploading...' : 'Start Transcription'}
            </Button>
          </div>
        )}
      </Card>

      {transcription && (
        <Card className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">Transcription Output & Tools</h2>
          
          {/* Editable Text Area - Assuming Textarea component exists */}
          <textarea 
            className="w-full p-3 border rounded-soft mb-4 h-48 resize-none focus:ring-pastel-skyBlue focus:border-pastel-skyBlue"
            name="transcriptionOutput"
            value={transcription}
            onChange={(e) => setTranscription(e.target.value)}
            placeholder="Transcription will appear here..."
          />
          
          {/* Review Type Selection - Assuming Select component exists */}
          <div className="mb-4">
            <label htmlFor="reviewType" className="block text-sm font-medium text-gray-700 mb-1">Review Type:</label>
            <select 
              id="reviewType"
              name="reviewType"
              value={reviewType}
              onChange={(e) => setReviewType(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-soft shadow-sm focus:outline-none focus:ring-pastel-skyBlue focus:border-pastel-skyBlue sm:text-sm"
            >
              <option value="ai">AI Review</option>
              <option value="human">Human Review (Premium)</option>
            </select>
          </div>

          <AdvancedToolsSection />

        </Card>
      )}
    </div>
  );
}

