import { useState, useRef, useEffect } from 'react';
import AnnotationForm from './components/AnnotationForm';
import AnnotationList from './components/AnnotationList';
import ReactPlayer from 'react-player';
import './App.css'

function App() {
  const videoRef = useRef(null);
  const [annotations, setAnnotations] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isYoutube, setIsYoutube] = useState(false);
  const playerRef = useRef(null);

  const handleAddAnnotation = (text) => {
    setAnnotations(prev => [...prev, { id: Date.now(), timestamp: currentTime, text }]);
  };

  const handleEditAnnotation = (id, newText) => {
    setAnnotations(prev => prev.map(a => a.id === id ? { ...a, text: newText } : a));
  };

  const handleDeleteAnnotation = (id) => {
    setAnnotations(prev => prev.filter(a => a.id !== id));
  };

  const handleCopyAnnotations = () => {
    const filteredAnnotations = annotations.filter(a => videoUrl && a);
    const data = JSON.stringify({ videoUrl, annotations: filteredAnnotations }, null, 2);
    navigator.clipboard.writeText(data).then(() => {
      alert('Annotations copied to clipboard');
    });
  };

  const handleSeek = (time) => {
    if (isYoutube && playerRef.current) {
      playerRef.current.seekTo(time, 'seconds');
    } else if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setIsYoutube(false);
    }
  };

  const handleYoutubeUrl = (e) => {
    const url = e.target.value;
    if (ReactPlayer.canPlay(url)) {
      setVideoUrl(url);
      setIsYoutube(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isYoutube && playerRef.current) {
        const internal = playerRef.current.getInternalPlayer();
        if (internal && internal.getCurrentTime) {
          setCurrentTime(internal.getCurrentTime());
        }
      } else if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [isYoutube]);

  return (
    <div className="p-4 max-w-4xl mx-auto bg-[#e3dfd4] rounded-2xl">
      <div className="space-y-2 my-16">
        <input type="file" accept="video/*" onChange={handleFileChange} className='cursor-pointer w-[220px] font-medium text-center bg-[#fff] p-[12px] rounded-[12px] hover:border-[1px] hover:border-[solid] hover:border-[blue]'/>
        <input
          type="text"
          placeholder="Paste YouTube URL"
          onBlur={handleYoutubeUrl}
          className="w-full p-2 border rounded"
        />
      </div>
      {videoUrl && (
        isYoutube ? (
          <ReactPlayer
            ref={playerRef}
            url={videoUrl}
            controls
            width="100%"
            className="mb-4"
          />
        ) : (
          <video ref={videoRef} src={videoUrl} controls className="w-full mb-4" />
        )
      )}
      <AnnotationForm currentTime={currentTime} onAdd={handleAddAnnotation} />
      <AnnotationList
        annotations={annotations}
        onSeek={handleSeek}
        onEdit={handleEditAnnotation}
        onDelete={handleDeleteAnnotation}
      />
      <div className="mt-4">
        <button
          onClick={handleCopyAnnotations}
          className="px-4 py-2 bg-green-600 rounded text-[#17283c]"
        >
          Copy Annotations
        </button>
      </div>
    </div>
  );
}

export default App
