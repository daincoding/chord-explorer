import React from "react";

export default function ChordCard({ title, children, color }) {
    return (
        <div className={`bg-gray-800 p-4 rounded shadow ${color || "text-gray-100"}`}>
            <h3 className="text-lg font-bold mb-3 border-b border-gray-700 pb-1">
                {title}
            </h3>
            <div className="text-sm">{children}</div>
        </div>
    );
}