const cMinor = {
    scaleNotes: ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
    scales: {
        NaturalMinor: ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
        HarmonicMinor: ["C", "D", "Eb", "F", "G", "Ab", "B"],
        MelodicMinorAscending: ["C", "D", "Eb", "F", "G", "A", "B"],
        MelodicMinorDescending: ["C", "Bb", "Ab", "G", "F", "Eb", "D"],
        MinorPentatonic: ["C", "Eb", "F", "G", "Bb"],
        Blues: ["C", "Eb", "F", "Gb", "G", "Bb"]
    },
    parallelMajor: "C Major",
    triads: [
        {
            type: "Minor",
            name: "Cm",
            root: ["C", "Eb", "G"],
            inv1: ["Eb", "G", "C"],
            inv2: ["G", "C", "Eb"]
        },
        {
            type: "Major",
            name: "C",
            root: ["C", "E", "G"],
            inv1: ["E", "G", "C"],
            inv2: ["G", "C", "E"]
        }
    ],
    sevenths: [
        {
            name: "Cm7",
            root: ["C", "Eb", "G", "Bb"],
            inv1: ["Eb", "G", "Bb", "C"],
            inv2: ["G", "Bb", "C", "Eb"],
            inv3: ["Bb", "C", "Eb", "G"]
        },
        {
            name: "Cm(maj7)",
            root: ["C", "Eb", "G", "B"],
            inv1: ["Eb", "G", "B", "C"],
            inv2: ["G", "B", "C", "Eb"],
            inv3: ["B", "C", "Eb", "G"]
        }
    ],
    extendedChords: [
        { name: "Cm9", notes: ["C", "Eb", "G", "Bb", "D"] },
        { name: "Cm11", notes: ["C", "Eb", "G", "Bb", "D", "F"] },
        { name: "Cm13", notes: ["C", "Eb", "G", "Bb", "D", "F", "A"] },
        { name: "C7b9", notes: ["C", "E", "G", "Bb", "Db"] },
        { name: "C7#9", notes: ["C", "E", "G", "Bb", "D#"] },
        { name: "C7#11", notes: ["C", "E", "G", "Bb", "F#"] }
    ],
    insaneChords: [
        { name: "Cm13b9#11", notes: ["C", "Eb", "G", "Bb", "Db", "F#", "A"] },
        { name: "C7alt", notes: ["C", "E", "G", "Bb", "Db", "D#", "F#"] },
        { name: "Cm(maj7)#11", notes: ["C", "Eb", "G", "B", "F#"] },
        { name: "C7#5#9", notes: ["C", "E", "G#", "Bb", "D#"] },
        { name: "C7b5b9", notes: ["C", "E", "Gb", "Bb", "Db"] },
        { name: "Cdim7add13", notes: ["C", "Eb", "Gb", "A", "B", "D", "F", "A"] }
    ],
    commonProgressions: {
        Pop: [
            "i - VI - III - VII → Cm - Ab - Eb - Bb",
            "i - iv - v - i → Cm - Fm - Gm - Cm"
        ],
        Jazz: [
            "iiø7 - V7 - i → Dm7b5 - G7 - Cm",
            "i - VI7 - iiø7 - V7 → Cm - Ab7 - Dm7b5 - G7",
            "iii7b5 - VI7 - iiø7 - V7 - i → Em7b5 - A7 - Dm7b5 - G7 - Cm"
        ],
        Funk: [
            "i7 - iv7 - V7 - iv7 - i7 → Cm7 - Fm7 - G7 - Fm7 - Cm7",
            "i9 - bVII9 - iv9 - V9 - i9 → Cm9 - Bb9 - Fm9 - G9 - Cm9"
        ],
        RnB: [
            "i(maj7) - iii7 - vi7 - II7 - V7 → Cm(maj7) - Em7 - Am7 - D7 - G7"
        ],
        Latin: [
            "i(maj7) - bIII7 - iiø7 - V7 - i(maj7) → Cm(maj7) - Eb7 - Dm7b5 - G7 - Cm(maj7)"
        ],
        Synthwave: [
            "i - VI - III - VII → Cm - Ab - Eb - Bb",
            "i - VII - VI - VII → Cm - Bb - Ab - Bb",
            "i - v - iv - VII → Cm - Gm - Fm - Bb"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Fm - Ab - G",
            "Hirano → bVI - bVII - i → Ab - Bb - Cm",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Fmaj7 - G7 - Em7 - Am7",
            "Haru no Hi → bVImaj7 - bVII - i(maj7) → Abmaj7 - Bb - Cm(maj7)",
            "Evangelion Ending → ii - V - iii - VI → Dm7b5 - G7 - Em7 - A7",
            "Natsukashii → i(maj7) - iii7 - vi7 - II7 → Cm(maj7) - Em7 - Am7 - D7",
            "J-Rock Minor Lift → iv - V - bVI - V → Fm - G - Ab - G"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Fmaj7 - G7 - Em7 - Am7",
            "i(maj7) - bIII7 - iiø7 - V7 → Cm(maj7) - Eb7 - Dm7b5 - G7",
            "i - v - VI - VII → Cm - Gm - Ab - Bb"
        ],
        KPop: [
            "i(maj7) - iii7 - vi7 - IVmaj7 → Cm(maj7) - Em7 - Am7 - Fmaj7",
            "vi - IV - i - V → Am - F - Cm - G",
            "i - V/vi - vi - IV → Cm - G7 - Am - F",
            "i - V - IV - V → Cm - G - F - G"
        ],
        AnimeBallad: [
            "vi - IV - i - V → Am - F - Cm - G",
            "i - V/vi - vi - IV → Cm - G7 - Am - F",
            "IV - V - iii - vi → F - G - Em - Am",
            "i - iii - IV - V → Cm - Em - F - G",
            "i(maj7) - iii7 - vi7 - IVmaj7 → Cm(maj7) - Em7 - Am7 - Fmaj7",
            "iiø7 - V7 - i(maj7) - vi7 → Dm7b5 - G7 - Cm(maj7) - Am7",
            "i(maj7) - vi7 - IVmaj7 - V7 → Cm(maj7) - Am7 - Fmaj7 - G7"
        ]
    },
    chordFunctions: [
        { degree: "i", chord: "Cm" },
        { degree: "ii°", chord: "Ddim" },
        { degree: "III", chord: "Ebmaj" },
        { degree: "iv", chord: "Fm" },
        { degree: "v", chord: "Gm" },
        { degree: "VI", chord: "Abmaj" },
        { degree: "VII", chord: "Bbmaj" },
        { degree: "bIII", chord: "Ebmaj" },
        { degree: "bVI", chord: "Abmaj" },
        { degree: "bVII", chord: "Bbmaj" },
        { degree: "bVII9", chord: "Bb9" },
        { degree: "VI7", chord: "Ab7" },
        { degree: "II7", chord: "D7" }
    ],
    substitutions: [
        "G7 → Db7 (tritone)",
        "Eb → Cm(maj7) (relative)"
    ],
    nextChords: ["Fm", "Ab", "Bb", "Eb", "Gm"],
    parallelMajorChords: [
        {
            name: "C",
            notes: ["C", "E", "G"]
        }
    ],
    circleOfFifths: {
        relativeMajor: "Eb Major",
        parallelMajor: "C Major",
        dominantKey: "G Minor",
        subdominantKey: "F Minor",
        closelyRelatedKeys: ["Eb Major", "G Minor", "Ab Major", "Bb Major", "F Minor"],
        distantKeys: ["A Major", "E Major", "B Major"]
    },
    modes: {
        Aeolian: ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
        Dorian: ["D", "Eb", "F", "G", "A", "Bb", "C"],
        Phrygian: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
        Lydian: ["F", "G", "A", "Bb", "C", "D", "E"],
        Mixolydian: ["G", "A", "Bb", "C", "D", "Eb", "F"],
        Ionian: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
        Locrian: ["Bb", "C", "D", "Eb", "F", "G", "Ab"]
    },
    chordSpellingQuickRef: [
        "Cm7 = C-Eb-G-Bb",
        "Cm(maj7) = C-Eb-G-B"
    ],
    emotionalCharacter: {
        color: "deep brick red / earthy terracotta",
        feelings: ["dramatic", "passionate", "melancholic", "heroic"],
        commonGenres: ["Classical", "Jazz", "Rock", "Film Score", "Pop"]
    }
};

export default cMinor;