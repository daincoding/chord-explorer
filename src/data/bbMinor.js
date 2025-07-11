const bbMinor = {
    scaleNotes: ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],
    scales: {
        NaturalMinor: ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],
        HarmonicMinor: ["Bb", "C", "Db", "Eb", "F", "Gb", "A"],
        MelodicMinorAscending: ["Bb", "C", "Db", "Eb", "F", "G", "A"],
        MelodicMinorDescending: ["Bb", "Ab", "Gb", "F", "Eb", "Db", "C"],
        MinorPentatonic: ["Bb", "Db", "Eb", "F", "Ab"],
        Blues: ["Bb", "Db", "Eb", "E", "F", "Ab"]
    },
    parallelMajor: "Bb Major",
    triads: [
        {
            type: "Minor",
            name: "Bbm",
            root: ["Bb", "Db", "F"],
            inv1: ["Db", "F", "Bb"],
            inv2: ["F", "Bb", "Db"]
        },
        {
            type: "Major",
            name: "Bb",
            root: ["Bb", "D", "F"],
            inv1: ["D", "F", "Bb"],
            inv2: ["F", "Bb", "D"]
        }
    ],
    sevenths: [
        {
            name: "Bbm7",
            root: ["Bb", "Db", "F", "Ab"],
            inv1: ["Db", "F", "Ab", "Bb"],
            inv2: ["F", "Ab", "Bb", "Db"],
            inv3: ["Ab", "Bb", "Db", "F"]
        },
        {
            name: "Bbm(maj7)",
            root: ["Bb", "Db", "F", "A"],
            inv1: ["Db", "F", "A", "Bb"],
            inv2: ["F", "A", "Bb", "Db"],
            inv3: ["A", "Bb", "Db", "F"]
        }
    ],
    extendedChords: [
        { name: "Bbm9", notes: ["Bb", "Db", "F", "Ab", "C"] },
        { name: "Bbm11", notes: ["Bb", "Db", "F", "Ab", "C", "Eb"] },
        { name: "Bbm13", notes: ["Bb", "Db", "F", "Ab", "C", "Eb", "G"] },
        { name: "Bb7b9", notes: ["Bb", "D", "F", "Ab", "Cb"] },
        { name: "Bb7#9", notes: ["Bb", "D", "F", "Ab", "C#"] },
        { name: "Bb7#11", notes: ["Bb", "D", "F", "Ab", "E"] }
    ],
    insaneChords: [
        { name: "Bbm13b9#11", notes: ["Bb", "Db", "F", "Ab", "Cb", "E", "G"] },
        { name: "Bb7alt", notes: ["Bb", "D", "F", "Ab", "Cb", "C#", "E"] },
        { name: "Bbm(maj7)#11", notes: ["Bb", "Db", "F", "A", "E"] },
        { name: "Bb7#5#9", notes: ["Bb", "D", "F#", "Ab", "C#"] },
        { name: "Bb7b5b9", notes: ["Bb", "D", "E", "Ab", "Cb"] },
        { name: "Bbdim7add13", notes: ["Bb", "Db", "E", "G", "A", "C", "Eb", "G"] }
    ],
    commonProgressions: {
        Pop: [
            "i - VI - III - VII → Bbm - Gb - Db - Ab",
            "i - iv - v - i → Bbm - Ebm - Fm - Bbm"
        ],
        Jazz: [
            "iiø7 - V7 - i → Cm7b5 - F7 - Bbm",
            "i - VI7 - iiø7 - V7 → Bbm - Gb7 - Cm7b5 - F7",
            "iii7b5 - VI7 - iiø7 - V7 - i → Dm7b5 - G7 - Cm7b5 - F7 - Bbm"
        ],
        Funk: [
            "i7 - iv7 - V7 - iv7 - i7 → Bbm7 - Ebm7 - F7 - Ebm7 - Bbm7",
            "i9 - bVII9 - iv9 - V9 - i9 → Bbm9 - Ab9 - Ebm9 - F9 - Bbm9"
        ],
        RnB: [
            "i(maj7) - iii7 - vi7 - II7 - V7 → Bbm(maj7) - Dm7 - Gm7 - C7 - F7"
        ],
        Latin: [
            "i(maj7) - bIII7 - iiø7 - V7 - i(maj7) → Bbm(maj7) - Db7 - Cm7b5 - F7 - Bbm(maj7)"
        ],
        Synthwave: [
            "i - VI - III - VII → Bbm - Gb - Db - Ab",
            "i - VII - VI - VII → Bbm - Ab - Gb - Ab",
            "i - v - iv - VII → Bbm - Fm - Ebm - Ab"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Ebm - Gb - F",
            "Hirano → bVI - bVII - i → Gb - Ab - Bbm",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Ebmaj7 - F7 - Dm7 - Gm7",
            "Haru no Hi → bVImaj7 - bVII - i(maj7) → Gbmaj7 - Ab - Bbm(maj7)",
            "Evangelion Ending → ii - V - iii - VI → Cm7b5 - F7 - Dm7 - G7",
            "Natsukashii → i(maj7) - iii7 - vi7 - II7 → Bbm(maj7) - Dm7 - Gm7 - C7",
            "J-Rock Minor Lift → iv - V - bVI - V → Ebm - F - Gb - F"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Ebmaj7 - F7 - Dm7 - Gm7",
            "i(maj7) - bIII7 - iiø7 - V7 → Bbm(maj7) - Db7 - Cm7b5 - F7",
            "i - v - VI - VII → Bbm - Fm - Gb - Ab"
        ],
        KPop: [
            "i(maj7) - iii7 - vi7 - IVmaj7 → Bbm(maj7) - Dm7 - Gm7 - Ebmaj7",
            "vi - IV - i - V → Gm - Eb - Bbm - F",
            "i - V/vi - vi - IV → Bbm - F7 - Gm - Eb",
            "i - V - IV - V → Bbm - F - Eb - F"
        ],
        AnimeBallad: [
            "vi - IV - i - V → Gm - Eb - Bbm - F",
            "i - V/vi - vi - IV → Bbm - F7 - Gm - Eb",
            "IV - V - iii - vi → Eb - F - Dm - Gm",
            "i - iii - IV - V → Bbm - Dm - Eb - F",
            "i(maj7) - iii7 - vi7 - IVmaj7 → Bbm(maj7) - Dm7 - Gm7 - Ebmaj7",
            "iiø7 - V7 - i(maj7) - vi7 → Cm7b5 - F7 - Bbm(maj7) - Gm7",
            "i(maj7) - vi7 - IVmaj7 - V7 → Bbm(maj7) - Gm7 - Ebmaj7 - F7"
        ]
    },
    chordFunctions: [
        { degree: "i", chord: "Bbm" },
        { degree: "ii°", chord: "Cdim" },
        { degree: "III", chord: "Dbmaj" },
        { degree: "iv", chord: "Ebm" },
        { degree: "v", chord: "Fm" },
        { degree: "VI", chord: "Gbmaj" },
        { degree: "VII", chord: "Abmaj" },
        { degree: "bIII", chord: "Dbmaj" },
        { degree: "bVI", chord: "Gbmaj" },
        { degree: "bVII", chord: "Abmaj" },
        { degree: "bVII9", chord: "Ab9" },
        { degree: "VI7", chord: "Gb7" },
        { degree: "II7", chord: "C7" }
    ],
    substitutions: [
        "F7 → B7 (tritone)",
        "Db → Bbm(maj7) (relative)"
    ],
    nextChords: ["Ebm", "Gb", "Ab", "Db", "Fm"],
    parallelMajorChords: [
        {
            name: "Bb",
            notes: ["Bb", "D", "F"]
        }
    ],
    circleOfFifths: {
        relativeMajor: "Db Major",
        parallelMajor: "Bb Major",
        dominantKey: "F Minor",
        subdominantKey: "Eb Minor",
        closelyRelatedKeys: ["Db Major", "F Minor", "Gb Major", "Ab Major", "Eb Minor"],
        distantKeys: ["E Major", "B Major", "A Major"]
    },
    modes: {
        Aeolian: ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],
        Dorian: ["C", "Db", "Eb", "F", "G", "Ab", "Bb"],
        Phrygian: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
        Lydian: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
        Mixolydian: ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
        Ionian: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
        Locrian: ["Ab", "Bb", "C", "Db", "Eb", "F", "Gb"]
    },
    chordSpellingQuickRef: [
        "Bbm7 = Bb-Db-F-Ab",
        "Bbm(maj7) = Bb-Db-F-A"
    ],
    emotionalCharacter: {
        color: "warm chocolate brown / rich burgundy",
        feelings: ["intense", "moody", "lush", "romantic"],
        commonGenres: ["Jazz", "Film Score", "Soul", "Classical", "Pop"]
    }
};

export default bbMinor;