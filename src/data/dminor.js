const dMinor = {
    scaleNotes: ["D", "E", "F", "G", "A", "Bb", "C"],
    scales: {
        NaturalMinor: ["D", "E", "F", "G", "A", "Bb", "C"],
        HarmonicMinor: ["D", "E", "F", "G", "A", "Bb", "C#"],
        MelodicMinorAscending: ["D", "E", "F", "G", "A", "B", "C#"],
        MelodicMinorDescending: ["D", "C", "Bb", "A", "G", "F", "E"],
        MinorPentatonic: ["D", "F", "G", "A", "C"],
        Blues: ["D", "F", "G", "Ab", "A", "C"]
    },
    parallelMajor: "D Major",
    triads: [
        {
            type: "Minor",
            name: "Dm",
            root: ["D", "F", "A"],
            inv1: ["F", "A", "D"],
            inv2: ["A", "D", "F"]
        },
        {
            type: "Major",
            name: "D",
            root: ["D", "F#", "A"],
            inv1: ["F#", "A", "D"],
            inv2: ["A", "D", "F#"]
        }
    ],
    sevenths: [
        {
            name: "Dm7",
            root: ["D", "F", "A", "C"],
            inv1: ["F", "A", "C", "D"],
            inv2: ["A", "C", "D", "F"],
            inv3: ["C", "D", "F", "A"]
        },
        {
            name: "Dm(maj7)",
            root: ["D", "F", "A", "C#"],
            inv1: ["F", "A", "C#", "D"],
            inv2: ["A", "C#", "D", "F"],
            inv3: ["C#", "D", "F", "A"]
        }
    ],
    extendedChords: [
        { name: "Dm9", notes: ["D", "F", "A", "C", "E"] },
        { name: "Dm11", notes: ["D", "F", "A", "C", "E", "G"] },
        { name: "Dm13", notes: ["D", "F", "A", "C", "E", "G", "B"] },
        { name: "D7b9", notes: ["D", "F#", "A", "C", "Eb"] },
        { name: "D7#9", notes: ["D", "F#", "A", "C", "F"] },
        { name: "D7#11", notes: ["D", "F#", "A", "C", "G#"] }
    ],
    insaneChords: [
        { name: "Dm13b9#11", notes: ["D", "F", "A", "C", "Eb", "G#", "B"] },
        { name: "D7alt", notes: ["D", "F#", "A", "C", "Eb", "F", "G#"] },
        { name: "Dm(maj7)#11", notes: ["D", "F", "A", "C#", "G#"] },
        { name: "D7#5#9", notes: ["D", "F#", "A#", "C", "F"] },
        { name: "D7b5b9", notes: ["D", "F#", "Ab", "C", "Eb"] },
        { name: "Ddim7add13", notes: ["D", "F", "Ab", "B", "C#", "E", "G", "B"] }
    ],
    commonProgressions: {
        Pop: [
            "i - VI - III - VII → Dm - Bb - F - C",
            "i - iv - v - i → Dm - Gm - Am - Dm"
        ],
        Jazz: [
            "iiø7 - V7 - i → Em7b5 - A7 - Dm",
            "i - VI7 - iiø7 - V7 → Dm - Bb7 - Em7b5 - A7",
            "iii7b5 - VI7 - iiø7 - V7 - i → F#m7b5 - B7 - Em7b5 - A7 - Dm"
        ],
        Funk: [
            "i7 - iv7 - V7 - iv7 - i7 → Dm7 - Gm7 - A7 - Gm7 - Dm7",
            "i9 - bVII9 - iv9 - V9 - i9 → Dm9 - C9 - Gm9 - A9 - Dm9"
        ],
        RnB: [
            "i(maj7) - iii7 - vi7 - II7 - V7 → Dm(maj7) - F#m7 - Bm7 - E7 - A7"
        ],
        Latin: [
            "i(maj7) - bIII7 - iiø7 - V7 - i(maj7) → Dm(maj7) - F7 - Em7b5 - A7 - Dm(maj7)"
        ],
        Synthwave: [
            "i - VI - III - VII → Dm - Bb - F - C",
            "i - VII - VI - VII → Dm - C - Bb - C",
            "i - v - iv - VII → Dm - Am - Gm - C"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Gm - Bb - A",
            "Hirano → bVI - bVII - i → Bb - C - Dm",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Gmaj7 - A7 - F#m7 - Bm7",
            "Haru no Hi → bVImaj7 - bVII - i(maj7) → Bbmaj7 - C - Dm(maj7)",
            "Evangelion Ending → ii - V - iii - VI → Em7b5 - A7 - F#m7 - B7",
            "Natsukashii → i(maj7) - iii7 - vi7 - II7 → Dm(maj7) - F#m7 - Bm7 - E7",
            "J-Rock Minor Lift → iv - V - bVI - V → Gm - A - Bb - A"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Gmaj7 - A7 - F#m7 - Bm7",
            "i(maj7) - bIII7 - iiø7 - V7 → Dm(maj7) - F7 - Em7b5 - A7",
            "i - v - VI - VII → Dm - Am - Bb - C"
        ],
        KPop: [
            "i(maj7) - iii7 - vi7 - IVmaj7 → Dm(maj7) - F#m7 - Bm7 - Gmaj7",
            "vi - IV - i - V → Bm - G - Dm - A",
            "i - V/vi - vi - IV → Dm - A7 - Bm - G",
            "i - V - IV - V → Dm - A - G - A"
        ],
        AnimeBallad: [
            "vi - IV - i - V → Bm - G - Dm - A",
            "i - V/vi - vi - IV → Dm - A7 - Bm - G",
            "IV - V - iii - vi → G - A - F#m - Bm",
            "i - iii - IV - V → Dm - F#m - G - A",
            "i(maj7) - iii7 - vi7 - IVmaj7 → Dm(maj7) - F#m7 - Bm7 - Gmaj7",
            "iiø7 - V7 - i(maj7) - vi7 → Em7b5 - A7 - Dm(maj7) - Bm7",
            "i(maj7) - vi7 - IVmaj7 - V7 → Dm(maj7) - Bm7 - Gmaj7 - A7"
        ]
    },
    chordFunctions: [
        { degree: "i", chord: "Dm" },
        { degree: "ii°", chord: "Edim" },
        { degree: "III", chord: "Fmaj" },
        { degree: "iv", chord: "Gm" },
        { degree: "v", chord: "Am" },
        { degree: "VI", chord: "Bbmaj" },
        { degree: "VII", chord: "Cmaj" },
        { degree: "bIII", chord: "Fmaj" },
        { degree: "bVI", chord: "Bbmaj" },
        { degree: "bVII", chord: "Cmaj" },
        { degree: "bVII9", chord: "C9" },
        { degree: "VI7", chord: "Bb7" },
        { degree: "II7", chord: "E7" }
    ],
    substitutions: [
        "A7 → Eb7 (tritone)",
        "F → Dm(maj7) (relative)"
    ],
    nextChords: ["Gm", "Bb", "C", "F", "Am"],
    parallelMajorChords: [
        {
            name: "D",
            notes: ["D", "F#", "A"]
        }
    ],
    circleOfFifths: {
        relativeMajor: "F Major",
        parallelMajor: "D Major",
        dominantKey: "A Minor",
        subdominantKey: "G Minor",
        closelyRelatedKeys: ["F Major", "A Minor", "Bb Major", "C Major", "G Minor"],
        distantKeys: ["B Major", "E Major", "A Major"]
    },
    modes: {
        Aeolian: ["D", "E", "F", "G", "A", "Bb", "C"],
        Dorian: ["E", "F", "G", "A", "B", "C", "D"],
        Phrygian: ["F", "G", "A", "Bb", "C", "D", "E"],
        Lydian: ["G", "A", "B", "C", "D", "E", "F#"],
        Mixolydian: ["A", "B", "C", "D", "E", "F", "G"],
        Ionian: ["F", "G", "A", "Bb", "C", "D", "E"],
        Locrian: ["C", "D", "E", "F", "G", "A", "Bb"]
    },
    chordSpellingQuickRef: [
        "Dm7 = D-F-A-C",
        "Dm(maj7) = D-F-A-C#"
    ],
    emotionalCharacter: {
        color: "crimson red / rich wine",
        feelings: ["tragic", "heroic", "somber", "deep emotion"],
        commonGenres: ["Classical", "Jazz", "Rock", "Orchestral", "Film Score"]
    }
};

export default dMinor;