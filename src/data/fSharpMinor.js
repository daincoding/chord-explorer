const fSharpMinor = {
    scaleNotes: ["F#", "G#", "A", "B", "C#", "D", "E"],
    scales: {
        NaturalMinor: ["F#", "G#", "A", "B", "C#", "D", "E"],
        HarmonicMinor: ["F#", "G#", "A", "B", "C#", "D", "E#"],
        MelodicMinorAscending: ["F#", "G#", "A", "B", "C#", "D#", "E#"],
        MelodicMinorDescending: ["F#", "E", "D", "C#", "B", "A", "G#"],
        MinorPentatonic: ["F#", "A", "B", "C#", "E"],
        Blues: ["F#", "A", "B", "C", "C#", "E"]
    },
    parallelMajor: "F# Major",
    triads: [
        {
            type: "Minor",
            name: "F#m",
            root: ["F#", "A", "C#"],
            inv1: ["A", "C#", "F#"],
            inv2: ["C#", "F#", "A"]
        },
        {
            type: "Major",
            name: "F#",
            root: ["F#", "A#", "C#"],
            inv1: ["A#", "C#", "F#"],
            inv2: ["C#", "F#", "A#"]
        }
    ],
    sevenths: [
        {
            name: "F#m7",
            root: ["F#", "A", "C#", "E"],
            inv1: ["A", "C#", "E", "F#"],
            inv2: ["C#", "E", "F#", "A"],
            inv3: ["E", "F#", "A", "C#"]
        },
        {
            name: "F#m(maj7)",
            root: ["F#", "A", "C#", "E#"],
            inv1: ["A", "C#", "E#", "F#"],
            inv2: ["C#", "E#", "F#", "A"],
            inv3: ["E#", "F#", "A", "C#"]
        }
    ],
    extendedChords: [
        { name: "F#m9", notes: ["F#", "A", "C#", "E", "G#"] },
        { name: "F#m11", notes: ["F#", "A", "C#", "E", "G#", "B"] },
        { name: "F#m13", notes: ["F#", "A", "C#", "E", "G#", "B", "D#"] },
        { name: "F#7b9", notes: ["F#", "A#", "C#", "E", "G"] },
        { name: "F#7#9", notes: ["F#", "A#", "C#", "E", "A"] },
        { name: "F#7#11", notes: ["F#", "A#", "C#", "E", "B#"] }
    ],
    insaneChords: [
        { name: "F#m13b9#11", notes: ["F#", "A", "C#", "E", "G", "B#", "D#"] },
        { name: "F#7alt", notes: ["F#", "A#", "C#", "E", "G", "A", "B#"] },
        { name: "F#m(maj7)#11", notes: ["F#", "A", "C#", "E#", "B#"] },
        { name: "F#7#5#9", notes: ["F#", "A#", "D", "E", "A"] },
        { name: "F#7b5b9", notes: ["F#", "A#", "C", "E", "G"] },
        { name: "F#dim7add13", notes: ["F#", "A", "C", "D#", "E#", "G#", "B", "D#"] }
    ],
    commonProgressions: {
        Pop: [
            "i - VI - III - VII → F#m - D - A - E",
            "i - iv - v - i → F#m - Bm - C#m - F#m"
        ],
        Jazz: [
            "iiø7 - V7 - i → G#m7b5 - C#7 - F#m",
            "i - VI7 - iiø7 - V7 → F#m - D7 - G#m7b5 - C#7",
            "iii7b5 - VI7 - iiø7 - V7 - i → A#m7b5 - D#7 - G#m7b5 - C#7 - F#m"
        ],
        Funk: [
            "i7 - iv7 - V7 - iv7 - i7 → F#m7 - Bm7 - C#7 - Bm7 - F#m7",
            "i9 - bVII9 - iv9 - V9 - i9 → F#m9 - E9 - Bm9 - C#9 - F#m9"
        ],
        RnB: [
            "i(maj7) - iii7 - vi7 - II7 - V7 → F#m(maj7) - A#m7 - D#m7 - G#7 - C#7"
        ],
        Latin: [
            "i(maj7) - bIII7 - iiø7 - V7 - i(maj7) → F#m(maj7) - A7 - G#m7b5 - C#7 - F#m(maj7)"
        ],
        Synthwave: [
            "i - VI - III - VII → F#m - D - A - E",
            "i - VII - VI - VII → F#m - E - D - E",
            "i - v - iv - VII → F#m - C#m - Bm - E"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Bm - D - C#",
            "Hirano → bVI - bVII - i → D - E - F#m",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Bmaj7 - C#7 - A#m7 - D#m7",
            "Haru no Hi → bVImaj7 - bVII - i(maj7) → Dmaj7 - E - F#m(maj7)",
            "Evangelion Ending → ii - V - iii - VI → G#m7b5 - C#7 - A#m7 - D#7",
            "Natsukashii → i(maj7) - iii7 - vi7 - II7 → F#m(maj7) - A#m7 - D#m7 - G#7",
            "J-Rock Minor Lift → iv - V - bVI - V → Bm - C# - D - C#"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Bmaj7 - C#7 - A#m7 - D#m7",
            "i(maj7) - bIII7 - iiø7 - V7 → F#m(maj7) - A7 - G#m7b5 - C#7",
            "i - v - VI - VII → F#m - C#m - D - E"
        ],
        KPop: [
            "i(maj7) - iii7 - vi7 - IVmaj7 → F#m(maj7) - A#m7 - D#m7 - Bmaj7",
            "vi - IV - i - V → D#m - B - F#m - C#",
            "i - V/vi - vi - IV → F#m - C#7 - D#m - B",
            "i - V - IV - V → F#m - C# - B - C#"
        ],
        AnimeBallad: [
            "vi - IV - i - V → D#m - B - F#m - C#",
            "i - V/vi - vi - IV → F#m - C#7 - D#m - B",
            "IV - V - iii - vi → B - C# - A#m - D#m",
            "i - iii - IV - V → F#m - A#m - B - C#",
            "i(maj7) - iii7 - vi7 - IVmaj7 → F#m(maj7) - A#m7 - D#m7 - Bmaj7",
            "iiø7 - V7 - i(maj7) - vi7 → G#m7b5 - C#7 - F#m(maj7) - D#m7",
            "i(maj7) - vi7 - IVmaj7 - V7 → F#m(maj7) - D#m7 - Bmaj7 - C#7"
        ]
    },
    chordFunctions: [
        { degree: "i", chord: "F#m" },
        { degree: "ii°", chord: "G#dim" },
        { degree: "III", chord: "Amaj" },
        { degree: "iv", chord: "Bm" },
        { degree: "v", chord: "C#m" },
        { degree: "VI", chord: "Dmaj" },
        { degree: "VII", chord: "Emaj" },
        { degree: "bIII", chord: "Amaj" },
        { degree: "bVI", chord: "Dmaj" },
        { degree: "bVII", chord: "Emaj" },
        { degree: "bVII9", chord: "E9" },
        { degree: "VI7", chord: "D7" },
        { degree: "II7", chord: "G#7" }
    ],
    substitutions: [
        "C#7 → G7 (tritone)",
        "A → F#m(maj7) (relative)"
    ],
    nextChords: ["Bm", "D", "E", "A", "C#m"],
    parallelMajorChords: [
        {
            name: "F#",
            notes: ["F#", "A#", "C#"]
        }
    ],
    circleOfFifths: {
        relativeMajor: "A Major",
        parallelMajor: "F# Major",
        dominantKey: "C# Minor",
        subdominantKey: "B Minor",
        closelyRelatedKeys: ["A Major", "C# Minor", "D Major", "B Minor", "E Major"],
        distantKeys: ["C Major", "Ab Major", "Eb Major"]
    },
    modes: {
        Aeolian: ["F#", "G#", "A", "B", "C#", "D", "E"],
        Dorian: ["G#", "A", "B", "C#", "D#", "E", "F#"],
        Phrygian: ["A", "B", "C#", "D", "E", "F#", "G#"],
        Lydian: ["B", "C#", "D#", "E", "F#", "G#", "A#"],
        Mixolydian: ["C#", "D#", "E", "F#", "G#", "A", "B"],
        Ionian: ["A", "B", "C#", "D", "E", "F#", "G#"],
        Locrian: ["E", "F#", "G#", "A", "B", "C#", "D"]
    },
    chordSpellingQuickRef: [
        "F#m7 = F#-A-C#-E",
        "F#m(maj7) = F#-A-C#-E#"
    ],
    emotionalCharacter: {
        color: "cool turquoise / dark teal",
        feelings: ["mysterious", "urgent", "bittersweet", "introspective"],
        commonGenres: ["Rock", "Classical", "Pop", "Film Score", "Electronic"]
    }
};

export default fSharpMinor;