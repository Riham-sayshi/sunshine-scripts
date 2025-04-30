"use client";

import React, { useState } from 'react';
import Button from './ui/Button';
import Card from './ui/Card';
import Input from './ui/Input';

export default function AdvancedToolsSection() {
  const [termbaseFile, setTermbaseFile] = useState(null);
  const [newTermSource, setNewTermSource] = useState('');
  const [newTermTarget, setNewTermTarget] = useState('');

  // Placeholder data
  const termbaseEntries = [
    { id: 1, source: 'Hello', target: 'مرحباً' },
    { id: 2, source: 'World', target: 'عالم' },
  ];
  const tmSuggestions = [
    { id: 1, source: 'This is a test sentence.', target: 'هذه جملة اختبار.', match: 100 },
    { id: 2, source: 'This is another test.', target: 'هذا اختبار آخر.', match: 85 },
  ];

  const handleTermbaseUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTermbaseFile(file);
      console.log('Uploading termbase:', file.name);
      // Placeholder for actual upload logic
    }
  };

  const handleAddTerm = () => {
    if (!newTermSource || !newTermTarget) return;
    console.log('Adding term:', { source: newTermSource, target: newTermTarget });
    // Placeholder for actual add term logic
    setNewTermSource('');
    setNewTermTarget('');
  };

  return (
    <div className="mt-6 border-t pt-6">
      <h3 className="text-lg font-semibold mb-4 text-purple-700">Advanced Tools</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Termbase Management */}
        <Card className="bg-pastel-mint/20">
          <h4 className="font-bold mb-3">Termbase Management</h4>
          <div className="mb-3">
            <label htmlFor="termbase-upload" className="block text-sm font-medium text-gray-700 mb-1">Upload Termbase (.csv, .xlsx):</label>
            <Input type="file" id="termbase-upload" accept=".csv,.xlsx" onChange={handleTermbaseUpload} />
            {termbaseFile && <p className="text-xs mt-1 text-gray-500">Selected: {termbaseFile.name}</p>}
          </div>
          <div className="space-y-2 mb-3">
            <h5 className="text-sm font-medium">Add New Term:</h5>
            <Input 
              placeholder="Source Term (e.g., &quot;Hello&quot;)" 
              value={newTermSource} 
              onChange={(e) => setNewTermSource(e.target.value)} 
            />
            <Input 
              placeholder="Target Term (e.g., &quot;مرحباً&quot;)" 
              value={newTermTarget} 
              onChange={(e) => setNewTermTarget(e.target.value)} 
            />
            <Button size="sm" variant="mint" onClick={handleAddTerm}>Add Term</Button>
          </div>
          <div>
            <h5 className="text-sm font-medium mb-1">Current Terms (Sample):</h5>
            <ul className="text-xs list-disc list-inside">
              {termbaseEntries.map(term => (
                <li key={term.id}>{term.source} → {term.target}</li>
              ))}
            </ul>
          </div>
        </Card>

        {/* Translation Memory */}
        <Card className="bg-pastel-skyBlue/20">
          <h4 className="font-bold mb-3">Translation Memory (TM)</h4>
          <p className="text-sm mb-2">Suggestions for current segment:</p>
          <div className="space-y-2">
            {tmSuggestions.map(tm => (
              <div key={tm.id} className="text-xs p-2 border rounded-soft bg-white/50">
                <p><strong>Source:</strong> {tm.source}</p>
                <p><strong>Target:</strong> {tm.target}</p>
                <p><strong>Match:</strong> <span className={`font-semibold ${tm.match === 100 ? 'text-green-700' : 'text-orange-600'}`}>{tm.match}%</span></p>
              </div>
            ))}
            {tmSuggestions.length === 0 && <p className="text-xs text-gray-500">No TM suggestions found.</p>}
          </div>
        </Card>
      </div>
      
      {/* Segment Editing & Glossary Highlighting Info (Conceptual) */}
      <div className="mt-4 text-sm text-gray-600">
        <p>ℹ️ <span className="font-semibold">Segment Editing:</span> Click within the transcription text area to edit specific segments (visual indication placeholder).</p>
        <p>ℹ️ <span className="font-semibold">Glossary Highlighting:</span> Terms from the termbase will be highlighted in the text (highlighting placeholder).</p>
      </div>
    </div>
  );
}

