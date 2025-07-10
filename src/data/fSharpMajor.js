const fSharpMajor = {
    scaleNotes: ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
    scales: {
        Major: ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
        Minor: ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
        MajorPentatonic: ["F#", "G#", "A#", "C#", "D#"],
        MinorPentatonic: ["D#", "F#", "G#", "A#", "C#"],
        Blues: ["F#", "A", "B", "C", "C#", "E"],
        HarmonicMinor: ["D#", "E#", "F#", "G#", "A#", "B", "C##"],
        MelodicMinorAscending: ["D#", "E#", "F#", "G#", "A#", "B#", "C##"]
    },
    parallelMinor: "F# Minor",
    triads: [
        {
            type: "Major",
            name: "F#",
            root: ["F#", "A#", "C#"],
            inv1: ["A#", "C#", "F#"],
            inv2: ["C#", "F#", "A#"]
        },
        {
            type: "Minor",
            name: "F#m",
            root: ["F#", "A", "C#"],
            inv1: ["A", "C#", "F#"],
            inv2: ["C#", "F#", "A"]
        }
    ],
    sevenths: [
        {
            name: "F#maj7",
            root: ["F#", "A#", "C#", "E#"],
            inv1: ["A#", "C#", "E#", "F#"],
            inv2: ["C#", "E#", "F#", "A#"],
            inv3: ["E#", "F#", "A#", "C#"]
        }
    ],
    extendedChords: [
        { name: "F#maj9", notes: ["F#", "A#", "C#", "E#", "G#"] },
        { name: "F#9", notes: ["F#", "A#", "C#", "E", "G#"] },
        { name: "F#11", notes: ["F#", "A#", "C#", "E", "G#", "B"] },
        { name: "F#13", notes: ["F#", "A#", "C#", "E", "G#", "B", "D#"] },
        { name: "F#min9", notes: ["F#", "A", "C#", "E", "G#"] },
        { name: "F#min11", notes: ["F#", "A", "C#", "E", "G#", "B"] },
        { name: "F#min13", notes: ["F#", "A", "C#", "E", "G#", "B", "D#"] },
        { name: "F#7b9", notes: ["F#", "A#", "C#", "E", "G"] },
        { name: "F#7#9", notes: ["F#", "A#", "C#", "E", "A"] },
        { name: "F#7#11", notes: ["F#", "A#", "C#", "E", "B#"] }
    ],
    insaneChords: [
        { name: "F#13b9#11", notes: ["F#", "A#", "C#", "E", "G", "B#", "D#"] },
        { name: "F#7alt", notes: ["F#", "A#", "C#", "E", "G", "A", "B#"] },
        { name: "F#maj7#11", notes: ["F#", "A#", "C#", "E#", "B#"] },
        { name: "F#7#5#9", notes: ["F#", "A#", "D", "E", "A"] },
        { name: "F#7b5b9", notes: ["F#", "A#", "C", "E", "G"] },
        { name: "F#dim7add13", notes: ["F#", "A", "C", "D#", "E#", "G#", "B", "D#"] }
    ],
    commonProgressions: {
        Pop: [
            "I - IV - V → F# - B - C#",
            "I - V - vi - IV - V → F# - C# - D#m - B - C#"
        ],
        Jazz: [
            "ii - V - I → G#m - C#7 - F#",
            "ii7 - V7 - Imaj7 - VI7 - ii7 → G#m7 - C#7 - F#maj7 - A#7 - G#m7",
            "iii7 - VI7 - ii7 - V7 - Imaj7 → A#m7 - D#7 - G#m7 - C#7 - F#maj7"
        ],
        Funk: [
            "I7 - IV7 - V7 - IV7 - I7 → F#7 - B7 - C#7 - B7 - F#7",
            "I9 - bVII9 - IV9 - V9 - I9 → F#9 - E9 - B9 - C#9 - F#9"
        ],
        RnB: [
            "Imaj7 - iii7 - vi7 - II7 - V7 → F#maj7 - A#m7 - D#m7 - G#7 - C#7"
        ],
        Latin: [
            "Imaj7 - bIII7 - ii7 - V7 - Imaj7 → F#maj7 - A7 - G#m7 - C#7 - F#maj7"
        ],
        Synthwave: [
            "vi - IV - I - V → D#m - B - F# - C#",
            "i - VI - III - VII → D#m - B - F# - C#",
            "I - iii - vi - IV → F# - A#m - D#m - B",
            "i - VII - VI - VII → D#m - C# - B - C#",
            "I - V - IV - V → F# - C# - B - C#",
            "vi - V - IV - V → D#m - C# - B - C#"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → F#m - A - C#",
            "Hirano → bVI - bVII - I → A - B - F#",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Bmaj7 - C#7 - A#m7 - D#m7",
            "Haru no Hi → bVImaj7 - bVII - Imaj7 → Amaj7 - B - F#maj7",
            "Evangelion Ending → ii - V - iii - VI → G#m7 - C#7 - A#m7 - D#7",
            "Natsukashii → Imaj7 - iii7 - vi7 - II7 → F#maj7 - A#m7 - D#m7 - G#7",
            "J-Rock Minor Lift → iv - V - bVI - V → F#m - C# - D - C#"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Bmaj7 - C#7 - A#m7 - D#m7",
            "Imaj7 - bIII7 - ii7 - V7 → F#maj7 - A7 - G#m7 - C#7",
            "I - V - vi - IV → F# - C# - D#m - B",
            "Imaj7 - VI7 - ii7 - V7 → F#maj7 - A#7 - G#m7 - C#7"
        ],
        KPop: [
            "Imaj7 - iii7 - vi7 - IVmaj7 → F#maj7 - A#m7 - D#m7 - Bmaj7",
            "vi - IV - I - V → D#m - B - F# - C#",
            "I - V/vi - vi - IV → F# - A#7 - D#m - B",
            "I - V - IV - V → F# - C# - B - C#"
        ],
        AnimeBallad: [
            "vi - IV - I - V → D#m - B - F# - C#",
            "I - V/vi - vi - IV → F# - A#7 - D#m - B",
            "IV - V - iii - vi → B - C# - A#m - D#m",
            "I - iii - IV - V → F# - A#m - B - C#",
            "Imaj7 - iii7 - vi7 - IVmaj7 → F#maj7 - A#m7 - D#m7 - Bmaj7",
            "ii7 - V7 - Imaj7 - vi7 → G#m7 - C#7 - F#maj7 - D#m7",
            "Imaj7 - vi7 - IVmaj7 - V7 → F#maj7 - D#m7 - Bmaj7 - C#7"
        ]
    },
    chordFunctions: [
        { degree: "I", chord: "F#maj" },
        { degree: "ii", chord: "G#min" },
        { degree: "iii", chord: "A#min" },
        { degree: "IV", chord: "Bmaj" },
        { degree: "V", chord: "C#maj" },
        { degree: "vi", chord: "D#min" },
        { degree: "vii°", chord: "E#dim" },
        { degree: "bIII", chord: "Amaj" },
        { degree: "bVI", chord: "Dmaj" },
        { degree: "bVII", chord: "Emaj" },
        { degree: "bVII9", chord: "E9" },
        { degree: "VI7", chord: "D#7" },
        { degree: "II7", chord: "G#7" }
    ],
    substitutions: [
        "C#7 → G7 (tritone)",
        "A#m → F#maj7 (relative)"
    ],
    nextChords: ["D#m", "B", "C#", "A#m", "E"],
    parallelMinorChords: [
        {
            name: "F#m",
            notes: ["F#", "A", "C#"]
        }
    ],
    circleOfFifths: {
        relativeMinor: "D# Minor",
        parallelMinor: "F# Minor",
        dominantKey: "C# Major",
        subdominantKey: "B Major",
        closelyRelatedKeys: ["C# Major", "B Major", "D# Minor", "G# Minor", "A# Minor", "E Major"],
        distantKeys: ["Bb Major", "Eb Major", "Ab Major"]
    },
    modes: {
        Ionian: ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
        Dorian: ["G#", "A#", "B", "C#", "D#", "E#", "F#"],
        Phrygian: ["A#", "B", "C#", "D#", "E#", "F#", "G#"],
        Lydian: ["B", "C#", "D#", "E#", "F#", "G#", "A#"],
        Mixolydian: ["C#", "D#", "E#", "F#", "G#", "A#", "B"],
        Aeolian: ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
        Locrian: ["E#", "F#", "G#", "A#", "B", "C#", "D#"]
    },
    chordSpellingQuickRef: [
        "F#maj7 = F#-A#-C#-E#",
        "F#m7 = F#-A-C#-E"
    ],
    emotionalCharacter: {
        color: "bright teal / electric blue",
        feelings: ["vivid", "modern", "sharp", "clear"],
        commonGenres: ["Pop", "Rock", "Fusion", "Classical"]
    }
};

export default fSharpMajor;