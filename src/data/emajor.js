const eMajor = {
    scaleNotes: ["E", "F#", "G#", "A", "B", "C#", "D#"],
    scales: {
        Major: ["E", "F#", "G#", "A", "B", "C#", "D#"],
        Minor: ["C#", "D#", "E", "F#", "G#", "A", "B"],
        MajorPentatonic: ["E", "F#", "G#", "B", "C#"],
        MinorPentatonic: ["C#", "E", "F#", "G#", "B"],
        Blues: ["E", "G", "A", "Bb", "B", "D"],
        HarmonicMinor: ["C#", "D#", "E", "F#", "G#", "A", "B#"],
        MelodicMinorAscending: ["C#", "D#", "E", "F#", "G#", "A#", "B#"]
    },
    parallelMinor: "E Minor",
    triads: [
        {
            type: "Major",
            name: "E",
            root: ["E", "G#", "B"],
            inv1: ["G#", "B", "E"],
            inv2: ["B", "E", "G#"]
        },
        {
            type: "Minor",
            name: "Em",
            root: ["E", "G", "B"],
            inv1: ["G", "B", "E"],
            inv2: ["B", "E", "G"]
        }
    ],
    sevenths: [
        {
            name: "Emaj7",
            root: ["E", "G#", "B", "D#"],
            inv1: ["G#", "B", "D#", "E"],
            inv2: ["B", "D#", "E", "G#"],
            inv3: ["D#", "E", "G#", "B"]
        }
    ],
    extendedChords: [
        { name: "Emaj9", notes: ["E", "G#", "B", "D#", "F#"] },
        { name: "E9", notes: ["E", "G#", "B", "D", "F#"] },
        { name: "E11", notes: ["E", "G#", "B", "D", "F#", "A"] },
        { name: "E13", notes: ["E", "G#", "B", "D", "F#", "A", "C#"] },
        { name: "Emin9", notes: ["E", "G", "B", "D", "F#"] },
        { name: "Emin11", notes: ["E", "G", "B", "D", "F#", "A"] },
        { name: "Emin13", notes: ["E", "G", "B", "D", "F#", "A", "C#"] },
        { name: "E7b9", notes: ["E", "G#", "B", "D", "F"] },
        { name: "E7#9", notes: ["E", "G#", "B", "D", "G"] },
        { name: "E7#11", notes: ["E", "G#", "B", "D", "A#"] }
    ],
    insaneChords: [
        { name: "E13b9#11", notes: ["E", "G#", "B", "D", "F", "A#", "C#"] },
        { name: "E7alt", notes: ["E", "G#", "B", "D", "F", "G", "A#"] },
        { name: "Emaj7#11", notes: ["E", "G#", "B", "D#", "A#"] },
        { name: "E7#5#9", notes: ["E", "G#", "C", "D", "G"] },
        { name: "E7b5b9", notes: ["E", "G#", "Bb", "D", "F"] },
        { name: "Edim7add13", notes: ["E", "G", "Bb", "C#", "D#", "F#", "A", "C#"] }
    ],
    commonProgressions: {
        Pop: [
            "I - IV - V → E - A - B",
            "I - V - vi - IV - V → E - B - C#m - A - B"
        ],
        Jazz: [
            "ii - V - I → F#m - B7 - E",
            "ii7 - V7 - Imaj7 - VI7 - ii7 → F#m7 - B7 - Emaj7 - G#7 - F#m7",
            "iii7 - VI7 - ii7 - V7 - Imaj7 → G#m7 - C#7 - F#m7 - B7 - Emaj7"
        ],
        Funk: [
            "I7 - IV7 - V7 - IV7 - I7 → E7 - A7 - B7 - A7 - E7",
            "I9 - bVII9 - IV9 - V9 - I9 → E9 - D9 - A9 - B9 - E9"
        ],
        RnB: [
            "Imaj7 - iii7 - vi7 - II7 - V7 → Emaj7 - G#m7 - C#m7 - F#7 - B7"
        ],
        Latin: [
            "Imaj7 - bIII7 - ii7 - V7 - Imaj7 → Emaj7 - G7 - F#m7 - B7 - Emaj7"
        ],
        Synthwave: [
            "vi - IV - I - V → C#m - A - E - B",
            "i - VI - III - VII → C#m - A - E - B",
            "I - iii - vi - IV → E - G#m - C#m - A",
            "i - VII - VI - VII → C#m - B - A - B",
            "I - V - IV - V → E - B - A - B",
            "vi - V - IV - V → C#m - B - A - B"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Em - G - B",
            "Hirano → bVI - bVII - I → G - A - E",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Amaj7 - B7 - G#m7 - C#m7",
            "Haru no Hi → bVImaj7 - bVII - Imaj7 → Gmaj7 - A - Emaj7",
            "Evangelion Ending → ii - V - iii - VI → F#m7 - B7 - G#m7 - C#7",
            "Natsukashii → Imaj7 - iii7 - vi7 - II7 → Emaj7 - G#m7 - C#m7 - F#7",
            "J-Rock Minor Lift → iv - V - bVI - V → Em - B - C - B"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Amaj7 - B7 - G#m7 - C#m7",
            "Imaj7 - bIII7 - ii7 - V7 → Emaj7 - G7 - F#m7 - B7",
            "I - V - vi - IV → E - B - C#m - A",
            "Imaj7 - VI7 - ii7 - V7 → Emaj7 - G#7 - F#m7 - B7"
        ],
        KPop: [
            "Imaj7 - iii7 - vi7 - IVmaj7 → Emaj7 - G#m7 - C#m7 - Amaj7",
            "vi - IV - I - V → C#m - A - E - B",
            "I - V/vi - vi - IV → E - G#7 - C#m - A",
            "I - V - IV - V → E - B - A - B"
        ],
        AnimeBallad: [
            "vi - IV - I - V → C#m - A - E - B",
            "I - V/vi - vi - IV → E - G#7 - C#m - A",
            "IV - V - iii - vi → A - B - G#m - C#m",
            "I - iii - IV - V → E - G#m - A - B",
            "Imaj7 - iii7 - vi7 - IVmaj7 → Emaj7 - G#m7 - C#m7 - Amaj7",
            "ii7 - V7 - Imaj7 - vi7 → F#m7 - B7 - Emaj7 - C#m7",
            "Imaj7 - vi7 - IVmaj7 - V7 → Emaj7 - C#m7 - Amaj7 - B7"
        ]
    },
    chordFunctions: [
        { degree: "I", chord: "Emaj" },
        { degree: "ii", chord: "F#min" },
        { degree: "iii", chord: "G#min" },
        { degree: "IV", chord: "Amaj" },
        { degree: "V", chord: "Bmaj" },
        { degree: "vi", chord: "C#min" },
        { degree: "vii°", chord: "D#dim" },
        { degree: "bIII", chord: "Gmaj" },
        { degree: "bVI", chord: "Cmaj" },
        { degree: "bVII", chord: "Dmaj" },
        { degree: "bVII9", chord: "D9" },
        { degree: "VI7", chord: "C#7" },
        { degree: "II7", chord: "F#7" }
    ],
    substitutions: [
        "B7 → F7 (tritone)",
        "G#m → Emaj7 (relative)"
    ],
    nextChords: ["C#m", "A", "B", "G#m", "D"],
    parallelMinorChords: [
        {
            name: "Em",
            notes: ["E", "G", "B"]
        }
    ],
    circleOfFifths: {
        relativeMinor: "C# Minor",
        parallelMinor: "E Minor",
        dominantKey: "B Major",
        subdominantKey: "A Major",
        closelyRelatedKeys: ["B Major", "A Major", "C# Minor", "F# Minor", "G# Minor", "D Major"],
        distantKeys: ["Bb Major", "Eb Major", "Ab Major"]
    },
    modes: {
        Ionian: ["E", "F#", "G#", "A", "B", "C#", "D#"],
        Dorian: ["F#", "G#", "A", "B", "C#", "D#", "E"],
        Phrygian: ["G#", "A", "B", "C#", "D#", "E", "F#"],
        Lydian: ["A", "B", "C#", "D#", "E", "F#", "G#"],
        Mixolydian: ["B", "C#", "D#", "E", "F#", "G#", "A"],
        Aeolian: ["C#", "D#", "E", "F#", "G#", "A", "B"],
        Locrian: ["D#", "E", "F#", "G#", "A", "B", "C#"]
    },
    chordSpellingQuickRef: [
        "Emaj7 = E-G#-B-D#",
        "Em7 = E-G-B-D"
    ],
    emotionalCharacter: {
        color: "bright blue / ocean",
        feelings: ["fresh", "shimmering", "radiant", "clean"],
        commonGenres: ["Pop", "Rock", "Electronic", "Classical"]
    }
};

export default eMajor;