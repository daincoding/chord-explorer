const dbMinor = {
    scaleNotes: ["Db", "Eb", "Fb", "Gb", "Ab", "Bbb", "Cb"],
    scales: {
        NaturalMinor: ["Db", "Eb", "Fb", "Gb", "Ab", "Bbb", "Cb"],
        HarmonicMinor: ["Db", "Eb", "Fb", "Gb", "Ab", "Bbb", "C"],
        MelodicMinorAscending: ["Db", "Eb", "Fb", "Gb", "Ab", "Bb", "C"],
        MelodicMinorDescending: ["Db", "Cb", "Bbb", "Ab", "Gb", "Fb", "Eb"],
        MinorPentatonic: ["Db", "Fb", "Gb", "Ab", "Cb"],
        Blues: ["Db", "Fb", "Gb", "G", "Ab", "Cb"]
    },
    parallelMajor: "Db Major",
    triads: [
        {
            type: "Minor",
            name: "Dbm",
            root: ["Db", "Fb", "Ab"],
            inv1: ["Fb", "Ab", "Db"],
            inv2: ["Ab", "Db", "Fb"]
        },
        {
            type: "Major",
            name: "Db",
            root: ["Db", "F", "Ab"],
            inv1: ["F", "Ab", "Db"],
            inv2: ["Ab", "Db", "F"]
        }
    ],
    sevenths: [
        {
            name: "Dbm7",
            root: ["Db", "Fb", "Ab", "Cb"],
            inv1: ["Fb", "Ab", "Cb", "Db"],
            inv2: ["Ab", "Cb", "Db", "Fb"],
            inv3: ["Cb", "Db", "Fb", "Ab"]
        },
        {
            name: "Dbm(maj7)",
            root: ["Db", "Fb", "Ab", "C"],
            inv1: ["Fb", "Ab", "C", "Db"],
            inv2: ["Ab", "C", "Db", "Fb"],
            inv3: ["C", "Db", "Fb", "Ab"]
        }
    ],
    extendedChords: [
        { name: "Dbm9", notes: ["Db", "Fb", "Ab", "Cb", "Eb"] },
        { name: "Dbm11", notes: ["Db", "Fb", "Ab", "Cb", "Eb", "Gb"] },
        { name: "Dbm13", notes: ["Db", "Fb", "Ab", "Cb", "Eb", "Gb", "Bb"] },
        { name: "Db7b9", notes: ["Db", "F", "Ab", "Cb", "Ebb"] },
        { name: "Db7#9", notes: ["Db", "F", "Ab", "Cb", "E"] },
        { name: "Db7#11", notes: ["Db", "F", "Ab", "Cb", "G"] }
    ],
    insaneChords: [
        { name: "Dbm13b9#11", notes: ["Db", "Fb", "Ab", "Cb", "Ebb", "G", "Bb"] },
        { name: "Db7alt", notes: ["Db", "F", "Ab", "Cb", "Ebb", "E", "G"] },
        { name: "Dbm(maj7)#11", notes: ["Db", "Fb", "Ab", "C", "G"] },
        { name: "Db7#5#9", notes: ["Db", "F", "A", "Cb", "E"] },
        { name: "Db7b5b9", notes: ["Db", "F", "Abb", "Cb", "Ebb"] },
        { name: "Dbdim7add13", notes: ["Db", "Fb", "Abb", "Bbb", "C", "Eb", "Gb", "Bbb"] }
    ],
    commonProgressions: {
        Pop: [
            "i - VI - III - VII → Dbm - Bbb - Fb - Cb",
            "i - iv - v - i → Dbm - Gbm - Abm - Dbm"
        ],
        Jazz: [
            "iiø7 - V7 - i → Ebm7b5 - Ab7 - Dbm",
            "i - VI7 - iiø7 - V7 → Dbm - Bbb7 - Ebm7b5 - Ab7",
            "iii7b5 - VI7 - iiø7 - V7 - i → Fm7b5 - Bb7 - Ebm7b5 - Ab7 - Dbm"
        ],
        Funk: [
            "i7 - iv7 - V7 - iv7 - i7 → Dbm7 - Gbm7 - Ab7 - Gbm7 - Dbm7",
            "i9 - bVII9 - iv9 - V9 - i9 → Dbm9 - Cb9 - Gbm9 - Ab9 - Dbm9"
        ],
        RnB: [
            "i(maj7) - iii7 - vi7 - II7 - V7 → Dbm(maj7) - Fm7 - Bbm7 - Eb7 - Ab7"
        ],
        Latin: [
            "i(maj7) - bIII7 - iiø7 - V7 - i(maj7) → Dbm(maj7) - Fb7 - Ebm7b5 - Ab7 - Dbm(maj7)"
        ],
        Synthwave: [
            "i - VI - III - VII → Dbm - Bbb - Fb - Cb",
            "i - VII - VI - VII → Dbm - Cb - Bbb - Cb",
            "i - v - iv - VII → Dbm - Abm - Gbm - Cb"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Gbm - Bbb - Ab",
            "Hirano → bVI - bVII - i → Bbb - Cb - Dbm",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Gbmaj7 - Ab7 - Fm7 - Bbm7",
            "Haru no Hi → bVImaj7 - bVII - i(maj7) → Bbbmaj7 - Cb - Dbm(maj7)",
            "Evangelion Ending → ii - V - iii - VI → Ebm7b5 - Ab7 - Fm7 - Bb7",
            "Natsukashii → i(maj7) - iii7 - vi7 - II7 → Dbm(maj7) - Fm7 - Bbm7 - Eb7",
            "J-Rock Minor Lift → iv - V - bVI - V → Gbm - Ab - Bbb - Ab"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Gbmaj7 - Ab7 - Fm7 - Bbm7",
            "i(maj7) - bIII7 - iiø7 - V7 → Dbm(maj7) - Fb7 - Ebm7b5 - Ab7",
            "i - v - VI - VII → Dbm - Abm - Bbb - Cb"
        ],
        KPop: [
            "i(maj7) - iii7 - vi7 - IVmaj7 → Dbm(maj7) - Fm7 - Bbm7 - Gbmaj7",
            "vi - IV - i - V → Bbm - Gb - Dbm - Ab",
            "i - V/vi - vi - IV → Dbm - Ab7 - Bbm - Gb",
            "i - V - IV - V → Dbm - Ab - Gb - Ab"
        ],
        AnimeBallad: [
            "vi - IV - i - V → Bbm - Gb - Dbm - Ab",
            "i - V/vi - vi - IV → Dbm - Ab7 - Bbm - Gb",
            "IV - V - iii - vi → Gb - Ab - Fm - Bbm",
            "i - iii - IV - V → Dbm - Fm - Gb - Ab",
            "i(maj7) - iii7 - vi7 - IVmaj7 → Dbm(maj7) - Fm7 - Bbm7 - Gbmaj7",
            "iiø7 - V7 - i(maj7) - vi7 → Ebm7b5 - Ab7 - Dbm(maj7) - Bbm7",
            "i(maj7) - vi7 - IVmaj7 - V7 → Dbm(maj7) - Bbm7 - Gbmaj7 - Ab7"
        ]
    },
    chordFunctions: [
        { degree: "i", chord: "Dbm" },
        { degree: "ii°", chord: "Ebdim" },
        { degree: "III", chord: "Fbmaj" },
        { degree: "iv", chord: "Gbm" },
        { degree: "v", chord: "Abm" },
        { degree: "VI", chord: "Bbbmaj" },
        { degree: "VII", chord: "Cbmaj" },
        { degree: "bIII", chord: "Fbmaj" },
        { degree: "bVI", chord: "Bbbmaj" },
        { degree: "bVII", chord: "Cbmaj" },
        { degree: "bVII9", chord: "Cb9" },
        { degree: "VI7", chord: "Bbb7" },
        { degree: "II7", chord: "Eb7" }
    ],
    substitutions: [
        "Ab7 → D7 (tritone)",
        "Fb → Dbm(maj7) (relative)"
    ],
    nextChords: ["Gbm", "Bbb", "Cb", "Fb", "Abm"],
    parallelMajorChords: [
        {
            name: "Db",
            notes: ["Db", "F", "Ab"]
        }
    ],
    circleOfFifths: {
        relativeMajor: "Fb Major",
        parallelMajor: "Db Major",
        dominantKey: "Ab Minor",
        subdominantKey: "Gbm",
        closelyRelatedKeys: ["Fb Major", "Ab Minor", "Bbb Major", "Cb Major", "Gbm"],
        distantKeys: ["E Major", "B Major", "A Major"]
    },
    modes: {
        Aeolian: ["Db", "Eb", "Fb", "Gb", "Ab", "Bbb", "Cb"],
        Dorian: ["Eb", "Fb", "Gb", "Ab", "Bb", "Cb", "Db"],
        Phrygian: ["Fb", "Gb", "Ab", "Bbb", "Cb", "Db", "Eb"],
        Lydian: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
        Mixolydian: ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb"],
        Ionian: ["Fb", "Gb", "Ab", "Bbb", "Cb", "Db", "Eb"],
        Locrian: ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"]
    },
    chordSpellingQuickRef: [
        "Dbm7 = Db-Fb-Ab-Cb",
        "Dbm(maj7) = Db-Fb-Ab-C"
    ],
    emotionalCharacter: {
        color: "smoky slate / dark charcoal",
        feelings: ["mysterious", "complex", "sophisticated", "brooding"],
        commonGenres: ["Jazz", "Film Score", "Classical", "Experimental"]
    }
};

export default dbMinor;