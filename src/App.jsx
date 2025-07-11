import { useState } from "react";
import KeySelector from "./components/KeySelector";
import ChordDetails from "./components/ChordDetails";
import chords from "./data/chords";
import "./App.css";

function App() {
    const [selectedKey, setSelectedKey] = useState(null);

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
            <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
                🎹 Chord Explorer
            </h1>

            <KeySelector
                selectedKey={selectedKey}
                onSelectKey={setSelectedKey}
            />

            {selectedKey && (
                <ChordDetails
                    keyName={selectedKey}
                    keyData={chords[selectedKey]}
                />
            )}
        </div>
    );
}

export default App;