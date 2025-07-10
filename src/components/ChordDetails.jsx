import React from "react";
import ChordCard from "./ChordCard";

function getColorClass(type) {
    switch (type.toLowerCase()) {
        case "major":
            return "text-blue-400";
        case "minor":
            return "text-red-400";
        case "diminished":
            return "text-purple-400";
        case "augmented":
            return "text-orange-400";
        case "dominant":
            return "text-green-400";
        default:
            return "text-gray-300";
    }
}

function getModeColor(mode) {
    switch (mode.toLowerCase()) {
        case "ionian":
            return "text-green-300";
        case "dorian":
            return "text-blue-300";
        case "phrygian":
            return "text-red-300";
        case "lydian":
            return "text-yellow-300";
        case "mixolydian":
            return "text-purple-300";
        case "aeolian":
            return "text-pink-300";
        case "locrian":
            return "text-orange-300";
        default:
            return "text-gray-300";
    }
}

function getProgressionStyleColor(style) {
    switch (style.toLowerCase()) {
        case "pop":
            return "text-pink-300";
        case "jazz":
            return "text-purple-300";
        case "funk":
            return "text-yellow-300";
        case "rnb":
            return "text-green-300";
        case "latin":
            return "text-orange-300";
        case "synthwave":
            return "text-cyan-300";
        default:
            return "text-gray-300";
    }
}

function getProgressionColor(style) {
    switch (style.toLowerCase()) {
        case "japanese":
            return "text-yellow-300";
        case "citypop":
            return "text-pink-300";
        case "kpop":
            return "text-purple-300";
        case "animeballad":
            return "text-green-300";
        default:
            return "text-gray-300";
    }
}

export default function ChordDetails({ keyName, keyData }) {
    if (!keyData) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ChordCard title="Scale Notes">
                {keyData.scaleNotes.join(" - ")}
            </ChordCard>

            <ChordCard title="Parallel Minor">
                {keyData.parallelMinor}
            </ChordCard>

            <ChordCard title="Basic Triads">
                <ul className="space-y-1">
                    {keyData.triads.map((triad) => (
                        <li key={triad.name} className="mb-3">
                            <div className="flex items-center gap-2">
    <span className={`px-2 py-1 rounded text-sm font-bold ${getColorClass(triad.type)} bg-gray-700`}>
      {triad.name}
    </span>
                                <span className="text-xs text-gray-300 italic">
      ({triad.type})
    </span>
                            </div>
                            <div className="ml-4 text-sm text-gray-200">
                                Root: {triad.root.join("-")}<br />
                                1st Inv: {triad.inv1.join("-")}<br />
                                2nd Inv: {triad.inv2.join("-")}
                            </div>
                        </li>
                    ))}
                </ul>
            </ChordCard>

            <ChordCard title="Seventh Chords">
                <ul className="space-y-1">
                    {keyData.sevenths.map((sev) => (
                        <li key={sev.name} className="mb-3">
                            <div className="flex items-center gap-2">
    <span className="px-2 py-1 rounded text-sm font-bold text-blue-300 bg-gray-700">
      {sev.name}
    </span>
                            </div>
                            <div className="ml-4 text-sm text-gray-200">
                                Root: {sev.root.join("-")}<br />
                                1st Inv: {sev.inv1.join("-")}<br />
                                2nd Inv: {sev.inv2.join("-")}<br />
                                3rd Inv: {sev.inv3.join("-")}
                            </div>
                        </li>
                    ))}
                </ul>
            </ChordCard>

            <ChordCard title="Extended Chords">
                <ul className="space-y-1">
                    {keyData.extendedChords.map((ext) => (
                        <li key={ext.name}>
                            <span className="font-bold text-green-300">{ext.name}</span>: {ext.notes.join("-")}
                        </li>
                    ))}
                </ul>
            </ChordCard>

            <ChordCard title="“Insane” Chords">
                <ul className="space-y-1">
                    {keyData.insaneChords.map((ins) => (
                        <li key={ins.name}>
                            <span className="font-bold text-pink-300">{ins.name}</span>: {ins.notes.join("-")}
                        </li>
                    ))}
                </ul>
            </ChordCard>

            <ChordCard title="Common Progressions">
                <div className="space-y-4">
                    <div>
                        <h4 className="text-md font-bold text-gray-200 mb-2">Chord Functions</h4>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                            {keyData.chordFunctions.map((func) => (
                                <li key={func.degree}>
                                    <span className="font-bold text-blue-300">{func.degree}</span> → {func.chord}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {Object.entries(keyData.commonProgressions).map(([style, progressions]) => (
                        <div key={style}>
                            <h4 className={`text-md font-bold mb-1 ${getProgressionStyleColor(style)}`}>
                                {style}
                            </h4>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                {progressions.map((prog, i) => (
                                    <li key={i}>{prog}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </ChordCard>

            <ChordCard title="Japanese & Asian Pop Progressions">
                <div className="space-y-6">
                    {Object.entries(keyData.asianPopProgressions).map(([style, progressions]) => (
                        <div key={style}>
                            <h4 className={`text-md font-bold mb-2 ${getProgressionColor(style)}`}>
                                {style} Progressions
                            </h4>
                            <ul className="list-disc list-inside space-y-1 ml-4">
                                {progressions.map((prog, i) => (
                                    <li key={i}>{prog}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </ChordCard>

            <ChordCard title="Substitutions">
                <ul className="list-disc list-inside space-y-1">
                    {keyData.substitutions.map((sub, i) => (
                        <li key={i}>{sub}</li>
                    ))}
                </ul>
            </ChordCard>

            <ChordCard title="Next Chord Suggestions">
                <ul className="list-disc list-inside space-y-1">
                    {keyData.nextChords.map((nc, i) => (
                        <li key={i}>{nc}</li>
                    ))}
                </ul>
            </ChordCard>

            <ChordCard title="Parallel Minor Chord Palette">
                <ul className="space-y-1">
                    {keyData.parallelMinorChords.map((p, i) => (
                        <li key={i}>
                            <span className="font-bold text-red-400">{p.name}</span>: {p.notes.join("-")}
                        </li>
                    ))}
                </ul>
            </ChordCard>

            <ChordCard title="Chord Spelling Quick Reference">
                <ul className="list-disc list-inside space-y-1">
                    {keyData.chordSpellingQuickRef.map((cs, i) => (
                        <li key={i}>{cs}</li>
                    ))}
                </ul>
            </ChordCard>

            <ChordCard title="Circle of Fifths Relations">
                <ul className="list-disc list-inside space-y-1">
                    <li><strong>Relative Minor:</strong> {keyData.circleOfFifths.relativeMinor}</li>
                    <li><strong>Parallel Minor:</strong> {keyData.circleOfFifths.parallelMinor}</li>
                    <li><strong>Dominant Key:</strong> {keyData.circleOfFifths.dominantKey}</li>
                    <li><strong>Subdominant Key:</strong> {keyData.circleOfFifths.subdominantKey}</li>
                    <li><strong>Closely Related Keys:</strong> {keyData.circleOfFifths.closelyRelatedKeys.join(", ")}</li>
                    <li><strong>Distant Keys:</strong> {keyData.circleOfFifths.distantKeys.join(", ")}</li>
                </ul>
            </ChordCard>

            <ChordCard title="Scale Modes">
                <ul className="space-y-2">
                    {Object.entries(keyData.modes).map(([mode, notes]) => (
                        <li key={mode}>
        <span className={`${getModeColor(mode)} font-bold mr-2`}>
          {mode}:
        </span>
                            {notes.join(" - ")}
                        </li>
                    ))}
                </ul>
            </ChordCard>

            <ChordCard title="Scales">
                {Object.entries(keyData.scales).map(([name, notes]) => (
                    <p key={name}>
                        <span className="font-bold text-purple-300">{name}:</span> {notes.join(" - ")}
                    </p>
                ))}
            </ChordCard>

            <ChordCard title="Key Feelings & Colors">
                <p>
                    <span className="font-bold text-yellow-300">Color:</span> {keyData.emotionalCharacter.color}
                </p>
                <p>
                    <span className="font-bold text-green-300">Feelings:</span> {keyData.emotionalCharacter.feelings.join(", ")}
                </p>
                <p>
                    <span className="font-bold text-pink-300">Common Genres:</span> {keyData.emotionalCharacter.commonGenres.join(", ")}
                </p>
            </ChordCard>
        </div>
    );
}