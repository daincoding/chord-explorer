const aMajor = {
    scaleNotes: ["A", "B", "C#", "D", "E", "F#", "G#"],
    scales: {
        Major: ["A", "B", "C#", "D", "E", "F#", "G#"],
        Minor: ["F#", "G#", "A", "B", "C#", "D", "E"],
        MajorPentatonic: ["A", "B", "C#", "E", "F#"],
        MinorPentatonic: ["F#", "A", "B", "C#", "E"],
        Blues: ["A", "C", "D", "D#", "E", "G"],
        HarmonicMinor: ["F#", "G#", "A", "B", "C#", "D", "E#"],
        MelodicMinorAscending: ["F#", "G#", "A", "B", "C#", "D#", "E#"]
    },
    parallelMinor: "A Minor",
    triads: [
        {
            type: "Major",
            name: "A",
            root: ["A", "C#", "E"],
            inv1: ["C#", "E", "A"],
            inv2: ["E", "A", "C#"]
        },
        {
            type: "Minor",
            name: "Am",
            root: ["A", "C", "E"],
            inv1: ["C", "E", "A"],
            inv2: ["E", "A", "C"]
        }
    ],
    sevenths: [
        {
            name: "Amaj7",
            root: ["A", "C#", "E", "G#"],
            inv1: ["C#", "E", "G#", "A"],
            inv2: ["E", "G#", "A", "C#"],
            inv3: ["G#", "A", "C#", "E"]
        }
    ],
    extendedChords: [
        { name: "Amaj9", notes: ["A", "C#", "E", "G#", "B"] },
        { name: "A9", notes: ["A", "C#", "E", "G", "B"] },
        { name: "A11", notes: ["A", "C#", "E", "G", "B", "D"] },
        { name: "A13", notes: ["A", "C#", "E", "G", "B", "D", "F#"] },
        { name: "Amin9", notes: ["A", "C", "E", "G", "B"] },
        { name: "Amin11", notes: ["A", "C", "E", "G", "B", "D"] },
        { name: "Amin13", notes: ["A", "C", "E", "G", "B", "D", "F#"] },
        { name: "A7b9", notes: ["A", "C#", "E", "G", "Bb"] },
        { name: "A7#9", notes: ["A", "C#", "E", "G", "C"] },
        { name: "A7#11", notes: ["A", "C#", "E", "G", "D#"] }
    ],
    insaneChords: [
        { name: "A13b9#11", notes: ["A", "C#", "E", "G", "Bb", "D#", "F#"] },
        { name: "A7alt", notes: ["A", "C#", "E", "G", "Bb", "C", "D#"] },
        { name: "Amaj7#11", notes: ["A", "C#", "E", "G#", "D#"] },
        { name: "A7#5#9", notes: ["A", "C#", "F", "G", "C"] },
        { name: "A7b5b9", notes: ["A", "C#", "Eb", "G", "Bb"] },
        { name: "Adim7add13", notes: ["A", "C", "Eb", "F#", "G#", "B", "D", "F#"] }
    ],
    commonProgressions: {
        Pop: [
            "I - IV - V → A - D - E",
            "I - V - vi - IV - V → A - E - F#m - D - E"
        ],
        Jazz: [
            "ii - V - I → Bm - E7 - A",
            "ii7 - V7 - Imaj7 - VI7 - ii7 → Bm7 - E7 - Amaj7 - C#7 - Bm7",
            "iii7 - VI7 - ii7 - V7 - Imaj7 → C#m7 - F#7 - Bm7 - E7 - Amaj7"
        ],
        Funk: [
            "I7 - IV7 - V7 - IV7 - I7 → A7 - D7 - E7 - D7 - A7",
            "I9 - bVII9 - IV9 - V9 - I9 → A9 - G9 - D9 - E9 - A9"
        ],
        RnB: [
            "Imaj7 - iii7 - vi7 - II7 - V7 → Amaj7 - C#m7 - F#m7 - B7 - E7"
        ],
        Latin: [
            "Imaj7 - bIII7 - ii7 - V7 - Imaj7 → Amaj7 - C7 - Bm7 - E7 - Amaj7"
        ],
        Synthwave: [
            "vi - IV - I - V → F#m - D - A - E",
            "i - VI - III - VII → F#m - D - A - E",
            "I - iii - vi - IV → A - C#m - F#m - D",
            "i - VII - VI - VII → F#m - E - D - E",
            "I - V - IV - V → A - E - D - E",
            "vi - V - IV - V → F#m - E - D - E"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Am - C - E",
            "Hirano → bVI - bVII - I → C - D - A",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Dmaj7 - E7 - C#m7 - F#m7",
            "Haru no Hi → bVImaj7 - bVII - Imaj7 → Cmaj7 - D - Amaj7",
            "Evangelion Ending → ii - V - iii - VI → Bm7 - E7 - C#m7 - F#7",
            "Natsukashii → Imaj7 - iii7 - vi7 - II7 → Amaj7 - C#m7 - F#m7 - B7",
            "J-Rock Minor Lift → iv - V - bVI - V → Am - E - F - E"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Dmaj7 - E7 - C#m7 - F#m7",
            "Imaj7 - bIII7 - ii7 - V7 → Amaj7 - C7 - Bm7 - E7",
            "I - V - vi - IV → A - E - F#m - D",
            "Imaj7 - VI7 - ii7 - V7 → Amaj7 - C#7 - Bm7 - E7"
        ],
        KPop: [
            "Imaj7 - iii7 - vi7 - IVmaj7 → Amaj7 - C#m7 - F#m7 - Dmaj7",
            "vi - IV - I - V → F#m - D - A - E",
            "I - V/vi - vi - IV → A - C#7 - F#m - D",
            "I - V - IV - V → A - E - D - E"
        ],
        AnimeBallad: [
            "vi - IV - I - V → F#m - D - A - E",
            "I - V/vi - vi - IV → A - C#7 - F#m - D",
            "IV - V - iii - vi → D - E - C#m - F#m",
            "I - iii - IV - V → A - C#m - D - E",
            "Imaj7 - iii7 - vi7 - IVmaj7 → Amaj7 - C#m7 - F#m7 - Dmaj7",
            "ii7 - V7 - Imaj7 - vi7 → Bm7 - E7 - Amaj7 - F#m7",
            "Imaj7 - vi7 - IVmaj7 - V7 → Amaj7 - F#m7 - Dmaj7 - E7"
        ]
    },
    chordFunctions: [
        { degree: "I", chord: "Amaj" },
        { degree: "ii", chord: "Bmin" },
        { degree: "iii", chord: "C#min" },
        { degree: "IV", chord: "Dmaj" },
        { degree: "V", chord: "Emaj" },
        { degree: "vi", chord: "F#min" },
        { degree: "vii°", chord: "G#dim" },
        { degree: "bIII", chord: "Cmaj" },
        { degree: "bVI", chord: "Fmaj" },
        { degree: "bVII", chord: "Gmaj" },
        { degree: "bVII9", chord: "G9" },
        { degree: "VI7", chord: "F#7" },
        { degree: "II7", chord: "B7" }
    ],
    substitutions: [
        "E7 → Bb7 (tritone)",
        "C#m → Amaj7 (relative)"
    ],
    nextChords: ["F#m", "D", "E", "C#m", "G"],
    parallelMinorChords: [
        {
            name: "Am",
            notes: ["A", "C", "E"]
        }
    ],
    circleOfFifths: {
        relativeMinor: "F# Minor",
        parallelMinor: "A Minor",
        dominantKey: "E Major",
        subdominantKey: "D Major",
        closelyRelatedKeys: ["E Major", "D Major", "F# Minor", "B Minor", "C# Minor", "G Major"],
        distantKeys: ["Bb Major", "Eb Major", "F Major"]
    },
    modes: {
        Ionian: ["A", "B", "C#", "D", "E", "F#", "G#"],
        Dorian: ["B", "C#", "D", "E", "F#", "G#", "A"],
        Phrygian: ["C#", "D", "E", "F#", "G#", "A", "B"],
        Lydian: ["D", "E", "F#", "G#", "A", "B", "C#"],
        Mixolydian: ["E", "F#", "G#", "A", "B", "C#", "D"],
        Aeolian: ["F#", "G#", "A", "B", "C#", "D", "E"],
        Locrian: ["G#", "A", "B", "C#", "D", "E", "F#"]
    },
    chordSpellingQuickRef: [
        "Amaj7 = A-C#-E-G#",
        "Am7 = A-C-E-G"
    ],
    emotionalCharacter: {
        color: "warm orange / amber",
        feelings: ["bright", "uplifting", "open", "warm"],
        commonGenres: ["Pop", "Rock", "Country", "Orchestral"]
    }
};

export default aMajor;