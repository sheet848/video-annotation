import { useState } from 'react';
import { formatTime } from '../utils/formatTime';

export default function AnnotationForm({ currentTime, onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">Timestamp: {formatTime(currentTime)}</span>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add annotation"
          className="flex-1 p-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 rounded text-[#17283c]">Add</button>
      </div>
    </form>
  );
}
