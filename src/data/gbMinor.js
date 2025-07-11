const gbMinor = {
    scaleNotes: ["Gb", "Ab", "Bbb", "Cb", "Db", "Ebb", "Fb"],
    scales: {
        NaturalMinor: ["Gb", "Ab", "Bbb", "Cb", "Db", "Ebb", "Fb"],
        HarmonicMinor: ["Gb", "Ab", "Bbb", "Cb", "Db", "Ebb", "F"],
        MelodicMinorAscending: ["Gb", "Ab", "Bbb", "Cb", "Db", "Eb", "F"],
        MelodicMinorDescending: ["Gb", "Fb", "Ebb", "Db", "Cb", "Bbb", "Ab"],
        MinorPentatonic: ["Gb", "Bbb", "Cb", "Db", "Fb"],
        Blues: ["Gb", "Bbb", "Cb", "C", "Db", "Fb"]
    },
    parallelMajor: "Gb Major",
    triads: [
        {
            type: "Minor",
            name: "Gbm",
            root: ["Gb", "Bbb", "Db"],
            inv1: ["Bbb", "Db", "Gb"],
            inv2: ["Db", "Gb", "Bbb"]
        },
        {
            type: "Major",
            name: "Gb",
            root: ["Gb", "Bb", "Db"],
            inv1: ["Bb", "Db", "Gb"],
            inv2: ["Db", "Gb", "Bb"]
        }
    ],
    sevenths: [
        {
            name: "Gbm7",
            root: ["Gb", "Bbb", "Db", "Fb"],
            inv1: ["Bbb", "Db", "Fb", "Gb"],
            inv2: ["Db", "Fb", "Gb", "Bbb"],
            inv3: ["Fb", "Gb", "Bbb", "Db"]
        },
        {
            name: "Gbm(maj7)",
            root: ["Gb", "Bbb", "Db", "F"],
            inv1: ["Bbb", "Db", "F", "Gb"],
            inv2: ["Db", "F", "Gb", "Bbb"],
            inv3: ["F", "Gb", "Bbb", "Db"]
        }
    ],
    extendedChords: [
        { name: "Gbm9", notes: ["Gb", "Bbb", "Db", "Fb", "Ab"] },
        { name: "Gbm11", notes: ["Gb", "Bbb", "Db", "Fb", "Ab", "Cb"] },
        { name: "Gbm13", notes: ["Gb", "Bbb", "Db", "Fb", "Ab", "Cb", "Eb"] },
        { name: "Gb7b9", notes: ["Gb", "Bb", "Db", "Fb", "Abb"] },
        { name: "Gb7#9", notes: ["Gb", "Bb", "Db", "Fb", "A"] },
        { name: "Gb7#11", notes: ["Gb", "Bb", "Db", "Fb", "C"] }
    ],
    insaneChords: [
        { name: "Gbm13b9#11", notes: ["Gb", "Bbb", "Db", "Fb", "Abb", "C", "Eb"] },
        { name: "Gb7alt", notes: ["Gb", "Bb", "Db", "Fb", "Abb", "A", "C"] },
        { name: "Gbm(maj7)#11", notes: ["Gb", "Bbb", "Db", "F", "C"] },
        { name: "Gb7#5#9", notes: ["Gb", "Bb", "D", "Fb", "A"] },
        { name: "Gb7b5b9", notes: ["Gb", "Bb", "C", "Fb", "Abb"] },
        { name: "Gbdim7add13", notes: ["Gb", "Bbb", "Dbb", "Ebb", "F", "Ab", "Cb", "Ebb"] }
    ],
    commonProgressions: {
        Pop: [
            "i - VI - III - VII → Gbm - Ebb - Bbb - Fb",
            "i - iv - v - i → Gbm - Cbm - Dbm - Gbm"
        ],
        Jazz: [
            "iiø7 - V7 - i → Abm7b5 - Db7 - Gbm",
            "i - VI7 - iiø7 - V7 → Gbm - Ebb7 - Abm7b5 - Db7",
            "iii7b5 - VI7 - iiø7 - V7 - i → Bbm7b5 - Eb7 - Abm7b5 - Db7 - Gbm"
        ],
        Funk: [
            "i7 - iv7 - V7 - iv7 - i7 → Gbm7 - Cbm7 - Db7 - Cbm7 - Gbm7",
            "i9 - bVII9 - iv9 - V9 - i9 → Gbm9 - Fb9 - Cbm9 - Db9 - Gbm9"
        ],
        RnB: [
            "i(maj7) - iii7 - vi7 - II7 - V7 → Gbm(maj7) - Bbm7 - Ebm7 - Ab7 - Db7"
        ],
        Latin: [
            "i(maj7) - bIII7 - iiø7 - V7 - i(maj7) → Gbm(maj7) - Bbb7 - Abm7b5 - Db7 - Gbm(maj7)"
        ],
        Synthwave: [
            "i - VI - III - VII → Gbm - Ebb - Bbb - Fb",
            "i - VII - VI - VII → Gbm - Fb - Ebb - Fb",
            "i - v - iv - VII → Gbm - Dbm - Cbm - Fb"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Cbm - Ebb - Db",
            "Hirano → bVI - bVII - i → Ebb - Fb - Gbm",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Cbmaj7 - Db7 - Bbm7 - Ebm7",
            "Haru no Hi → bVImaj7 - bVII - i(maj7) → Ebbmaj7 - Fb - Gbm(maj7)",
            "Evangelion Ending → ii - V - iii - VI → Abm7b5 - Db7 - Bbm7 - Eb7",
            "Natsukashii → i(maj7) - iii7 - vi7 - II7 → Gbm(maj7) - Bbm7 - Ebm7 - Ab7",
            "J-Rock Minor Lift → iv - V - bVI - V → Cbm - Db - Ebb - Db"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Cbmaj7 - Db7 - Bbm7 - Ebm7",
            "i(maj7) - bIII7 - iiø7 - V7 → Gbm(maj7) - Bbb7 - Abm7b5 - Db7",
            "i - v - VI - VII → Gbm - Dbm - Ebb - Fb"
        ],
        KPop: [
            "i(maj7) - iii7 - vi7 - IVmaj7 → Gbm(maj7) - Bbm7 - Ebm7 - Cbmaj7",
            "vi - IV - i - V → Ebm - Cb - Gbm - Db",
            "i - V/vi - vi - IV → Gbm - Db7 - Ebm - Cb",
            "i - V - IV - V → Gbm - Db - Cb - Db"
        ],
        AnimeBallad: [
            "vi - IV - i - V → Ebm - Cb - Gbm - Db",
            "i - V/vi - vi - IV → Gbm - Db7 - Ebm - Cb",
            "IV - V - iii - vi → Cb - Db - Bbm - Ebm",
            "i - iii - IV - V → Gbm - Bbm - Cb - Db",
            "i(maj7) - iii7 - vi7 - IVmaj7 → Gbm(maj7) - Bbm7 - Ebm7 - Cbmaj7",
            "iiø7 - V7 - i(maj7) - vi7 → Abm7b5 - Db7 - Gbm(maj7) - Ebm7",
            "i(maj7) - vi7 - IVmaj7 - V7 → Gbm(maj7) - Ebm7 - Cbmaj7 - Db7"
        ]
    },
    chordFunctions: [
        { degree: "i", chord: "Gbm" },
        { degree: "ii°", chord: "Abdim" },
        { degree: "III", chord: "Bbbmaj" },
        { degree: "iv", chord: "Cbm" },
        { degree: "v", chord: "Dbm" },
        { degree: "VI", chord: "Ebbmaj" },
        { degree: "VII", chord: "Fbmaj" },
        { degree: "bIII", chord: "Bbbmaj" },
        { degree: "bVI", chord: "Ebbmaj" },
        { degree: "bVII", chord: "Fbmaj" },
        { degree: "bVII9", chord: "Fb9" },
        { degree: "VI7", chord: "Ebb7" },
        { degree: "II7", chord: "Ab7" }
    ],
    substitutions: [
        "Db7 → G7 (tritone)",
        "Bbb → Gbm(maj7) (relative)"
    ],
    nextChords: ["Cbm", "Ebb", "Fb", "Bbb", "Dbm"],
    parallelMajorChords: [
        {
            name: "Gb",
            notes: ["Gb", "Bb", "Db"]
        }
    ],
    circleOfFifths: {
        relativeMajor: "Bbb Major",
        parallelMajor: "Gb Major",
        dominantKey: "Db Minor",
        subdominantKey: "Cbm",
        closelyRelatedKeys: ["Bbb Major", "Db Minor", "Ebb Major", "Fb Major", "Cbm"],
        distantKeys: ["E Major", "B Major", "A Major"]
    },
    modes: {
        Aeolian: ["Gb", "Ab", "Bbb", "Cb", "Db", "Ebb", "Fb"],
        Dorian: ["Ab", "Bbb", "Cb", "Db", "Eb", "Fb", "Gb"],
        Phrygian: ["Bbb", "Cb", "Db", "Ebb", "Fb", "Gb", "Ab"],
        Lydian: ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
        Mixolydian: ["Db", "Eb", "Fb", "Gb", "Ab", "Bbb", "Cb"],
        Ionian: ["Bbb", "Cb", "Db", "Ebb", "Fb", "Gb", "Ab"],
        Locrian: ["Fb", "Gb", "Ab", "Bbb", "Cb", "Db", "Eb"]
    },
    chordSpellingQuickRef: [
        "Gbm7 = Gb-Bbb-Db-Fb",
        "Gbm(maj7) = Gb-Bbb-Db-F"
    ],
    emotionalCharacter: {
        color: "deep slate / steel grey",
        feelings: ["mysterious", "dark", "serious", "refined"],
        commonGenres: ["Jazz", "Film Score", "Experimental", "Classical"]
    }
};

export default gbMinor;