const dbMajor = {
    scaleNotes: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
    scales: {
        Major: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
        Minor: ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],
        MajorPentatonic: ["Db", "Eb", "F", "Ab", "Bb"],
        MinorPentatonic: ["Bb", "Db", "Eb", "F", "Ab"],
        Blues: ["Db", "E", "Gb", "G", "Ab", "B"],
        HarmonicMinor: ["Bb", "C", "Db", "Eb", "F", "Gb", "A"],
        MelodicMinorAscending: ["Bb", "C", "Db", "Eb", "F", "G", "A"]
    },
    parallelMinor: "Db Minor",
    triads: [
        {
            type: "Major",
            name: "Db",
            root: ["Db", "F", "Ab"],
            inv1: ["F", "Ab", "Db"],
            inv2: ["Ab", "Db", "F"]
        },
        {
            type: "Minor",
            name: "Dbm",
            root: ["Db", "E", "Ab"],
            inv1: ["E", "Ab", "Db"],
            inv2: ["Ab", "Db", "E"]
        }
    ],
    sevenths: [
        {
            name: "Dbmaj7",
            root: ["Db", "F", "Ab", "C"],
            inv1: ["F", "Ab", "C", "Db"],
            inv2: ["Ab", "C", "Db", "F"],
            inv3: ["C", "Db", "F", "Ab"]
        }
    ],
    extendedChords: [
        { name: "Dbmaj9", notes: ["Db", "F", "Ab", "C", "Eb"] },
        { name: "Db9", notes: ["Db", "F", "Ab", "B", "Eb"] },
        { name: "Db11", notes: ["Db", "F", "Ab", "B", "Eb", "Gb"] },
        { name: "Db13", notes: ["Db", "F", "Ab", "B", "Eb", "Gb", "Bb"] },
        { name: "Dbmin9", notes: ["Db", "E", "Ab", "B", "Eb"] },
        { name: "Dbmin11", notes: ["Db", "E", "Ab", "B", "Eb", "Gb"] },
        { name: "Dbmin13", notes: ["Db", "E", "Ab", "B", "Eb", "Gb", "Bb"] },
        { name: "Db7b9", notes: ["Db", "F", "Ab", "B", "D"] },
        { name: "Db7#9", notes: ["Db", "F", "Ab", "B", "E"] },
        { name: "Db7#11", notes: ["Db", "F", "Ab", "B", "G"] }
    ],
    insaneChords: [
        { name: "Db13b9#11", notes: ["Db", "F", "Ab", "B", "D", "G", "Bb"] },
        { name: "Db7alt", notes: ["Db", "F", "Ab", "B", "D", "E", "G"] },
        { name: "Dbmaj7#11", notes: ["Db", "F", "Ab", "C", "G"] },
        { name: "Db7#5#9", notes: ["Db", "F", "A", "B", "E"] },
        { name: "Db7b5b9", notes: ["Db", "F", "G", "B", "D"] },
        { name: "Dbdim7add13", notes: ["Db", "E", "G", "Bb", "C", "Eb", "Gb", "Bb"] }
    ],
    commonProgressions: {
        Pop: [
            "I - IV - V → Db - Gb - Ab",
            "I - V - vi - IV - V → Db - Ab - Bbm - Gb - Ab"
        ],
        Jazz: [
            "ii - V - I → Ebm - Ab7 - Db",
            "ii7 - V7 - Imaj7 - VI7 - ii7 → Ebm7 - Ab7 - Dbmaj7 - F7 - Ebm7",
            "iii7 - VI7 - ii7 - V7 - Imaj7 → Fm7 - Bb7 - Ebm7 - Ab7 - Dbmaj7"
        ],
        Funk: [
            "I7 - IV7 - V7 - IV7 - I7 → Db7 - Gb7 - Ab7 - Gb7 - Db7",
            "I9 - bVII9 - IV9 - V9 - I9 → Db9 - B9 - Gb9 - Ab9 - Db9"
        ],
        RnB: [
            "Imaj7 - iii7 - vi7 - II7 - V7 → Dbmaj7 - Fm7 - Bbm7 - Eb7 - Ab7"
        ],
        Latin: [
            "Imaj7 - bIII7 - ii7 - V7 - Imaj7 → Dbmaj7 - E7 - Ebm7 - Ab7 - Dbmaj7"
        ],
        Synthwave: [
            "vi - IV - I - V → Bbm - Gb - Db - Ab",
            "i - VI - III - VII → Bbm - Gb - Db - Ab",
            "I - iii - vi - IV → Db - Fm - Bbm - Gb",
            "i - VII - VI - VII → Bbm - Ab - Gb - Ab",
            "I - V - IV - V → Db - Ab - Gb - Ab",
            "vi - V - IV - V → Bbm - Ab - Gb - Ab"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Dbm - E - Ab",
            "Hirano → bVI - bVII - I → E - F# - Db",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Gbmaj7 - Ab7 - Fm7 - Bbm7",
            "Haru no Hi → bVImaj7 - bVII - Imaj7 → Emaj7 - F# - Dbmaj7",
            "Evangelion Ending → ii - V - iii - VI → Ebm7 - Ab7 - Fm7 - Bb7",
            "Natsukashii → Imaj7 - iii7 - vi7 - II7 → Dbmaj7 - Fm7 - Bbm7 - Eb7",
            "J-Rock Minor Lift → iv - V - bVI - V → Dbm - Ab - A - Ab"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Gbmaj7 - Ab7 - Fm7 - Bbm7",
            "Imaj7 - bIII7 - ii7 - V7 → Dbmaj7 - E7 - Ebm7 - Ab7",
            "I - V - vi - IV → Db - Ab - Bbm - Gb",
            "Imaj7 - VI7 - ii7 - V7 → Dbmaj7 - F7 - Ebm7 - Ab7"
        ],
        KPop: [
            "Imaj7 - iii7 - vi7 - IVmaj7 → Dbmaj7 - Fm7 - Bbm7 - Gbmaj7",
            "vi - IV - I - V → Bbm - Gb - Db - Ab",
            "I - V/vi - vi - IV → Db - F7 - Bbm - Gb",
            "I - V - IV - V → Db - Ab - Gb - Ab"
        ],
        AnimeBallad: [
            "vi - IV - I - V → Bbm - Gb - Db - Ab",
            "I - V/vi - vi - IV → Db - F7 - Bbm - Gb",
            "IV - V - iii - vi → Gb - Ab - Fm - Bbm",
            "I - iii - IV - V → Db - Fm - Gb - Ab",
            "Imaj7 - iii7 - vi7 - IVmaj7 → Dbmaj7 - Fm7 - Bbm7 - Gbmaj7",
            "ii7 - V7 - Imaj7 - vi7 → Ebm7 - Ab7 - Dbmaj7 - Bbm7",
            "Imaj7 - vi7 - IVmaj7 - V7 → Dbmaj7 - Bbm7 - Gbmaj7 - Ab7"
        ]
    },
    chordFunctions: [
        { degree: "I", chord: "Dbmaj" },
        { degree: "ii", chord: "Ebm" },
        { degree: "iii", chord: "Fm" },
        { degree: "IV", chord: "Gbmaj" },
        { degree: "V", chord: "Abmaj" },
        { degree: "vi", chord: "Bbm" },
        { degree: "vii°", chord: "Cdim" },
        { degree: "bIII", chord: "Emaj" },
        { degree: "bVI", chord: "Amaj" },
        { degree: "bVII", chord: "Bmaj" },
        { degree: "bVII9", chord: "B9" },
        { degree: "VI7", chord: "Bb7" },
        { degree: "II7", chord: "Eb7" }
    ],
    substitutions: [
        "Ab7 → D7 (tritone)",
        "Fm → Dbmaj7 (relative)"
    ],
    nextChords: ["Bbm", "Gb", "Ab", "Fm", "B"],
    parallelMinorChords: [
        {
            name: "Dbm",
            notes: ["Db", "E", "Ab"]
        }
    ],
    circleOfFifths: {
        relativeMinor: "Bb Minor",
        parallelMinor: "Db Minor",
        dominantKey: "Ab Major",
        subdominantKey: "Gb Major",
        closelyRelatedKeys: ["Ab Major", "Gb Major", "Bb Minor", "Eb Minor", "Fm", "Cb Major"],
        distantKeys: ["E Major", "A Major", "B Major"]
    },
    modes: {
        Ionian: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "C"],
        Dorian: ["Eb", "F", "Gb", "Ab", "Bb", "C", "Db"],
        Phrygian: ["F", "Gb", "Ab", "Bb", "C", "Db", "Eb"],
        Lydian: ["Gb", "Ab", "Bb", "C", "Db", "Eb", "F"],
        Mixolydian: ["Ab", "Bb", "C", "Db", "Eb", "F", "Gb"],
        Aeolian: ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],
        Locrian: ["C", "Db", "Eb", "F", "Gb", "Ab", "Bb"]
    },
    chordSpellingQuickRef: [
        "Dbmaj7 = Db-F-Ab-C",
        "Dbm7 = Db-E-Ab-B"
    ],
    emotionalCharacter: {
        color: "plum / muted violet",
        feelings: ["dreamy", "soft", "romantic", "velvety"],
        commonGenres: ["Soul", "Jazz", "Pop", "Classical"]
    }
};

export default dbMajor;