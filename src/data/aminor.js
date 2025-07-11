const aMinor = {
    scaleNotes: ["A", "B", "C", "D", "E", "F", "G"],
    scales: {
        NaturalMinor: ["A", "B", "C", "D", "E", "F", "G"],
        HarmonicMinor: ["A", "B", "C", "D", "E", "F", "G#"],
        MelodicMinorAscending: ["A", "B", "C", "D", "E", "F#", "G#"],
        MelodicMinorDescending: ["A", "G", "F", "E", "D", "C", "B"],
        MinorPentatonic: ["A", "C", "D", "E", "G"],
        Blues: ["A", "C", "D", "D#", "E", "G"]
    },
    parallelMajor: "A Major",
    triads: [
        {
            type: "Minor",
            name: "Am",
            root: ["A", "C", "E"],
            inv1: ["C", "E", "A"],
            inv2: ["E", "A", "C"]
        },
        {
            type: "Major",
            name: "A",
            root: ["A", "C#", "E"],
            inv1: ["C#", "E", "A"],
            inv2: ["E", "A", "C#"]
        }
    ],
    sevenths: [
        {
            name: "Am7",
            root: ["A", "C", "E", "G"],
            inv1: ["C", "E", "G", "A"],
            inv2: ["E", "G", "A", "C"],
            inv3: ["G", "A", "C", "E"]
        },
        {
            name: "Am(maj7)",
            root: ["A", "C", "E", "G#"],
            inv1: ["C", "E", "G#", "A"],
            inv2: ["E", "G#", "A", "C"],
            inv3: ["G#", "A", "C", "E"]
        }
    ],
    extendedChords: [
        { name: "Am9", notes: ["A", "C", "E", "G", "B"] },
        { name: "Am11", notes: ["A", "C", "E", "G", "B", "D"] },
        { name: "Am13", notes: ["A", "C", "E", "G", "B", "D", "F#"] },
        { name: "A7b9", notes: ["A", "C#", "E", "G", "Bb"] },
        { name: "A7#9", notes: ["A", "C#", "E", "G", "C"] },
        { name: "A7#11", notes: ["A", "C#", "E", "G", "D#"] }
    ],
    insaneChords: [
        { name: "Am13b9#11", notes: ["A", "C", "E", "G", "Bb", "D#", "F#"] },
        { name: "A7alt", notes: ["A", "C#", "E", "G", "Bb", "C", "D#"] },
        { name: "Am(maj7)#11", notes: ["A", "C", "E", "G#", "D#"] },
        { name: "A7#5#9", notes: ["A", "C#", "F", "G", "C"] },
        { name: "A7b5b9", notes: ["A", "C#", "Eb", "G", "Bb"] },
        { name: "Adim7add13", notes: ["A", "C", "Eb", "F#", "G#", "B", "D", "F#"] }
    ],
    commonProgressions: {
        Pop: [
            "i - VI - III - VII → Am - F - C - G",
            "i - iv - v - i → Am - Dm - Em - Am"
        ],
        Jazz: [
            "iiø7 - V7 - i → Bm7b5 - E7 - Am",
            "i - VI7 - iiø7 - V7 → Am - F7 - Bm7b5 - E7",
            "iii7b5 - VI7 - iiø7 - V7 - i → Cm7b5 - F7 - Bm7b5 - E7 - Am"
        ],
        Funk: [
            "i7 - iv7 - V7 - iv7 - i7 → Am7 - Dm7 - E7 - Dm7 - Am7",
            "i9 - bVII9 - iv9 - V9 - i9 → Am9 - G9 - Dm9 - E9 - Am9"
        ],
        RnB: [
            "i(maj7) - iii7 - vi7 - II7 - V7 → Am(maj7) - C#m7 - F#m7 - B7 - E7"
        ],
        Latin: [
            "i(maj7) - bIII7 - iiø7 - V7 - i(maj7) → Am(maj7) - C7 - Bm7b5 - E7 - Am(maj7)"
        ],
        Synthwave: [
            "i - VI - III - VII → Am - F - C - G",
            "i - VII - VI - VII → Am - G - F - G",
            "i - v - iv - VII → Am - Em - Dm - G"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Dm - F - E",
            "Hirano → bVI - bVII - i → F - G - Am",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Dmaj7 - E7 - C#m7 - F#m7",
            "Haru no Hi → bVImaj7 - bVII - i(maj7) → Fmaj7 - G - Am(maj7)",
            "Evangelion Ending → ii - V - iii - VI → Bm7b5 - E7 - C#m7 - F#7",
            "Natsukashii → i(maj7) - iii7 - vi7 - II7 → Am(maj7) - C#m7 - F#m7 - B7",
            "J-Rock Minor Lift → iv - V - bVI - V → Dm - E - F - E"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Dmaj7 - E7 - C#m7 - F#m7",
            "i(maj7) - bIII7 - iiø7 - V7 → Am(maj7) - C7 - Bm7b5 - E7",
            "i - v - VI - VII → Am - Em - F - G"
        ],
        KPop: [
            "i(maj7) - iii7 - vi7 - IVmaj7 → Am(maj7) - C#m7 - F#m7 - Dmaj7",
            "vi - IV - i - V → F#m - D - Am - E",
            "i - V/vi - vi - IV → Am - E7 - F#m - D",
            "i - V - IV - V → Am - E - D - E"
        ],
        AnimeBallad: [
            "vi - IV - i - V → F#m - D - Am - E",
            "i - V/vi - vi - IV → Am - E7 - F#m - D",
            "IV - V - iii - vi → D - E - C#m - F#m",
            "i - iii - IV - V → Am - C#m - D - E",
            "i(maj7) - iii7 - vi7 - IVmaj7 → Am(maj7) - C#m7 - F#m7 - Dmaj7",
            "iiø7 - V7 - i(maj7) - vi7 → Bm7b5 - E7 - Am(maj7) - F#m7",
            "i(maj7) - vi7 - IVmaj7 - V7 → Am(maj7) - F#m7 - Dmaj7 - E7"
        ]
    },
    chordFunctions: [
        { degree: "i", chord: "Am" },
        { degree: "ii°", chord: "Bdim" },
        { degree: "III", chord: "Cmaj" },
        { degree: "iv", chord: "Dm" },
        { degree: "v", chord: "Em" },
        { degree: "VI", chord: "Fmaj" },
        { degree: "VII", chord: "Gmaj" },
        { degree: "bIII", chord: "Cmaj" },
        { degree: "bVI", chord: "Fmaj" },
        { degree: "bVII", chord: "Gmaj" },
        { degree: "bVII9", chord: "G9" },
        { degree: "VI7", chord: "F7" },
        { degree: "II7", chord: "B7" }
    ],
    substitutions: [
        "E7 → Bb7 (tritone)",
        "C → Am(maj7) (relative)"
    ],
    nextChords: ["Dm", "F", "E", "C", "G"],
    parallelMajorChords: [
        {
            name: "A",
            notes: ["A", "C#", "E"]
        }
    ],
    circleOfFifths: {
        relativeMajor: "C Major",
        parallelMajor: "A Major",
        dominantKey: "E Minor",
        subdominantKey: "D Minor",
        closelyRelatedKeys: ["C Major", "E Minor", "G Major", "D Minor", "F Major"],
        distantKeys: ["Eb Major", "Ab Major", "Bb Major"]
    },
    modes: {
        Aeolian: ["A", "B", "C", "D", "E", "F", "G"],
        Dorian: ["B", "C", "D", "E", "F#", "G", "A"],
        Phrygian: ["C", "D", "E", "F", "G", "A", "B"],
        Lydian: ["D", "E", "F#", "G", "A", "B", "C#"],
        Mixolydian: ["E", "F#", "G", "A", "B", "C", "D"],
        Ionian: ["C", "D", "E", "F", "G", "A", "B"],
        Locrian: ["G", "A", "B", "C", "D", "E", "F"]
    },
    chordSpellingQuickRef: [
        "Am7 = A-C-E-G",
        "Am(maj7) = A-C-E-G#"
    ],
    emotionalCharacter: {
        color: "warm amber / earthy brown",
        feelings: ["melancholic", "mysterious", "poetic", "introspective"],
        commonGenres: ["Folk", "Rock", "Classical", "Pop", "Film Score"]
    }
};

export default aMinor;