const bMinor = {
    scaleNotes: ["B", "C#", "D", "E", "F#", "G", "A"],
    scales: {
        NaturalMinor: ["B", "C#", "D", "E", "F#", "G", "A"],
        HarmonicMinor: ["B", "C#", "D", "E", "F#", "G", "A#"],
        MelodicMinorAscending: ["B", "C#", "D", "E", "F#", "G#", "A#"],
        MelodicMinorDescending: ["B", "A", "G", "F#", "E", "D", "C#"],
        MinorPentatonic: ["B", "D", "E", "F#", "A"],
        Blues: ["B", "D", "E", "F", "F#", "A"]
    },
    parallelMajor: "B Major",
    triads: [
        {
            type: "Minor",
            name: "Bm",
            root: ["B", "D", "F#"],
            inv1: ["D", "F#", "B"],
            inv2: ["F#", "B", "D"]
        },
        {
            type: "Major",
            name: "B",
            root: ["B", "D#", "F#"],
            inv1: ["D#", "F#", "B"],
            inv2: ["F#", "B", "D#"]
        }
    ],
    sevenths: [
        {
            name: "Bm7",
            root: ["B", "D", "F#", "A"],
            inv1: ["D", "F#", "A", "B"],
            inv2: ["F#", "A", "B", "D"],
            inv3: ["A", "B", "D", "F#"]
        },
        {
            name: "Bm(maj7)",
            root: ["B", "D", "F#", "A#"],
            inv1: ["D", "F#", "A#", "B"],
            inv2: ["F#", "A#", "B", "D"],
            inv3: ["A#", "B", "D", "F#"]
        }
    ],
    extendedChords: [
        { name: "Bm9", notes: ["B", "D", "F#", "A", "C#"] },
        { name: "Bm11", notes: ["B", "D", "F#", "A", "C#", "E"] },
        { name: "Bm13", notes: ["B", "D", "F#", "A", "C#", "E", "G#"] },
        { name: "B7b9", notes: ["B", "D#", "F#", "A", "C"] },
        { name: "B7#9", notes: ["B", "D#", "F#", "A", "D"] },
        { name: "B7#11", notes: ["B", "D#", "F#", "A", "E#"] }
    ],
    insaneChords: [
        { name: "Bm13b9#11", notes: ["B", "D", "F#", "A", "C", "E#", "G#"] },
        { name: "B7alt", notes: ["B", "D#", "F#", "A", "C", "D", "E#"] },
        { name: "Bm(maj7)#11", notes: ["B", "D", "F#", "A#", "E#"] },
        { name: "B7#5#9", notes: ["B", "D#", "G", "A", "D"] },
        { name: "B7b5b9", notes: ["B", "D#", "F", "A", "C"] },
        { name: "Bdim7add13", notes: ["B", "D", "F", "G#", "A#", "C#", "E", "G#"] }
    ],
    commonProgressions: {
        Pop: [
            "i - VI - III - VII → Bm - G - D - A",
            "i - iv - v - i → Bm - Em - F#m - Bm"
        ],
        Jazz: [
            "iiø7 - V7 - i → C#m7b5 - F#7 - Bm",
            "i - VI7 - iiø7 - V7 → Bm - G7 - C#m7b5 - F#7",
            "iii7b5 - VI7 - iiø7 - V7 - i → D#m7b5 - G#7 - C#m7b5 - F#7 - Bm"
        ],
        Funk: [
            "i7 - iv7 - V7 - iv7 - i7 → Bm7 - Em7 - F#7 - Em7 - Bm7",
            "i9 - bVII9 - iv9 - V9 - i9 → Bm9 - A9 - Em9 - F#9 - Bm9"
        ],
        RnB: [
            "i(maj7) - iii7 - vi7 - II7 - V7 → Bm(maj7) - D#m7 - G#m7 - C#7 - F#7"
        ],
        Latin: [
            "i(maj7) - bIII7 - iiø7 - V7 - i(maj7) → Bm(maj7) - D7 - C#m7b5 - F#7 - Bm(maj7)"
        ],
        Synthwave: [
            "i - VI - III - VII → Bm - G - D - A",
            "i - VII - VI - VII → Bm - A - G - A",
            "i - v - iv - VII → Bm - F#m - Em - A"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Em - G - F#",
            "Hirano → bVI - bVII - i → G - A - Bm",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Emaj7 - F#7 - D#m7 - G#m7",
            "Haru no Hi → bVImaj7 - bVII - i(maj7) → Gmaj7 - A - Bm(maj7)",
            "Evangelion Ending → ii - V - iii - VI → C#m7b5 - F#7 - D#m7 - G#7",
            "Natsukashii → i(maj7) - iii7 - vi7 - II7 → Bm(maj7) - D#m7 - G#m7 - C#7",
            "J-Rock Minor Lift → iv - V - bVI - V → Em - F# - G - F#"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Emaj7 - F#7 - D#m7 - G#m7",
            "i(maj7) - bIII7 - iiø7 - V7 → Bm(maj7) - D7 - C#m7b5 - F#7",
            "i - v - VI - VII → Bm - F#m - G - A"
        ],
        KPop: [
            "i(maj7) - iii7 - vi7 - IVmaj7 → Bm(maj7) - D#m7 - G#m7 - Emaj7",
            "vi - IV - i - V → G#m - E - Bm - F#",
            "i - V/vi - vi - IV → Bm - F#7 - G#m - E",
            "i - V - IV - V → Bm - F# - E - F#"
        ],
        AnimeBallad: [
            "vi - IV - i - V → G#m - E - Bm - F#",
            "i - V/vi - vi - IV → Bm - F#7 - G#m - E",
            "IV - V - iii - vi → E - F# - D#m - G#m",
            "i - iii - IV - V → Bm - D#m - E - F#",
            "i(maj7) - iii7 - vi7 - IVmaj7 → Bm(maj7) - D#m7 - G#m7 - Emaj7",
            "iiø7 - V7 - i(maj7) - vi7 → C#m7b5 - F#7 - Bm(maj7) - G#m7",
            "i(maj7) - vi7 - IVmaj7 - V7 → Bm(maj7) - G#m7 - Emaj7 - F#7"
        ]
    },
    chordFunctions: [
        { degree: "i", chord: "Bm" },
        { degree: "ii°", chord: "C#dim" },
        { degree: "III", chord: "Dmaj" },
        { degree: "iv", chord: "Em" },
        { degree: "v", chord: "F#m" },
        { degree: "VI", chord: "Gmaj" },
        { degree: "VII", chord: "Amaj" },
        { degree: "bIII", chord: "Dmaj" },
        { degree: "bVI", chord: "Gmaj" },
        { degree: "bVII", chord: "Amaj" },
        { degree: "bVII9", chord: "A9" },
        { degree: "VI7", chord: "G7" },
        { degree: "II7", chord: "C#7" }
    ],
    substitutions: [
        "F#7 → C7 (tritone)",
        "D → Bm(maj7) (relative)"
    ],
    nextChords: ["Em", "G", "A", "D", "F#m"],
    parallelMajorChords: [
        {
            name: "B",
            notes: ["B", "D#", "F#"]
        }
    ],
    circleOfFifths: {
        relativeMajor: "D Major",
        parallelMajor: "B Major",
        dominantKey: "F# Minor",
        subdominantKey: "E Minor",
        closelyRelatedKeys: ["D Major", "F# Minor", "G Major", "A Major", "E Minor"],
        distantKeys: ["C Major", "Ab Major", "Eb Major"]
    },
    modes: {
        Aeolian: ["B", "C#", "D", "E", "F#", "G", "A"],
        Dorian: ["C#", "D", "E", "F#", "G#", "A", "B"],
        Phrygian: ["D", "E", "F#", "G", "A", "B", "C#"],
        Lydian: ["E", "F#", "G#", "A", "B", "C#", "D#"],
        Mixolydian: ["F#", "G#", "A", "B", "C#", "D", "E"],
        Ionian: ["D", "E", "F#", "G", "A", "B", "C#"],
        Locrian: ["A", "B", "C#", "D", "E", "F#", "G"]
    },
    chordSpellingQuickRef: [
        "Bm7 = B-D-F#-A",
        "Bm(maj7) = B-D-F#-A#"
    ],
    emotionalCharacter: {
        color: "midnight blue / deep navy",
        feelings: ["dark", "intense", "emotive", "melancholic"],
        commonGenres: ["Rock", "Pop", "Classical", "Orchestral", "Film Score"]
    }
};

export default bMinor;