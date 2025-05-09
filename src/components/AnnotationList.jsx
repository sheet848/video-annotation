import React from 'react'

const AnnotationList = ({ annotations, onSeek }) => {
    return (
        <div className="space-y-2">
          <h2 className="text-lg font-semibold mb-2">Annotations</h2>
          {annotations.sort((a, b) => a.timestamp - b.timestamp).map((ann) => (
            <div
              key={ann.id}
              className="p-2 border rounded cursor-pointer hover:bg-gray-100"
              onClick={() => onSeek(ann.timestamp)}
            >
              <strong>{ann.timestamp.toFixed(2)}s:</strong> {ann.text}
            </div>
          ))}
        </div>
      );
}

export default AnnotationList