const cSharpMajor = {
    scaleNotes: ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
    scales: {
        Major: ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
        Minor: ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
        MajorPentatonic: ["C#", "D#", "E#", "G#", "A#"],
        MinorPentatonic: ["A#", "C#", "D#", "E#", "G#"],
        Blues: ["C#", "E", "F#", "G", "G#", "B"],
        HarmonicMinor: ["A#", "B#", "C#", "D#", "E#", "F#", "G##"],
        MelodicMinorAscending: ["A#", "B#", "C#", "D#", "E#", "F##", "G##"]
    },
    parallelMinor: "C# Minor",
    triads: [
        {
            type: "Major",
            name: "C#",
            root: ["C#", "E#", "G#"],
            inv1: ["E#", "G#", "C#"],
            inv2: ["G#", "C#", "E#"]
        },
        {
            type: "Minor",
            name: "C#m",
            root: ["C#", "E", "G#"],
            inv1: ["E", "G#", "C#"],
            inv2: ["G#", "C#", "E"]
        }
    ],
    sevenths: [
        {
            name: "C#maj7",
            root: ["C#", "E#", "G#", "B#"],
            inv1: ["E#", "G#", "B#", "C#"],
            inv2: ["G#", "B#", "C#", "E#"],
            inv3: ["B#", "C#", "E#", "G#"]
        }
    ],
    extendedChords: [
        { name: "C#maj9", notes: ["C#", "E#", "G#", "B#", "D#"] },
        { name: "C#9", notes: ["C#", "E#", "G#", "B", "D#"] },
        { name: "C#11", notes: ["C#", "E#", "G#", "B", "D#", "F#"] },
        { name: "C#13", notes: ["C#", "E#", "G#", "B", "D#", "F#", "A#"] },
        { name: "C#min9", notes: ["C#", "E", "G#", "B", "D#"] },
        { name: "C#min11", notes: ["C#", "E", "G#", "B", "D#", "F#"] },
        { name: "C#min13", notes: ["C#", "E", "G#", "B", "D#", "F#", "A#"] },
        { name: "C#7b9", notes: ["C#", "E#", "G#", "B", "D"] },
        { name: "C#7#9", notes: ["C#", "E#", "G#", "B", "E"] },
        { name: "C#7#11", notes: ["C#", "E#", "G#", "B", "F##"] }
    ],
    insaneChords: [
        { name: "C#13b9#11", notes: ["C#", "E#", "G#", "B", "D", "F##", "A#"] },
        { name: "C#7alt", notes: ["C#", "E#", "G#", "B", "D", "E", "F##"] },
        { name: "C#maj7#11", notes: ["C#", "E#", "G#", "B#", "F##"] },
        { name: "C#7#5#9", notes: ["C#", "E#", "A", "B", "E"] },
        { name: "C#7b5b9", notes: ["C#", "E#", "G", "B", "D"] },
        { name: "C#dim7add13", notes: ["C#", "E", "G", "Bb", "B#", "D#", "F#", "A#"] }
    ],
    commonProgressions: {
        Pop: [
            "I - IV - V → C# - F# - G#",
            "I - V - vi - IV - V → C# - G# - A#m - F# - G#"
        ],
        Jazz: [
            "ii - V - I → D#m - G#7 - C#",
            "ii7 - V7 - Imaj7 - VI7 - ii7 → D#m7 - G#7 - C#maj7 - E#7 - D#m7",
            "iii7 - VI7 - ii7 - V7 - Imaj7 → E#m7 - A#7 - D#m7 - G#7 - C#maj7"
        ],
        Funk: [
            "I7 - IV7 - V7 - IV7 - I7 → C#7 - F#7 - G#7 - F#7 - C#7",
            "I9 - bVII9 - IV9 - V9 - I9 → C#9 - B9 - F#9 - G#9 - C#9"
        ],
        RnB: [
            "Imaj7 - iii7 - vi7 - II7 - V7 → C#maj7 - E#m7 - A#m7 - D#7 - G#7"
        ],
        Latin: [
            "Imaj7 - bIII7 - ii7 - V7 - Imaj7 → C#maj7 - E7 - D#m7 - G#7 - C#maj7"
        ],
        Synthwave: [
            "vi - IV - I - V → A#m - F# - C# - G#",
            "i - VI - III - VII → A#m - F# - C# - G#",
            "I - iii - vi - IV → C# - E#m - A#m - F#",
            "i - VII - VI - VII → A#m - G# - F# - G#",
            "I - V - IV - V → C# - G# - F# - G#",
            "vi - V - IV - V → A#m - G# - F# - G#"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → C#m - E - G#",
            "Hirano → bVI - bVII - I → E - F# - C#",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → F#maj7 - G#7 - E#m7 - A#m7",
            "Haru no Hi → bVImaj7 - bVII - Imaj7 → Emaj7 - F# - C#maj7",
            "Evangelion Ending → ii - V - iii - VI → D#m7 - G#7 - E#m7 - A#7",
            "Natsukashii → Imaj7 - iii7 - vi7 - II7 → C#maj7 - E#m7 - A#m7 - D#7",
            "J-Rock Minor Lift → iv - V - bVI - V → C#m - G# - A - G#"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → F#maj7 - G#7 - E#m7 - A#m7",
            "Imaj7 - bIII7 - ii7 - V7 → C#maj7 - E7 - D#m7 - G#7",
            "I - V - vi - IV → C# - G# - A#m - F#",
            "Imaj7 - VI7 - ii7 - V7 → C#maj7 - E#7 - D#m7 - G#7"
        ],
        KPop: [
            "Imaj7 - iii7 - vi7 - IVmaj7 → C#maj7 - E#m7 - A#m7 - F#maj7",
            "vi - IV - I - V → A#m - F# - C# - G#",
            "I - V/vi - vi - IV → C# - E#7 - A#m - F#",
            "I - V - IV - V → C# - G# - F# - G#"
        ],
        AnimeBallad: [
            "vi - IV - I - V → A#m - F# - C# - G#",
            "I - V/vi - vi - IV → C# - E#7 - A#m - F#",
            "IV - V - iii - vi → F# - G# - E#m - A#m",
            "I - iii - IV - V → C# - E#m - F# - G#",
            "Imaj7 - iii7 - vi7 - IVmaj7 → C#maj7 - E#m7 - A#m7 - F#maj7",
            "ii7 - V7 - Imaj7 - vi7 → D#m7 - G#7 - C#maj7 - A#m7",
            "Imaj7 - vi7 - IVmaj7 - V7 → C#maj7 - A#m7 - F#maj7 - G#7"
        ]
    },
    chordFunctions: [
        { degree: "I", chord: "C#maj" },
        { degree: "ii", chord: "D#min" },
        { degree: "iii", chord: "E#min" },
        { degree: "IV", chord: "F#maj" },
        { degree: "V", chord: "G#maj" },
        { degree: "vi", chord: "A#min" },
        { degree: "vii°", chord: "B#dim" },
        { degree: "bIII", chord: "Emaj" },
        { degree: "bVI", chord: "Amaj" },
        { degree: "bVII", chord: "Bmaj" },
        { degree: "bVII9", chord: "B9" },
        { degree: "VI7", chord: "A#7" },
        { degree: "II7", chord: "D#7" }
    ],
    substitutions: [
        "G#7 → D7 (tritone)",
        "E#m → C#maj7 (relative)"
    ],
    nextChords: ["A#m", "F#", "G#", "E#m", "B"],
    parallelMinorChords: [
        {
            name: "C#m",
            notes: ["C#", "E", "G#"]
        }
    ],
    circleOfFifths: {
        relativeMinor: "A# Minor",
        parallelMinor: "C# Minor",
        dominantKey: "G# Major",
        subdominantKey: "F# Major",
        closelyRelatedKeys: ["G# Major", "F# Major", "A# Minor", "D# Minor", "E# Minor", "B Major"],
        distantKeys: ["Bb Major", "Eb Major", "Ab Major"]
    },
    modes: {
        Ionian: ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
        Dorian: ["D#", "E#", "F#", "G#", "A#", "B#", "C#"],
        Phrygian: ["E#", "F#", "G#", "A#", "B#", "C#", "D#"],
        Lydian: ["F#", "G#", "A#", "B#", "C#", "D#", "E#"],
        Mixolydian: ["G#", "A#", "B#", "C#", "D#", "E#", "F#"],
        Aeolian: ["A#", "B#", "C#", "D#", "E#", "F#", "G#"],
        Locrian: ["B#", "C#", "D#", "E#", "F#", "G#", "A#"]
    },
    chordSpellingQuickRef: [
        "C#maj7 = C#-E#-G#-B#",
        "C#m7 = C#-E-G#-B"
    ],
    emotionalCharacter: {
        color: "icy aqua / pale turquoise",
        feelings: ["cool", "bright", "sophisticated", "crystalline"],
        commonGenres: ["Pop", "Classical", "Electronic", "Modern Jazz"]
    }
};

export default cSharpMajor;