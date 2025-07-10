const bMajor = {
    scaleNotes: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
    scales: {
        Major: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
        Minor: ["G#", "A#", "B", "C#", "D#", "E", "F#"],
        MajorPentatonic: ["B", "C#", "D#", "F#", "G#"],
        MinorPentatonic: ["G#", "B", "C#", "D#", "F#"],
        Blues: ["B", "D", "E", "F", "F#", "A"],
        HarmonicMinor: ["G#", "A#", "B", "C#", "D#", "E", "Fx"],
        MelodicMinorAscending: ["G#", "A#", "B", "C#", "D#", "E#", "Fx"]
    },
    parallelMinor: "B Minor",
    triads: [
        {
            type: "Major",
            name: "B",
            root: ["B", "D#", "F#"],
            inv1: ["D#", "F#", "B"],
            inv2: ["F#", "B", "D#"]
        },
        {
            type: "Minor",
            name: "Bm",
            root: ["B", "D", "F#"],
            inv1: ["D", "F#", "B"],
            inv2: ["F#", "B", "D"]
        }
    ],
    sevenths: [
        {
            name: "Bmaj7",
            root: ["B", "D#", "F#", "A#"],
            inv1: ["D#", "F#", "A#", "B"],
            inv2: ["F#", "A#", "B", "D#"],
            inv3: ["A#", "B", "D#", "F#"]
        }
    ],
    extendedChords: [
        { name: "Bmaj9", notes: ["B", "D#", "F#", "A#", "C#"] },
        { name: "B9", notes: ["B", "D#", "F#", "A", "C#"] },
        { name: "B11", notes: ["B", "D#", "F#", "A", "C#", "E"] },
        { name: "B13", notes: ["B", "D#", "F#", "A", "C#", "E", "G#"] },
        { name: "Bmin9", notes: ["B", "D", "F#", "A", "C#"] },
        { name: "Bmin11", notes: ["B", "D", "F#", "A", "C#", "E"] },
        { name: "Bmin13", notes: ["B", "D", "F#", "A", "C#", "E", "G#"] },
        { name: "B7b9", notes: ["B", "D#", "F#", "A", "C"] },
        { name: "B7#9", notes: ["B", "D#", "F#", "A", "D"] },
        { name: "B7#11", notes: ["B", "D#", "F#", "A", "E#"] }
    ],
    insaneChords: [
        { name: "B13b9#11", notes: ["B", "D#", "F#", "A", "C", "E#", "G#"] },
        { name: "B7alt", notes: ["B", "D#", "F#", "A", "C", "D", "E#"] },
        { name: "Bmaj7#11", notes: ["B", "D#", "F#", "A#", "E#"] },
        { name: "B7#5#9", notes: ["B", "D#", "Fx", "A", "D"] },
        { name: "B7b5b9", notes: ["B", "D#", "F", "A", "C"] },
        { name: "Bdim7add13", notes: ["B", "D", "F", "G#", "A#", "C#", "E", "G#"] }
    ],
    commonProgressions: {
        Pop: [
            "I - IV - V → B - E - F#",
            "I - V - vi - IV - V → B - F# - G#m - E - F#"
        ],
        Jazz: [
            "ii - V - I → C#m - F#7 - B",
            "ii7 - V7 - Imaj7 - VI7 - ii7 → C#m7 - F#7 - Bmaj7 - D#7 - C#m7",
            "iii7 - VI7 - ii7 - V7 - Imaj7 → D#m7 - G#7 - C#m7 - F#7 - Bmaj7"
        ],
        Funk: [
            "I7 - IV7 - V7 - IV7 - I7 → B7 - E7 - F#7 - E7 - B7",
            "I9 - bVII9 - IV9 - V9 - I9 → B9 - A9 - E9 - F#9 - B9"
        ],
        RnB: [
            "Imaj7 - iii7 - vi7 - II7 - V7 → Bmaj7 - D#m7 - G#m7 - C#7 - F#7"
        ],
        Latin: [
            "Imaj7 - bIII7 - ii7 - V7 - Imaj7 → Bmaj7 - D7 - C#m7 - F#7 - Bmaj7"
        ],
        Synthwave: [
            "vi - IV - I - V → G#m - E - B - F#",
            "i - VI - III - VII → G#m - E - B - F#",
            "I - iii - vi - IV → B - D#m - G#m - E",
            "i - VII - VI - VII → G#m - F# - E - F#",
            "I - V - IV - V → B - F# - E - F#",
            "vi - V - IV - V → G#m - F# - E - F#"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Bm - D - F#",
            "Hirano → bVI - bVII - I → D - E - B",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Emaj7 - F#7 - D#m7 - G#m7",
            "Haru no Hi → bVImaj7 - bVII - Imaj7 → Dmaj7 - E - Bmaj7",
            "Evangelion Ending → ii - V - iii - VI → C#m7 - F#7 - D#m7 - G#7",
            "Natsukashii → Imaj7 - iii7 - vi7 - II7 → Bmaj7 - D#m7 - G#m7 - C#7",
            "J-Rock Minor Lift → iv - V - bVI - V → Bm - F# - G - F#"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Emaj7 - F#7 - D#m7 - G#m7",
            "Imaj7 - bIII7 - ii7 - V7 → Bmaj7 - D7 - C#m7 - F#7",
            "I - V - vi - IV → B - F# - G#m - E",
            "Imaj7 - VI7 - ii7 - V7 → Bmaj7 - D#7 - C#m7 - F#7"
        ],
        KPop: [
            "Imaj7 - iii7 - vi7 - IVmaj7 → Bmaj7 - D#m7 - G#m7 - Emaj7",
            "vi - IV - I - V → G#m - E - B - F#",
            "I - V/vi - vi - IV → B - D#7 - G#m - E",
            "I - V - IV - V → B - F# - E - F#"
        ],
        AnimeBallad: [
            "vi - IV - I - V → G#m - E - B - F#",
            "I - V/vi - vi - IV → B - D#7 - G#m - E",
            "IV - V - iii - vi → E - F# - D#m - G#m",
            "I - iii - IV - V → B - D#m - E - F#",
            "Imaj7 - iii7 - vi7 - IVmaj7 → Bmaj7 - D#m7 - G#m7 - Emaj7",
            "ii7 - V7 - Imaj7 - vi7 → C#m7 - F#7 - Bmaj7 - G#m7",
            "Imaj7 - vi7 - IVmaj7 - V7 → Bmaj7 - G#m7 - Emaj7 - F#7"
        ]
    },
    chordFunctions: [
        { degree: "I", chord: "Bmaj" },
        { degree: "ii", chord: "C#min" },
        { degree: "iii", chord: "D#min" },
        { degree: "IV", chord: "Emaj" },
        { degree: "V", chord: "F#maj" },
        { degree: "vi", chord: "G#min" },
        { degree: "vii°", chord: "A#dim" },
        { degree: "bIII", chord: "Dmaj" },
        { degree: "bVI", chord: "Gmaj" },
        { degree: "bVII", chord: "Amaj" },
        { degree: "bVII9", chord: "A9" },
        { degree: "VI7", chord: "G#7" },
        { degree: "II7", chord: "C#7" }
    ],
    substitutions: [
        "F#7 → C7 (tritone)",
        "D#m → Bmaj7 (relative)"
    ],
    nextChords: ["G#m", "E", "F#", "D#m", "A"],
    parallelMinorChords: [
        {
            name: "Bm",
            notes: ["B", "D", "F#"]
        }
    ],
    circleOfFifths: {
        relativeMinor: "G# Minor",
        parallelMinor: "B Minor",
        dominantKey: "F# Major",
        subdominantKey: "E Major",
        closelyRelatedKeys: ["F# Major", "E Major", "G# Minor", "C# Minor", "D# Minor", "A Major"],
        distantKeys: ["F Major", "Bb Major", "Eb Major"]
    },
    modes: {
        Ionian: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
        Dorian: ["C#", "D#", "E", "F#", "G#", "A#", "B"],
        Phrygian: ["D#", "E", "F#", "G#", "A#", "B", "C#"],
        Lydian: ["E", "F#", "G#", "A#", "B", "C#", "D#"],
        Mixolydian: ["F#", "G#", "A#", "B", "C#", "D#", "E"],
        Aeolian: ["G#", "A#", "B", "C#", "D#", "E", "F#"],
        Locrian: ["A#", "B", "C#", "D#", "E", "F#", "G#"]
    },
    chordSpellingQuickRef: [
        "Bmaj7 = B-D#-F#-A#",
        "Bm7 = B-D-F#-A"
    ],
    emotionalCharacter: {
        color: "deep violet / royal purple",
        feelings: ["majestic", "bold", "luxurious", "radiant"],
        commonGenres: ["Rock", "Pop", "Orchestral", "Jazz"]
    }
};

export default bMajor;