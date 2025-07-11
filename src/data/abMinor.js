const abMinor = {
    scaleNotes: ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb"],
    scales: {
        NaturalMinor: ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb"],
        HarmonicMinor: ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "G"],
        MelodicMinorAscending: ["Ab", "Bb", "Cb", "Db", "Eb", "F", "G"],
        MelodicMinorDescending: ["Ab", "Gb", "Fb", "Eb", "Db", "Cb", "Bb"],
        MinorPentatonic: ["Ab", "Cb", "Db", "Eb", "Gb"],
        Blues: ["Ab", "Cb", "Db", "D", "Eb", "Gb"]
    },
    parallelMajor: "Ab Major",
    triads: [
        {
            type: "Minor",
            name: "Abm",
            root: ["Ab", "Cb", "Eb"],
            inv1: ["Cb", "Eb", "Ab"],
            inv2: ["Eb", "Ab", "Cb"]
        },
        {
            type: "Major",
            name: "Ab",
            root: ["Ab", "C", "Eb"],
            inv1: ["C", "Eb", "Ab"],
            inv2: ["Eb", "Ab", "C"]
        }
    ],
    sevenths: [
        {
            name: "Abm7",
            root: ["Ab", "Cb", "Eb", "Gb"],
            inv1: ["Cb", "Eb", "Gb", "Ab"],
            inv2: ["Eb", "Gb", "Ab", "Cb"],
            inv3: ["Gb", "Ab", "Cb", "Eb"]
        },
        {
            name: "Abm(maj7)",
            root: ["Ab", "Cb", "Eb", "G"],
            inv1: ["Cb", "Eb", "G", "Ab"],
            inv2: ["Eb", "G", "Ab", "Cb"],
            inv3: ["G", "Ab", "Cb", "Eb"]
        }
    ],
    extendedChords: [
        { name: "Abm9", notes: ["Ab", "Cb", "Eb", "Gb", "Bb"] },
        { name: "Abm11", notes: ["Ab", "Cb", "Eb", "Gb", "Bb", "Db"] },
        { name: "Abm13", notes: ["Ab", "Cb", "Eb", "Gb", "Bb", "Db", "F"] },
        { name: "Ab7b9", notes: ["Ab", "C", "Eb", "Gb", "Bbb"] },
        { name: "Ab7#9", notes: ["Ab", "C", "Eb", "Gb", "B"] },
        { name: "Ab7#11", notes: ["Ab", "C", "Eb", "Gb", "D"] }
    ],
    insaneChords: [
        { name: "Abm13b9#11", notes: ["Ab", "Cb", "Eb", "Gb", "Bbb", "D", "F"] },
        { name: "Ab7alt", notes: ["Ab", "C", "Eb", "Gb", "Bbb", "B", "D"] },
        { name: "Abm(maj7)#11", notes: ["Ab", "Cb", "Eb", "G", "D"] },
        { name: "Ab7#5#9", notes: ["Ab", "C", "E", "Gb", "B"] },
        { name: "Ab7b5b9", notes: ["Ab", "C", "Ebb", "Gb", "Bbb"] },
        { name: "Abdim7add13", notes: ["Ab", "Cb", "Ebb", "F", "G", "Bb", "Db", "F"] }
    ],
    commonProgressions: {
        Pop: [
            "i - VI - III - VII → Abm - Fb - Cb - Gb",
            "i - iv - v - i → Abm - Dbm - Ebm - Abm"
        ],
        Jazz: [
            "iiø7 - V7 - i → Bbm7b5 - Eb7 - Abm",
            "i - VI7 - iiø7 - V7 → Abm - Fb7 - Bbm7b5 - Eb7",
            "iii7b5 - VI7 - iiø7 - V7 - i → Cm7b5 - F7 - Bbm7b5 - Eb7 - Abm"
        ],
        Funk: [
            "i7 - iv7 - V7 - iv7 - i7 → Abm7 - Dbm7 - Eb7 - Dbm7 - Abm7",
            "i9 - bVII9 - iv9 - V9 - i9 → Abm9 - Gb9 - Dbm9 - Eb9 - Abm9"
        ],
        RnB: [
            "i(maj7) - iii7 - vi7 - II7 - V7 → Abm(maj7) - Cm7 - Fm7 - Bb7 - Eb7"
        ],
        Latin: [
            "i(maj7) - bIII7 - iiø7 - V7 - i(maj7) → Abm(maj7) - Cb7 - Bbm7b5 - Eb7 - Abm(maj7)"
        ],
        Synthwave: [
            "i - VI - III - VII → Abm - Fb - Cb - Gb",
            "i - VII - VI - VII → Abm - Gb - Fb - Gb",
            "i - v - iv - VII → Abm - Ebm - Dbm - Gb"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Dbm - Fb - Eb",
            "Hirano → bVI - bVII - i → Fb - Gb - Abm",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Dbmaj7 - Eb7 - Cm7 - Fm7",
            "Haru no Hi → bVImaj7 - bVII - i(maj7) → Fbmaj7 - Gb - Abm(maj7)",
            "Evangelion Ending → ii - V - iii - VI → Bbm7b5 - Eb7 - Cm7 - F7",
            "Natsukashii → i(maj7) - iii7 - vi7 - II7 → Abm(maj7) - Cm7 - Fm7 - Bb7",
            "J-Rock Minor Lift → iv - V - bVI - V → Dbm - Eb - Fb - Eb"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Dbmaj7 - Eb7 - Cm7 - Fm7",
            "i(maj7) - bIII7 - iiø7 - V7 → Abm(maj7) - Cb7 - Bbm7b5 - Eb7",
            "i - v - VI - VII → Abm - Ebm - Fb - Gb"
        ],
        KPop: [
            "i(maj7) - iii7 - vi7 - IVmaj7 → Abm(maj7) - Cm7 - Fm7 - Dbmaj7",
            "vi - IV - i - V → Fm - Db - Abm - Eb",
            "i - V/vi - vi - IV → Abm - Eb7 - Fm - Db",
            "i - V - IV - V → Abm - Eb - Db - Eb"
        ],
        AnimeBallad: [
            "vi - IV - i - V → Fm - Db - Abm - Eb",
            "i - V/vi - vi - IV → Abm - Eb7 - Fm - Db",
            "IV - V - iii - vi → Db - Eb - Cm - Fm",
            "i - iii - IV - V → Abm - Cm - Db - Eb",
            "i(maj7) - iii7 - vi7 - IVmaj7 → Abm(maj7) - Cm7 - Fm7 - Dbmaj7",
            "iiø7 - V7 - i(maj7) - vi7 → Bbm7b5 - Eb7 - Abm(maj7) - Fm7",
            "i(maj7) - vi7 - IVmaj7 - V7 → Abm(maj7) - Fm7 - Dbmaj7 - Eb7"
        ]
    },
    chordFunctions: [
        { degree: "i", chord: "Abm" },
        { degree: "ii°", chord: "Bbdim" },
        { degree: "III", chord: "Cbmaj" },
        { degree: "iv", chord: "Dbm" },
        { degree: "v", chord: "Ebm" },
        { degree: "VI", chord: "Fbmaj" },
        { degree: "VII", chord: "Gbmaj" },
        { degree: "bIII", chord: "Cbmaj" },
        { degree: "bVI", chord: "Fbmaj" },
        { degree: "bVII", chord: "Gbmaj" },
        { degree: "bVII9", chord: "Gb9" },
        { degree: "VI7", chord: "Fb7" },
        { degree: "II7", chord: "Bb7" }
    ],
    substitutions: [
        "Eb7 → Bb7 (tritone)",
        "Cb → Abm(maj7) (relative)"
    ],
    nextChords: ["Dbm", "Fb", "Gb", "Cb", "Ebm"],
    parallelMajorChords: [
        {
            name: "Ab",
            notes: ["Ab", "C", "Eb"]
        }
    ],
    circleOfFifths: {
        relativeMajor: "Cb Major",
        parallelMajor: "Ab Major",
        dominantKey: "Eb Minor",
        subdominantKey: "Db Minor",
        closelyRelatedKeys: ["Cb Major", "Eb Minor", "Fb Major", "Gb Major", "Db Minor"],
        distantKeys: ["D Major", "A Major", "E Major"]
    },
    modes: {
        Aeolian: ["Ab", "Bb", "Cb", "Db", "Eb", "Fb", "Gb"],
        Dorian: ["Bb", "Cb", "Db", "Eb", "F", "Gb", "Ab"],
        Phrygian: ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
        Lydian: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
        Mixolydian: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],
        Ionian: ["Cb", "Db", "Eb", "Fb", "Gb", "Ab", "Bb"],
        Locrian: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "Fb"]
    },
    chordSpellingQuickRef: [
        "Abm7 = Ab-Cb-Eb-Gb",
        "Abm(maj7) = Ab-Cb-Eb-G"
    ],
    emotionalCharacter: {
        color: "deep plum / twilight violet",
        feelings: ["dark", "mysterious", "emotional", "dreamy"],
        commonGenres: ["Jazz", "Film Score", "Classical", "Soul", "Electronic"]
    }
};

export default abMinor;