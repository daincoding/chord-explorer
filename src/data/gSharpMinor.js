const gSharpMinor = {
    scaleNotes: ["G#", "A#", "B", "C#", "D#", "E", "F#"],
    scales: {
        NaturalMinor: ["G#", "A#", "B", "C#", "D#", "E", "F#"],
        HarmonicMinor: ["G#", "A#", "B", "C#", "D#", "E", "Fx"],
        MelodicMinorAscending: ["G#", "A#", "B", "C#", "D#", "E#", "Fx"],
        MelodicMinorDescending: ["G#", "F#", "E", "D#", "C#", "B", "A#"],
        MinorPentatonic: ["G#", "B", "C#", "D#", "F#"],
        Blues: ["G#", "B", "C#", "D", "D#", "F#"]
    },
    parallelMajor: "G# Major",
    triads: [
        {
            type: "Minor",
            name: "G#m",
            root: ["G#", "B", "D#"],
            inv1: ["B", "D#", "G#"],
            inv2: ["D#", "G#", "B"]
        },
        {
            type: "Major",
            name: "G#",
            root: ["G#", "B#", "D#"],
            inv1: ["B#", "D#", "G#"],
            inv2: ["D#", "G#", "B#"]
        }
    ],
    sevenths: [
        {
            name: "G#m7",
            root: ["G#", "B", "D#", "F#"],
            inv1: ["B", "D#", "F#", "G#"],
            inv2: ["D#", "F#", "G#", "B"],
            inv3: ["F#", "G#", "B", "D#"]
        },
        {
            name: "G#m(maj7)",
            root: ["G#", "B", "D#", "Fx"],
            inv1: ["B", "D#", "Fx", "G#"],
            inv2: ["D#", "Fx", "G#", "B"],
            inv3: ["Fx", "G#", "B", "D#"]
        }
    ],
    extendedChords: [
        { name: "G#m9", notes: ["G#", "B", "D#", "F#", "A#"] },
        { name: "G#m11", notes: ["G#", "B", "D#", "F#", "A#", "C#"] },
        { name: "G#m13", notes: ["G#", "B", "D#", "F#", "A#", "C#", "E#"] },
        { name: "G#7b9", notes: ["G#", "B#", "D#", "F#", "A"] },
        { name: "G#7#9", notes: ["G#", "B#", "D#", "F#", "B"] },
        { name: "G#7#11", notes: ["G#", "B#", "D#", "F#", "D##"] }
    ],
    insaneChords: [
        { name: "G#m13b9#11", notes: ["G#", "B", "D#", "F#", "A", "D##", "E#"] },
        { name: "G#7alt", notes: ["G#", "B#", "D#", "F#", "A", "B", "D##"] },
        { name: "G#m(maj7)#11", notes: ["G#", "B", "D#", "Fx", "D##"] },
        { name: "G#7#5#9", notes: ["G#", "B#", "E", "F#", "B"] },
        { name: "G#7b5b9", notes: ["G#", "B#", "D", "F#", "A"] },
        { name: "G#dim7add13", notes: ["G#", "B", "D", "E#", "Fx", "A#", "C#", "E#"] }
    ],
    commonProgressions: {
        Pop: [
            "i - VI - III - VII → G#m - E - B - F#",
            "i - iv - v - i → G#m - C#m - D#m - G#m"
        ],
        Jazz: [
            "iiø7 - V7 - i → A#m7b5 - D#7 - G#m",
            "i - VI7 - iiø7 - V7 → G#m - E7 - A#m7b5 - D#7",
            "iii7b5 - VI7 - iiø7 - V7 - i → Cm7b5 - F7 - A#m7b5 - D#7 - G#m"
        ],
        Funk: [
            "i7 - iv7 - V7 - iv7 - i7 → G#m7 - C#m7 - D#7 - C#m7 - G#m7",
            "i9 - bVII9 - iv9 - V9 - i9 → G#m9 - F#9 - C#m9 - D#9 - G#m9"
        ],
        RnB: [
            "i(maj7) - iii7 - vi7 - II7 - V7 → G#m(maj7) - B#m7 - E#m7 - A#7 - D#7"
        ],
        Latin: [
            "i(maj7) - bIII7 - iiø7 - V7 - i(maj7) → G#m(maj7) - B7 - A#m7b5 - D#7 - G#m(maj7)"
        ],
        Synthwave: [
            "i - VI - III - VII → G#m - E - B - F#",
            "i - VII - VI - VII → G#m - F# - E - F#",
            "i - v - iv - VII → G#m - D#m - C#m - F#"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → C#m - E - D#",
            "Hirano → bVI - bVII - i → E - F# - G#m",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → C#maj7 - D#7 - B#m7 - E#m7",
            "Haru no Hi → bVImaj7 - bVII - i(maj7) → Emaj7 - F# - G#m(maj7)",
            "Evangelion Ending → ii - V - iii - VI → A#m7b5 - D#7 - B#m7 - E#7",
            "Natsukashii → i(maj7) - iii7 - vi7 - II7 → G#m(maj7) - B#m7 - E#m7 - A#7",
            "J-Rock Minor Lift → iv - V - bVI - V → C#m - D# - E - D#"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → C#maj7 - D#7 - B#m7 - E#m7",
            "i(maj7) - bIII7 - iiø7 - V7 → G#m(maj7) - B7 - A#m7b5 - D#7",
            "i - v - VI - VII → G#m - D#m - E - F#"
        ],
        KPop: [
            "i(maj7) - iii7 - vi7 - IVmaj7 → G#m(maj7) - B#m7 - E#m7 - C#maj7",
            "vi - IV - i - V → E#m - C# - G#m - D#",
            "i - V/vi - vi - IV → G#m - D#7 - E#m - C#",
            "i - V - IV - V → G#m - D# - C# - D#"
        ],
        AnimeBallad: [
            "vi - IV - i - V → E#m - C# - G#m - D#",
            "i - V/vi - vi - IV → G#m - D#7 - E#m - C#",
            "IV - V - iii - vi → C# - D# - B#m - E#m",
            "i - iii - IV - V → G#m - B#m - C# - D#",
            "i(maj7) - iii7 - vi7 - IVmaj7 → G#m(maj7) - B#m7 - E#m7 - C#maj7",
            "iiø7 - V7 - i(maj7) - vi7 → A#m7b5 - D#7 - G#m(maj7) - E#m7",
            "i(maj7) - vi7 - IVmaj7 - V7 → G#m(maj7) - E#m7 - C#maj7 - D#7"
        ]
    },
    chordFunctions: [
        { degree: "i", chord: "G#m" },
        { degree: "ii°", chord: "A#dim" },
        { degree: "III", chord: "Bmaj" },
        { degree: "iv", chord: "C#m" },
        { degree: "v", chord: "D#m" },
        { degree: "VI", chord: "Emaj" },
        { degree: "VII", chord: "F#maj" },
        { degree: "bIII", chord: "Bmaj" },
        { degree: "bVI", chord: "Emaj" },
        { degree: "bVII", chord: "F#maj" },
        { degree: "bVII9", chord: "F#9" },
        { degree: "VI7", chord: "E7" },
        { degree: "II7", chord: "A#7" }
    ],
    substitutions: [
        "D#7 → A7 (tritone)",
        "B → G#m(maj7) (relative)"
    ],
    nextChords: ["C#m", "E", "F#", "B", "D#m"],
    parallelMajorChords: [
        {
            name: "G#",
            notes: ["G#", "B#", "D#"]
        }
    ],
    circleOfFifths: {
        relativeMajor: "B Major",
        parallelMajor: "G# Major",
        dominantKey: "D# Minor",
        subdominantKey: "C# Minor",
        closelyRelatedKeys: ["B Major", "D# Minor", "E Major", "F# Major", "C# Minor"],
        distantKeys: ["C Major", "Ab Major", "Eb Major"]
    },
    modes: {
        Aeolian: ["G#", "A#", "B", "C#", "D#", "E", "F#"],
        Dorian: ["A#", "B", "C#", "D#", "E#", "F#", "G#"],
        Phrygian: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
        Lydian: ["C#", "D#", "E#", "F#", "G#", "A#", "B#"],
        Mixolydian: ["D#", "E#", "F#", "G#", "A#", "B", "C#"],
        Ionian: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
        Locrian: ["F#", "G#", "A#", "B", "C#", "D#", "E"]
    },
    chordSpellingQuickRef: [
        "G#m7 = G#-B-D#-F#",
        "G#m(maj7) = G#-B-D#-Fx"
    ],
    emotionalCharacter: {
        color: "deep teal / sea green",
        feelings: ["dark", "exotic", "bittersweet", "dreamy"],
        commonGenres: ["Electronic", "Rock", "Classical", "Film Score", "Pop"]
    }
};

export default gSharpMinor;