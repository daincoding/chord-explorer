const gMinor = {
    scaleNotes: ["G", "A", "Bb", "C", "D", "Eb", "F"],
    scales: {
        NaturalMinor: ["G", "A", "Bb", "C", "D", "Eb", "F"],
        HarmonicMinor: ["G", "A", "Bb", "C", "D", "Eb", "F#"],
        MelodicMinorAscending: ["G", "A", "Bb", "C", "D", "E", "F#"],
        MelodicMinorDescending: ["G", "F", "Eb", "D", "C", "Bb", "A"],
        MinorPentatonic: ["G", "Bb", "C", "D", "F"],
        Blues: ["G", "Bb", "C", "Db", "D", "F"]
    },
    parallelMajor: "G Major",
    triads: [
        {
            type: "Minor",
            name: "Gm",
            root: ["G", "Bb", "D"],
            inv1: ["Bb", "D", "G"],
            inv2: ["D", "G", "Bb"]
        },
        {
            type: "Major",
            name: "G",
            root: ["G", "B", "D"],
            inv1: ["B", "D", "G"],
            inv2: ["D", "G", "B"]
        }
    ],
    sevenths: [
        {
            name: "Gm7",
            root: ["G", "Bb", "D", "F"],
            inv1: ["Bb", "D", "F", "G"],
            inv2: ["D", "F", "G", "Bb"],
            inv3: ["F", "G", "Bb", "D"]
        },
        {
            name: "Gm(maj7)",
            root: ["G", "Bb", "D", "F#"],
            inv1: ["Bb", "D", "F#", "G"],
            inv2: ["D", "F#", "G", "Bb"],
            inv3: ["F#", "G", "Bb", "D"]
        }
    ],
    extendedChords: [
        { name: "Gm9", notes: ["G", "Bb", "D", "F", "A"] },
        { name: "Gm11", notes: ["G", "Bb", "D", "F", "A", "C"] },
        { name: "Gm13", notes: ["G", "Bb", "D", "F", "A", "C", "E"] },
        { name: "G7b9", notes: ["G", "B", "D", "F", "Ab"] },
        { name: "G7#9", notes: ["G", "B", "D", "F", "A#"] },
        { name: "G7#11", notes: ["G", "B", "D", "F", "C#"] }
    ],
    insaneChords: [
        { name: "Gm13b9#11", notes: ["G", "Bb", "D", "F", "Ab", "C#", "E"] },
        { name: "G7alt", notes: ["G", "B", "D", "F", "Ab", "A#", "C#"] },
        { name: "Gm(maj7)#11", notes: ["G", "Bb", "D", "F#", "C#"] },
        { name: "G7#5#9", notes: ["G", "B", "D#", "F", "A#"] },
        { name: "G7b5b9", notes: ["G", "B", "Db", "F", "Ab"] },
        { name: "Gdim7add13", notes: ["G", "Bb", "Db", "E", "F#", "A", "C", "E"] }
    ],
    commonProgressions: {
        Pop: [
            "i - VI - III - VII → Gm - Eb - Bb - F",
            "i - iv - v - i → Gm - Cm - Dm - Gm"
        ],
        Jazz: [
            "iiø7 - V7 - i → Am7b5 - D7 - Gm",
            "i - VI7 - iiø7 - V7 → Gm - Eb7 - Am7b5 - D7",
            "iii7b5 - VI7 - iiø7 - V7 - i → Bm7b5 - E7 - Am7b5 - D7 - Gm"
        ],
        Funk: [
            "i7 - iv7 - V7 - iv7 - i7 → Gm7 - Cm7 - D7 - Cm7 - Gm7",
            "i9 - bVII9 - iv9 - V9 - i9 → Gm9 - F9 - Cm9 - D9 - Gm9"
        ],
        RnB: [
            "i(maj7) - iii7 - vi7 - II7 - V7 → Gm(maj7) - Bm7 - Em7 - A7 - D7"
        ],
        Latin: [
            "i(maj7) - bIII7 - iiø7 - V7 - i(maj7) → Gm(maj7) - Bb7 - Am7b5 - D7 - Gm(maj7)"
        ],
        Synthwave: [
            "i - VI - III - VII → Gm - Eb - Bb - F",
            "i - VII - VI - VII → Gm - F - Eb - F",
            "i - v - iv - VII → Gm - Dm - Cm - F"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Cm - Eb - D",
            "Hirano → bVI - bVII - i → Eb - F - Gm",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Cmaj7 - D7 - Bm7 - Em7",
            "Haru no Hi → bVImaj7 - bVII - i(maj7) → Ebmaj7 - F - Gm(maj7)",
            "Evangelion Ending → ii - V - iii - VI → Am7b5 - D7 - Bm7 - E7",
            "Natsukashii → i(maj7) - iii7 - vi7 - II7 → Gm(maj7) - Bm7 - Em7 - A7",
            "J-Rock Minor Lift → iv - V - bVI - V → Cm - D - Eb - D"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Cmaj7 - D7 - Bm7 - Em7",
            "i(maj7) - bIII7 - iiø7 - V7 → Gm(maj7) - Bb7 - Am7b5 - D7",
            "i - v - VI - VII → Gm - Dm - Eb - F"
        ],
        KPop: [
            "i(maj7) - iii7 - vi7 - IVmaj7 → Gm(maj7) - Bm7 - Em7 - Cmaj7",
            "vi - IV - i - V → Em - C - Gm - D",
            "i - V/vi - vi - IV → Gm - D7 - Em - C",
            "i - V - IV - V → Gm - D - C - D"
        ],
        AnimeBallad: [
            "vi - IV - i - V → Em - C - Gm - D",
            "i - V/vi - vi - IV → Gm - D7 - Em - C",
            "IV - V - iii - vi → C - D - Bm - Em",
            "i - iii - IV - V → Gm - Bm - C - D",
            "i(maj7) - iii7 - vi7 - IVmaj7 → Gm(maj7) - Bm7 - Em7 - Cmaj7",
            "iiø7 - V7 - i(maj7) - vi7 → Am7b5 - D7 - Gm(maj7) - Em7",
            "i(maj7) - vi7 - IVmaj7 - V7 → Gm(maj7) - Em7 - Cmaj7 - D7"
        ]
    },
    chordFunctions: [
        { degree: "i", chord: "Gm" },
        { degree: "ii°", chord: "Adim" },
        { degree: "III", chord: "Bbmaj" },
        { degree: "iv", chord: "Cm" },
        { degree: "v", chord: "Dm" },
        { degree: "VI", chord: "Ebmaj" },
        { degree: "VII", chord: "Fmaj" },
        { degree: "bIII", chord: "Bbmaj" },
        { degree: "bVI", chord: "Ebmaj" },
        { degree: "bVII", chord: "Fmaj" },
        { degree: "bVII9", chord: "F9" },
        { degree: "VI7", chord: "Eb7" },
        { degree: "II7", chord: "A7" }
    ],
    substitutions: [
        "D7 → Ab7 (tritone)",
        "Bb → Gm(maj7) (relative)"
    ],
    nextChords: ["Cm", "Eb", "F", "Bb", "Dm"],
    parallelMajorChords: [
        {
            name: "G",
            notes: ["G", "B", "D"]
        }
    ],
    circleOfFifths: {
        relativeMajor: "Bb Major",
        parallelMajor: "G Major",
        dominantKey: "D Minor",
        subdominantKey: "Cm",
        closelyRelatedKeys: ["Bb Major", "Cm", "Eb Major", "F Major", "Dm"],
        distantKeys: ["E Major", "B Major", "A Major"]
    },
    modes: {
        Aeolian: ["G", "A", "Bb", "C", "D", "Eb", "F"],
        Dorian: ["A", "Bb", "C", "D", "E", "F", "G"],
        Phrygian: ["Bb", "C", "D", "Eb", "F", "G", "A"],
        Lydian: ["C", "D", "E", "F", "G", "A", "B"],
        Mixolydian: ["D", "E", "F", "G", "A", "Bb", "C"],
        Ionian: ["Bb", "C", "D", "Eb", "F", "G", "A"],
        Locrian: ["F", "G", "A", "Bb", "C", "D", "Eb"]
    },
    chordSpellingQuickRef: [
        "Gm7 = G-Bb-D-F",
        "Gm(maj7) = G-Bb-D-F#"
    ],
    emotionalCharacter: {
        color: "deep red-brown / mahogany",
        feelings: ["noble", "melancholic", "poetic", "dignified"],
        commonGenres: ["Classical", "Jazz", "Film Score", "Rock", "Folk"]
    }
};

export default gMinor;