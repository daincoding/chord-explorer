const eMinor = {
    scaleNotes: ["E", "F#", "G", "A", "B", "C", "D"],
    scales: {
        NaturalMinor: ["E", "F#", "G", "A", "B", "C", "D"],
        HarmonicMinor: ["E", "F#", "G", "A", "B", "C", "D#"],
        MelodicMinorAscending: ["E", "F#", "G", "A", "B", "C#", "D#"],
        MelodicMinorDescending: ["E", "D", "C", "B", "A", "G", "F#"],
        MinorPentatonic: ["E", "G", "A", "B", "D"],
        Blues: ["E", "G", "A", "Bb", "B", "D"]
    },
    parallelMajor: "E Major",
    triads: [
        {
            type: "Minor",
            name: "Em",
            root: ["E", "G", "B"],
            inv1: ["G", "B", "E"],
            inv2: ["B", "E", "G"]
        },
        {
            type: "Major",
            name: "E",
            root: ["E", "G#", "B"],
            inv1: ["G#", "B", "E"],
            inv2: ["B", "E", "G#"]
        }
    ],
    sevenths: [
        {
            name: "Em7",
            root: ["E", "G", "B", "D"],
            inv1: ["G", "B", "D", "E"],
            inv2: ["B", "D", "E", "G"],
            inv3: ["D", "E", "G", "B"]
        },
        {
            name: "Em(maj7)",
            root: ["E", "G", "B", "D#"],
            inv1: ["G", "B", "D#", "E"],
            inv2: ["B", "D#", "E", "G"],
            inv3: ["D#", "E", "G", "B"]
        }
    ],
    extendedChords: [
        { name: "Em9", notes: ["E", "G", "B", "D", "F#"] },
        { name: "Em11", notes: ["E", "G", "B", "D", "F#", "A"] },
        { name: "Em13", notes: ["E", "G", "B", "D", "F#", "A", "C#"] },
        { name: "E7b9", notes: ["E", "G#", "B", "D", "F"] },
        { name: "E7#9", notes: ["E", "G#", "B", "D", "G"] },
        { name: "E7#11", notes: ["E", "G#", "B", "D", "A#"] }
    ],
    insaneChords: [
        { name: "Em13b9#11", notes: ["E", "G", "B", "D", "F", "A#", "C#"] },
        { name: "E7alt", notes: ["E", "G#", "B", "D", "F", "G", "A#"] },
        { name: "Em(maj7)#11", notes: ["E", "G", "B", "D#", "A#"] },
        { name: "E7#5#9", notes: ["E", "G#", "C", "D", "G"] },
        { name: "E7b5b9", notes: ["E", "G#", "Bb", "D", "F"] },
        { name: "Edim7add13", notes: ["E", "G", "Bb", "C#", "D#", "F#", "A", "C#"] }
    ],
    commonProgressions: {
        Pop: [
            "i - VI - III - VII → Em - C - G - D",
            "i - iv - v - i → Em - Am - Bm - Em"
        ],
        Jazz: [
            "iiø7 - V7 - i → F#m7b5 - B7 - Em",
            "i - VI7 - iiø7 - V7 → Em - C7 - F#m7b5 - B7",
            "iii7b5 - VI7 - iiø7 - V7 - i → G#m7b5 - C7 - F#m7b5 - B7 - Em"
        ],
        Funk: [
            "i7 - iv7 - V7 - iv7 - i7 → Em7 - Am7 - B7 - Am7 - Em7",
            "i9 - bVII9 - iv9 - V9 - i9 → Em9 - D9 - Am9 - B9 - Em9"
        ],
        RnB: [
            "i(maj7) - iii7 - vi7 - II7 - V7 → Em(maj7) - G#m7 - C#m7 - F#7 - B7"
        ],
        Latin: [
            "i(maj7) - bIII7 - iiø7 - V7 - i(maj7) → Em(maj7) - G7 - F#m7b5 - B7 - Em(maj7)"
        ],
        Synthwave: [
            "i - VI - III - VII → Em - C - G - D",
            "i - VII - VI - VII → Em - D - C - D",
            "i - v - iv - VII → Em - Bm - Am - D"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Am - C - B",
            "Hirano → bVI - bVII - i → C - D - Em",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Amaj7 - B7 - G#m7 - C#m7",
            "Haru no Hi → bVImaj7 - bVII - i(maj7) → Cmaj7 - D - Em(maj7)",
            "Evangelion Ending → ii - V - iii - VI → F#m7b5 - B7 - G#m7 - C#7",
            "Natsukashii → i(maj7) - iii7 - vi7 - II7 → Em(maj7) - G#m7 - C#m7 - F#7",
            "J-Rock Minor Lift → iv - V - bVI - V → Am - B - C - B"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Amaj7 - B7 - G#m7 - C#m7",
            "i(maj7) - bIII7 - iiø7 - V7 → Em(maj7) - G7 - F#m7b5 - B7",
            "i - v - VI - VII → Em - Bm - C - D"
        ],
        KPop: [
            "i(maj7) - iii7 - vi7 - IVmaj7 → Em(maj7) - G#m7 - C#m7 - Amaj7",
            "vi - IV - i - V → C#m - A - Em - B",
            "i - V/vi - vi - IV → Em - B7 - C#m - A",
            "i - V - IV - V → Em - B - A - B"
        ],
        AnimeBallad: [
            "vi - IV - i - V → C#m - A - Em - B",
            "i - V/vi - vi - IV → Em - B7 - C#m - A",
            "IV - V - iii - vi → A - B - G#m - C#m",
            "i - iii - IV - V → Em - G#m - A - B",
            "i(maj7) - iii7 - vi7 - IVmaj7 → Em(maj7) - G#m7 - C#m7 - Amaj7",
            "iiø7 - V7 - i(maj7) - vi7 → F#m7b5 - B7 - Em(maj7) - C#m7",
            "i(maj7) - vi7 - IVmaj7 - V7 → Em(maj7) - C#m7 - Amaj7 - B7"
        ]
    },
    chordFunctions: [
        { degree: "i", chord: "Em" },
        { degree: "ii°", chord: "F#dim" },
        { degree: "III", chord: "Gmaj" },
        { degree: "iv", chord: "Am" },
        { degree: "v", chord: "Bm" },
        { degree: "VI", chord: "Cmaj" },
        { degree: "VII", chord: "Dmaj" },
        { degree: "bIII", chord: "Gmaj" },
        { degree: "bVI", chord: "Cmaj" },
        { degree: "bVII", chord: "Dmaj" },
        { degree: "bVII9", chord: "D9" },
        { degree: "VI7", chord: "C7" },
        { degree: "II7", chord: "F#7" }
    ],
    substitutions: [
        "B7 → F7 (tritone)",
        "G → Em(maj7) (relative)"
    ],
    nextChords: ["Am", "C", "D", "G", "Bm"],
    parallelMajorChords: [
        {
            name: "E",
            notes: ["E", "G#", "B"]
        }
    ],
    circleOfFifths: {
        relativeMajor: "G Major",
        parallelMajor: "E Major",
        dominantKey: "B Minor",
        subdominantKey: "A Minor",
        closelyRelatedKeys: ["G Major", "B Minor", "A Minor", "D Major", "C Major"],
        distantKeys: ["Bb Major", "Eb Major", "Ab Major"]
    },
    modes: {
        Aeolian: ["E", "F#", "G", "A", "B", "C", "D"],
        Dorian: ["F#", "G", "A", "B", "C#", "D", "E"],
        Phrygian: ["G", "A", "B", "C", "D", "E", "F#"],
        Lydian: ["A", "B", "C#", "D", "E", "F#", "G#"],
        Mixolydian: ["B", "C#", "D", "E", "F#", "G", "A"],
        Ionian: ["G", "A", "B", "C", "D", "E", "F#"],
        Locrian: ["D", "E", "F#", "G", "A", "B", "C"]
    },
    chordSpellingQuickRef: [
        "Em7 = E-G-B-D",
        "Em(maj7) = E-G-B-D#"
    ],
    emotionalCharacter: {
        color: "deep forest green / teal",
        feelings: ["reflective", "somber", "mysterious", "lyrical"],
        commonGenres: ["Folk", "Rock", "Classical", "Film Score", "Pop"]
    }
};

export default eMinor;