import React, { useState } from 'react'
import { formatTime } from '../utils/formatTime'

const AnnotationList = ({ annotations, onSeek, onEdit, onDelete }) => {
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const startEdit = (id, currentText) => {
        setEditingId(id);
        setEditText(currentText);
    };

    const handleSave = (id) => {
        if (editText.trim()) {
            onEdit(id, editText.trim());
            setEditingId(null);
            setEditText('');
        }
    };

    return (
        <div className="space-y-2">
            <h2 className="text-lg font-semibold mb-2">Annotations</h2>
            {annotations.sort((a, b) => a.timestamp - b.timestamp).map((ann) => (
                <div
                    key={ann.id}
                    className="p-2 border rounded hover:bg-gray-50"
                >
                    <div className="flex justify-between items-start space-x-2">
                        <div className="flex-1 cursor-pointer" onClick={() => onSeek(ann.timestamp)}>
                            <strong>{formatTime(ann.timestamp)}:</strong>
                            {editingId === ann.id ? (
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="ml-2 border rounded p-1 w-full"
                                />
                            ) : (
                                <span className="ml-2">{ann.text}</span>
                            )}
                        </div>
                        <div className="flex space-x-1">
                            {editingId === ann.id ? (
                                <>
                                    <button
                                        className="text-green-600 px-2"
                                        onClick={() => handleSave(ann.id)}
                                    >Save</button>
                                    <button
                                        className="text-gray-500 px-2"
                                        onClick={() => setEditingId(null)}
                                    >Cancel</button>
                                </>
                            ) : (
                                <>
                                    <button
                                        className="text-blue-600 px-2"
                                        onClick={() => startEdit(ann.id, ann.text)}
                                    >Edit</button>
                                    <button
                                        className="text-red-600 px-2"
                                        onClick={() => onDelete(ann.id)}
                                    >Delete</button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AnnotationList
