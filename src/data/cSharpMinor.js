const cSharpMinor = {
    scaleNotes: ["C#", "D#", "E", "F#", "G#", "A", "B"],
    scales: {
        NaturalMinor: ["C#", "D#", "E", "F#", "G#", "A", "B"],
        HarmonicMinor: ["C#", "D#", "E", "F#", "G#", "A", "B#"],
        MelodicMinorAscending: ["C#", "D#", "E", "F#", "G#", "A#", "B#"],
        MelodicMinorDescending: ["C#", "B", "A", "G#", "F#", "E", "D#"],
        MinorPentatonic: ["C#", "E", "F#", "G#", "B"],
        Blues: ["C#", "E", "F#", "G", "G#", "B"]
    },
    parallelMajor: "C# Major",
    triads: [
        {
            type: "Minor",
            name: "C#m",
            root: ["C#", "E", "G#"],
            inv1: ["E", "G#", "C#"],
            inv2: ["G#", "C#", "E"]
        },
        {
            type: "Major",
            name: "C#",
            root: ["C#", "E#", "G#"],
            inv1: ["E#", "G#", "C#"],
            inv2: ["G#", "C#", "E#"]
        }
    ],
    sevenths: [
        {
            name: "C#m7",
            root: ["C#", "E", "G#", "B"],
            inv1: ["E", "G#", "B", "C#"],
            inv2: ["G#", "B", "C#", "E"],
            inv3: ["B", "C#", "E", "G#"]
        },
        {
            name: "C#m(maj7)",
            root: ["C#", "E", "G#", "B#"],
            inv1: ["E", "G#", "B#", "C#"],
            inv2: ["G#", "B#", "C#", "E"],
            inv3: ["B#", "C#", "E", "G#"]
        }
    ],
    extendedChords: [
        { name: "C#m9", notes: ["C#", "E", "G#", "B", "D#"] },
        { name: "C#m11", notes: ["C#", "E", "G#", "B", "D#", "F#"] },
        { name: "C#m13", notes: ["C#", "E", "G#", "B", "D#", "F#", "A#"] },
        { name: "C#7b9", notes: ["C#", "E#", "G#", "B", "D"] },
        { name: "C#7#9", notes: ["C#", "E#", "G#", "B", "E"] },
        { name: "C#7#11", notes: ["C#", "E#", "G#", "B", "F##"] }
    ],
    insaneChords: [
        { name: "C#m13b9#11", notes: ["C#", "E", "G#", "B", "D", "F##", "A#"] },
        { name: "C#7alt", notes: ["C#", "E#", "G#", "B", "D", "E", "F##"] },
        { name: "C#m(maj7)#11", notes: ["C#", "E", "G#", "B#", "F##"] },
        { name: "C#7#5#9", notes: ["C#", "E#", "A", "B", "E"] },
        { name: "C#7b5b9", notes: ["C#", "E#", "G", "B", "D"] },
        { name: "C#dim7add13", notes: ["C#", "E", "G", "A#", "B#", "D#", "F#", "A#"] }
    ],
    commonProgressions: {
        Pop: [
            "i - VI - III - VII → C#m - A - E - B",
            "i - iv - v - i → C#m - F#m - G#m - C#m"
        ],
        Jazz: [
            "iiø7 - V7 - i → D#m7b5 - G#7 - C#m",
            "i - VI7 - iiø7 - V7 → C#m - A7 - D#m7b5 - G#7",
            "iii7b5 - VI7 - iiø7 - V7 - i → Fm7b5 - Bb7 - D#m7b5 - G#7 - C#m"
        ],
        Funk: [
            "i7 - iv7 - V7 - iv7 - i7 → C#m7 - F#m7 - G#7 - F#m7 - C#m7",
            "i9 - bVII9 - iv9 - V9 - i9 → C#m9 - B9 - F#m9 - G#9 - C#m9"
        ],
        RnB: [
            "i(maj7) - iii7 - vi7 - II7 - V7 → C#m(maj7) - Fm7 - Bm7 - E7 - G#7"
        ],
        Latin: [
            "i(maj7) - bIII7 - iiø7 - V7 - i(maj7) → C#m(maj7) - E7 - D#m7b5 - G#7 - C#m(maj7)"
        ],
        Synthwave: [
            "i - VI - III - VII → C#m - A - E - B",
            "i - VII - VI - VII → C#m - B - A - B",
            "i - v - iv - VII → C#m - G#m - F#m - B"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → F#m - A - G#",
            "Hirano → bVI - bVII - i → A - B - C#m",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → F#maj7 - G#7 - E#m7 - A#m7",
            "Haru no Hi → bVImaj7 - bVII - i(maj7) → Amaj7 - B - C#m(maj7)",
            "Evangelion Ending → ii - V - iii - VI → D#m7b5 - G#7 - E#m7 - A#7",
            "Natsukashii → i(maj7) - iii7 - vi7 - II7 → C#m(maj7) - E#m7 - A#m7 - D#7",
            "J-Rock Minor Lift → iv - V - bVI - V → F#m - G# - A - G#"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → F#maj7 - G#7 - E#m7 - A#m7",
            "i(maj7) - bIII7 - iiø7 - V7 → C#m(maj7) - E7 - D#m7b5 - G#7",
            "i - v - VI - VII → C#m - G#m - A - B"
        ],
        KPop: [
            "i(maj7) - iii7 - vi7 - IVmaj7 → C#m(maj7) - E#m7 - A#m7 - F#maj7",
            "vi - IV - i - V → A#m - F# - C#m - G#",
            "i - V/vi - vi - IV → C#m - G#7 - A#m - F#",
            "i - V - IV - V → C#m - G# - F# - G#"
        ],
        AnimeBallad: [
            "vi - IV - i - V → A#m - F# - C#m - G#",
            "i - V/vi - vi - IV → C#m - G#7 - A#m - F#",
            "IV - V - iii - vi → F# - G# - E#m - A#m",
            "i - iii - IV - V → C#m - E#m - F# - G#",
            "i(maj7) - iii7 - vi7 - IVmaj7 → C#m(maj7) - E#m7 - A#m7 - F#maj7",
            "iiø7 - V7 - i(maj7) - vi7 → D#m7b5 - G#7 - C#m(maj7) - A#m7",
            "i(maj7) - vi7 - IVmaj7 - V7 → C#m(maj7) - A#m7 - F#maj7 - G#7"
        ]
    },
    chordFunctions: [
        { degree: "i", chord: "C#m" },
        { degree: "ii°", chord: "D#dim" },
        { degree: "III", chord: "Emaj" },
        { degree: "iv", chord: "F#m" },
        { degree: "v", chord: "G#m" },
        { degree: "VI", chord: "Amaj" },
        { degree: "VII", chord: "Bmaj" },
        { degree: "bIII", chord: "Emaj" },
        { degree: "bVI", chord: "Amaj" },
        { degree: "bVII", chord: "Bmaj" },
        { degree: "bVII9", chord: "B9" },
        { degree: "VI7", chord: "A7" },
        { degree: "II7", chord: "D#7" }
    ],
    substitutions: [
        "G#7 → D7 (tritone)",
        "E → C#m(maj7) (relative)"
    ],
    nextChords: ["F#m", "A", "B", "E", "G#m"],
    parallelMajorChords: [
        {
            name: "C#",
            notes: ["C#", "E#", "G#"]
        }
    ],
    circleOfFifths: {
        relativeMajor: "E Major",
        parallelMajor: "C# Major",
        dominantKey: "G# Minor",
        subdominantKey: "F# Minor",
        closelyRelatedKeys: ["E Major", "G# Minor", "A Major", "B Major", "F# Minor"],
        distantKeys: ["D Major", "Bb Major", "Eb Major"]
    },
    modes: {
        Aeolian: ["C#", "D#", "E", "F#", "G#", "A", "B"],
        Dorian: ["D#", "E", "F#", "G#", "A#", "B", "C#"],
        Phrygian: ["E", "F#", "G#", "A", "B", "C#", "D#"],
        Lydian: ["F#", "G#", "A#", "B", "C#", "D#", "E#"],
        Mixolydian: ["G#", "A#", "B", "C#", "D#", "E", "F#"],
        Ionian: ["E", "F#", "G#", "A", "B", "C#", "D#"],
        Locrian: ["B", "C#", "D#", "E", "F#", "G#", "A"]
    },
    chordSpellingQuickRef: [
        "C#m7 = C#-E-G#-B",
        "C#m(maj7) = C#-E-G#-B#"
    ],
    emotionalCharacter: {
        color: "cool steel blue / pale silver",
        feelings: ["dramatic", "mysterious", "sophisticated", "intense"],
        commonGenres: ["Rock", "Classical", "Pop", "Film Score", "Electronic"]
    }
};

export default cSharpMinor;