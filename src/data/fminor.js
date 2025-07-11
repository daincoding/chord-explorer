const fMinor = {
    scaleNotes: ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
    scales: {
        NaturalMinor: ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
        HarmonicMinor: ["F", "G", "Ab", "Bb", "C", "Db", "E"],
        MelodicMinorAscending: ["F", "G", "Ab", "Bb", "C", "D", "E"],
        MelodicMinorDescending: ["F", "Eb", "Db", "C", "Bb", "Ab", "G"],
        MinorPentatonic: ["F", "Ab", "Bb", "C", "Eb"],
        Blues: ["F", "Ab", "Bb", "B", "C", "Eb"]
    },
    parallelMajor: "F Major",
    triads: [
        {
            type: "Minor",
            name: "Fm",
            root: ["F", "Ab", "C"],
            inv1: ["Ab", "C", "F"],
            inv2: ["C", "F", "Ab"]
        },
        {
            type: "Major",
            name: "F",
            root: ["F", "A", "C"],
            inv1: ["A", "C", "F"],
            inv2: ["C", "F", "A"]
        }
    ],
    sevenths: [
        {
            name: "Fm7",
            root: ["F", "Ab", "C", "Eb"],
            inv1: ["Ab", "C", "Eb", "F"],
            inv2: ["C", "Eb", "F", "Ab"],
            inv3: ["Eb", "F", "Ab", "C"]
        },
        {
            name: "Fm(maj7)",
            root: ["F", "Ab", "C", "E"],
            inv1: ["Ab", "C", "E", "F"],
            inv2: ["C", "E", "F", "Ab"],
            inv3: ["E", "F", "Ab", "C"]
        }
    ],
    extendedChords: [
        { name: "Fm9", notes: ["F", "Ab", "C", "Eb", "G"] },
        { name: "Fm11", notes: ["F", "Ab", "C", "Eb", "G", "Bb"] },
        { name: "Fm13", notes: ["F", "Ab", "C", "Eb", "G", "Bb", "D"] },
        { name: "F7b9", notes: ["F", "A", "C", "Eb", "Gb"] },
        { name: "F7#9", notes: ["F", "A", "C", "Eb", "G#"] },
        { name: "F7#11", notes: ["F", "A", "C", "Eb", "B"] }
    ],
    insaneChords: [
        { name: "Fm13b9#11", notes: ["F", "Ab", "C", "Eb", "Gb", "B", "D"] },
        { name: "F7alt", notes: ["F", "A", "C", "Eb", "Gb", "G#", "B"] },
        { name: "Fm(maj7)#11", notes: ["F", "Ab", "C", "E", "B"] },
        { name: "F7#5#9", notes: ["F", "A", "C#", "Eb", "G#"] },
        { name: "F7b5b9", notes: ["F", "A", "Db", "Eb", "Gb"] },
        { name: "Fdim7add13", notes: ["F", "Ab", "Cb", "D", "E", "G", "Bb", "D"] }
    ],
    commonProgressions: {
        Pop: [
            "i - VI - III - VII → Fm - Db - Ab - Eb",
            "i - iv - v - i → Fm - Bbm - Cm - Fm"
        ],
        Jazz: [
            "iiø7 - V7 - i → Gm7b5 - C7 - Fm",
            "i - VI7 - iiø7 - V7 → Fm - Db7 - Gm7b5 - C7",
            "iii7b5 - VI7 - iiø7 - V7 - i → Am7b5 - D7 - Gm7b5 - C7 - Fm"
        ],
        Funk: [
            "i7 - iv7 - V7 - iv7 - i7 → Fm7 - Bbm7 - C7 - Bbm7 - Fm7",
            "i9 - bVII9 - iv9 - V9 - i9 → Fm9 - Eb9 - Bbm9 - C9 - Fm9"
        ],
        RnB: [
            "i(maj7) - iii7 - vi7 - II7 - V7 → Fm(maj7) - Am7 - Dm7 - G7 - C7"
        ],
        Latin: [
            "i(maj7) - bIII7 - iiø7 - V7 - i(maj7) → Fm(maj7) - Ab7 - Gm7b5 - C7 - Fm(maj7)"
        ],
        Synthwave: [
            "i - VI - III - VII → Fm - Db - Ab - Eb",
            "i - VII - VI - VII → Fm - Eb - Db - Eb",
            "i - v - iv - VII → Fm - Cm - Bbm - Eb"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Bbm - Db - C",
            "Hirano → bVI - bVII - i → Db - Eb - Fm",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Bbmaj7 - C7 - Am7 - Dm7",
            "Haru no Hi → bVImaj7 - bVII - i(maj7) → Dbmaj7 - Eb - Fm(maj7)",
            "Evangelion Ending → ii - V - iii - VI → Gm7b5 - C7 - Am7 - D7",
            "Natsukashii → i(maj7) - iii7 - vi7 - II7 → Fm(maj7) - Am7 - Dm7 - G7",
            "J-Rock Minor Lift → iv - V - bVI - V → Bbm - C - Db - C"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Bbmaj7 - C7 - Am7 - Dm7",
            "i(maj7) - bIII7 - iiø7 - V7 → Fm(maj7) - Ab7 - Gm7b5 - C7",
            "i - v - VI - VII → Fm - Cm - Db - Eb"
        ],
        KPop: [
            "i(maj7) - iii7 - vi7 - IVmaj7 → Fm(maj7) - Am7 - Dm7 - Bbmaj7",
            "vi - IV - i - V → Dm - Bb - Fm - C",
            "i - V/vi - vi - IV → Fm - C7 - Dm - Bb",
            "i - V - IV - V → Fm - C - Bb - C"
        ],
        AnimeBallad: [
            "vi - IV - i - V → Dm - Bb - Fm - C",
            "i - V/vi - vi - IV → Fm - C7 - Dm - Bb",
            "IV - V - iii - vi → Bb - C - Am - Dm",
            "i - iii - IV - V → Fm - Am - Bb - C",
            "i(maj7) - iii7 - vi7 - IVmaj7 → Fm(maj7) - Am7 - Dm7 - Bbmaj7",
            "iiø7 - V7 - i(maj7) - vi7 → Gm7b5 - C7 - Fm(maj7) - Dm7",
            "i(maj7) - vi7 - IVmaj7 - V7 → Fm(maj7) - Dm7 - Bbmaj7 - C7"
        ]
    },
    chordFunctions: [
        { degree: "i", chord: "Fm" },
        { degree: "ii°", chord: "Gdim" },
        { degree: "III", chord: "Abmaj" },
        { degree: "iv", chord: "Bbm" },
        { degree: "v", chord: "Cm" },
        { degree: "VI", chord: "Dbmaj" },
        { degree: "VII", chord: "Ebmaj" },
        { degree: "bIII", chord: "Abmaj" },
        { degree: "bVI", chord: "Dbmaj" },
        { degree: "bVII", chord: "Ebmaj" },
        { degree: "bVII9", chord: "Eb9" },
        { degree: "VI7", chord: "Db7" },
        { degree: "II7", chord: "G7" }
    ],
    substitutions: [
        "C7 → Gb7 (tritone)",
        "Ab → Fm(maj7) (relative)"
    ],
    nextChords: ["Bbm", "Db", "Eb", "Ab", "Cm"],
    parallelMajorChords: [
        {
            name: "F",
            notes: ["F", "A", "C"]
        }
    ],
    circleOfFifths: {
        relativeMajor: "Ab Major",
        parallelMajor: "F Major",
        dominantKey: "C Minor",
        subdominantKey: "Bbm",
        closelyRelatedKeys: ["Ab Major", "Bbm", "Db Major", "Eb Major", "Cm"],
        distantKeys: ["A Major", "E Major", "B Major"]
    },
    modes: {
        Aeolian: ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
        Dorian: ["G", "Ab", "Bb", "C", "D", "Eb", "F"],
        Phrygian: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
        Lydian: ["Bb", "C", "D", "Eb", "F", "G", "A"],
        Mixolydian: ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
        Ionian: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
        Locrian: ["Eb", "F", "G", "Ab", "Bb", "C", "Db"]
    },
    chordSpellingQuickRef: [
        "Fm7 = F-Ab-C-Eb",
        "Fm(maj7) = F-Ab-C-E"
    ],
    emotionalCharacter: {
        color: "dark garnet red / rich burgundy",
        feelings: ["intense", "dramatic", "passionate", "poignant"],
        commonGenres: ["Classical", "Jazz", "Film Score", "Soul", "Rock"]
    }
};

export default fMinor;