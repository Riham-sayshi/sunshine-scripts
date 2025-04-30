import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

// Placeholder for a video player component
const VideoPlayerPlaceholder = () => (
  <div className="w-full bg-gray-200 aspect-video rounded-soft flex items-center justify-center text-gray-500">
    Video Player Placeholder
  </div>
);

// Placeholder for a waveform display component
const WaveformPlaceholder = () => (
  <div className="w-full h-24 bg-pastel-skyBlue/30 rounded-soft flex items-center justify-center text-blue-800">
    Waveform Placeholder 🌊
  </div>
);

// Placeholder for subtitle line item
const SubtitleLine = ({ startTime, endTime, text, onTextChange, onTimeChange }) => (
  <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2 p-2 border rounded-soft hover:bg-gray-50">
    <input 
      type="text" 
      value={startTime} 
      onChange={(e) => onTimeChange('start', e.target.value)} 
      className="w-20 px-1 py-0.5 border rounded text-sm bg-pastel-yellow/50"
      placeholder="00:00:00,000"
    />
    <span>→</span>
    <input 
      type="text" 
      value={endTime} 
      onChange={(e) => onTimeChange('end', e.target.value)} 
      className="w-20 px-1 py-0.5 border rounded text-sm bg-pastel-yellow/50"
      placeholder="00:00:05,000"
    />
    <textarea 
      value={text} 
      onChange={(e) => onTextChange(e.target.value)} 
      className="flex-grow px-2 py-1 border rounded text-sm h-10 resize-none"
      placeholder="Subtitle text..."
    />
    {/* Placeholder for indicators */}
    <div className="text-xs text-gray-400 w-20 text-right">
      <span>CPS: 15</span><br/>
      <span>CPL: 30</span>
    </div>
  </div>
);

export default function SubtitleEditorPage() {
  // Placeholder state for subtitles
  const [subtitles, setSubtitles] = React.useState([
    { id: 1, startTime: '00:00:01,000', endTime: '00:00:04,500', text: 'Hello and welcome!' },
    { id: 2, startTime: '00:00:05,100', endTime: '00:00:08,200', text: 'This is the subtitle editor.' },
    { id: 3, startTime: '00:00:09,000', endTime: '00:00:12,800', text: 'مرحباً بكم في محرر الترجمة.' }, // Example Arabic
  ]);

  const handleTextChange = (id, newText) => {
    setSubtitles(subs => subs.map(sub => sub.id === id ? { ...sub, text: newText } : sub));
  };

  const handleTimeChange = (id, type, newTime) => {
    setSubtitles(subs => subs.map(sub => sub.id === id ? { ...sub, [type === 'start' ? 'startTime' : 'endTime']: newTime } : sub));
  };

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-purple-800 mb-8 text-center">Subtitle Editor 🎬</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Video & Waveform */}
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <VideoPlayerPlaceholder />
          </Card>
          <Card>
            <WaveformPlaceholder />
            {/* Placeholder for timeline/timing adjustment tool */}
            <p className="text-sm text-center mt-2 text-gray-500">Timing adjustment tool (timeline) placeholder</p>
          </Card>
        </div>

        {/* Right Column: Subtitle List & Controls */}
        <div className="lg:col-span-1">
          <Card className="max-h-[70vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Subtitles</h2>
            <div dir="ltr"> {/* Force LTR for timecodes/structure, RTL handled in textareas */} 
              {subtitles.map(sub => (
                <SubtitleLine 
                  key={sub.id}
                  startTime={sub.startTime}
                  endTime={sub.endTime}
                  text={sub.text}
                  onTextChange={(newText) => handleTextChange(sub.id, newText)}
                  onTimeChange={(type, newTime) => handleTimeChange(sub.id, type, newTime)}
                />
              ))}
            </div>
          </Card>
          <Card className="mt-4">
            <h3 className="font-semibold mb-3">Export Options</h3>
            <div className="flex space-x-2 rtl:space-x-reverse">
              <Button variant="mint" size="sm">Export SRT</Button>
              <Button variant="mint" size="sm">Export VTT</Button>
              <Button variant="mint" size="sm">Export ASS</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

