import React from "react";
import { chords } from "../data/chords";

export default function KeySelector({ onSelectKey, selectedKey }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
            {Object.keys(chords).map((keyName) => (
                <button
                    key={keyName}
                    onClick={() => onSelectKey(keyName)}
                    className={`px-4 py-2 rounded font-semibold 
            ${selectedKey === keyName
                        ? "bg-yellow-400 text-gray-900"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                >
                    {keyName}
                </button>
            ))}
        </div>
    );
}