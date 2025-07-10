const gbMajor = {
    scaleNotes: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
    scales: {
        Major: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
        Minor: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],
        MajorPentatonic: ["Gb", "Ab", "Bb", "Db", "Eb"],
        MinorPentatonic: ["Eb", "Gb", "Ab", "Bb", "Db"],
        Blues: ["Gb", "A", "Cb", "C", "Db", "E"],
        HarmonicMinor: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "D"],
        MelodicMinorAscending: ["Eb", "F", "Gb", "Ab", "Bb", "C", "D"]
    },
    parallelMinor: "Gb Minor",
    triads: [
        {
            type: "Major",
            name: "Gb",
            root: ["Gb", "Bb", "Db"],
            inv1: ["Bb", "Db", "Gb"],
            inv2: ["Db", "Gb", "Bb"]
        },
        {
            type: "Minor",
            name: "Gbm",
            root: ["Gb", "A", "Db"],
            inv1: ["A", "Db", "Gb"],
            inv2: ["Db", "Gb", "A"]
        }
    ],
    sevenths: [
        {
            name: "Gbmaj7",
            root: ["Gb", "Bb", "Db", "F"],
            inv1: ["Bb", "Db", "F", "Gb"],
            inv2: ["Db", "F", "Gb", "Bb"],
            inv3: ["F", "Gb", "Bb", "Db"]
        }
    ],
    extendedChords: [
        { name: "Gbmaj9", notes: ["Gb", "Bb", "Db", "F", "Ab"] },
        { name: "Gb9", notes: ["Gb", "Bb", "Db", "E", "Ab"] },
        { name: "Gb11", notes: ["Gb", "Bb", "Db", "E", "Ab", "Cb"] },
        { name: "Gb13", notes: ["Gb", "Bb", "Db", "E", "Ab", "Cb", "Eb"] },
        { name: "Gbmin9", notes: ["Gb", "A", "Db", "E", "Ab"] },
        { name: "Gbmin11", notes: ["Gb", "A", "Db", "E", "Ab", "Cb"] },
        { name: "Gbmin13", notes: ["Gb", "A", "Db", "E", "Ab", "Cb", "Eb"] },
        { name: "Gb7b9", notes: ["Gb", "Bb", "Db", "E", "G"] },
        { name: "Gb7#9", notes: ["Gb", "Bb", "Db", "E", "A"] },
        { name: "Gb7#11", notes: ["Gb", "Bb", "Db", "E", "B"] }
    ],
    insaneChords: [
        { name: "Gb13b9#11", notes: ["Gb", "Bb", "Db", "E", "G", "B", "Eb"] },
        { name: "Gb7alt", notes: ["Gb", "Bb", "Db", "E", "G", "A", "B"] },
        { name: "Gbmaj7#11", notes: ["Gb", "Bb", "Db", "F", "B"] },
        { name: "Gb7#5#9", notes: ["Gb", "Bb", "D", "E", "A"] },
        { name: "Gb7b5b9", notes: ["Gb", "Bb", "C", "E", "G"] },
        { name: "Gbdim7add13", notes: ["Gb", "A", "C", "Eb", "F", "Ab", "Cb", "Eb"] }
    ],
    commonProgressions: {
        Pop: [
            "I - IV - V → Gb - Cb - Db",
            "I - V - vi - IV - V → Gb - Db - Ebm - Cb - Db"
        ],
        Jazz: [
            "ii - V - I → Abm - Db7 - Gb",
            "ii7 - V7 - Imaj7 - VI7 - ii7 → Abm7 - Db7 - Gbmaj7 - Bb7 - Abm7",
            "iii7 - VI7 - ii7 - V7 - Imaj7 → Bbm7 - Eb7 - Abm7 - Db7 - Gbmaj7"
        ],
        Funk: [
            "I7 - IV7 - V7 - IV7 - I7 → Gb7 - Cb7 - Db7 - Cb7 - Gb7",
            "I9 - bVII9 - IV9 - V9 - I9 → Gb9 - Fb9 - Cb9 - Db9 - Gb9"
        ],
        RnB: [
            "Imaj7 - iii7 - vi7 - II7 - V7 → Gbmaj7 - Bbm7 - Ebm7 - Ab7 - Db7"
        ],
        Latin: [
            "Imaj7 - bIII7 - ii7 - V7 - Imaj7 → Gbmaj7 - A7 - Abm7 - Db7 - Gbmaj7"
        ],
        Synthwave: [
            "vi - IV - I - V → Ebm - Cb - Gb - Db",
            "i - VI - III - VII → Ebm - Cb - Gb - Db",
            "I - iii - vi - IV → Gb - Bbm - Ebm - Cb",
            "i - VII - VI - VII → Ebm - Db - Cb - Db",
            "I - V - IV - V → Gb - Db - Cb - Db",
            "vi - V - IV - V → Ebm - Db - Cb - Db"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Gbm - A - Db",
            "Hirano → bVI - bVII - I → A - B - Gb",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Cbmaj7 - Db7 - Bbm7 - Ebm7",
            "Haru no Hi → bVImaj7 - bVII - Imaj7 → Amaj7 - B - Gbmaj7",
            "Evangelion Ending → ii - V - iii - VI → Abm7 - Db7 - Bbm7 - Eb7",
            "Natsukashii → Imaj7 - iii7 - vi7 - II7 → Gbmaj7 - Bbm7 - Ebm7 - Ab7",
            "J-Rock Minor Lift → iv - V - bVI - V → Gbm - Db - D - Db"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Cbmaj7 - Db7 - Bbm7 - Ebm7",
            "Imaj7 - bIII7 - ii7 - V7 → Gbmaj7 - A7 - Abm7 - Db7",
            "I - V - vi - IV → Gb - Db - Ebm - Cb",
            "Imaj7 - VI7 - ii7 - V7 → Gbmaj7 - Bb7 - Abm7 - Db7"
        ],
        KPop: [
            "Imaj7 - iii7 - vi7 - IVmaj7 → Gbmaj7 - Bbm7 - Ebm7 - Cbmaj7",
            "vi - IV - I - V → Ebm - Cb - Gb - Db",
            "I - V/vi - vi - IV → Gb - Bb7 - Ebm - Cb",
            "I - V - IV - V → Gb - Db - Cb - Db"
        ],
        AnimeBallad: [
            "vi - IV - I - V → Ebm - Cb - Gb - Db",
            "I - V/vi - vi - IV → Gb - Bb7 - Ebm - Cb",
            "IV - V - iii - vi → Cb - Db - Bbm - Ebm",
            "I - iii - IV - V → Gb - Bbm - Cb - Db",
            "Imaj7 - iii7 - vi7 - IVmaj7 → Gbmaj7 - Bbm7 - Ebm7 - Cbmaj7",
            "ii7 - V7 - Imaj7 - vi7 → Abm7 - Db7 - Gbmaj7 - Ebm7",
            "Imaj7 - vi7 - IVmaj7 - V7 → Gbmaj7 - Ebm7 - Cbmaj7 - Db7"
        ]
    },
    chordFunctions: [
        { degree: "I", chord: "Gbmaj" },
        { degree: "ii", chord: "Abm" },
        { degree: "iii", chord: "Bbm" },
        { degree: "IV", chord: "Cbmaj" },
        { degree: "V", chord: "Dbmaj" },
        { degree: "vi", chord: "Ebm" },
        { degree: "vii°", chord: "Fdim" },
        { degree: "bIII", chord: "Amaj" },
        { degree: "bVI", chord: "Dmaj" },
        { degree: "bVII", chord: "Emaj" },
        { degree: "bVII9", chord: "E9" },
        { degree: "VI7", chord: "Eb7" },
        { degree: "II7", chord: "Ab7" }
    ],
    substitutions: [
        "Db7 → G7 (tritone)",
        "Bbm → Gbmaj7 (relative)"
    ],
    nextChords: ["Ebm", "Cb", "Db", "Bbm", "E"],
    parallelMinorChords: [
        {
            name: "Gbm",
            notes: ["Gb", "A", "Db"]
        }
    ],
    circleOfFifths: {
        relativeMinor: "Eb Minor",
        parallelMinor: "Gb Minor",
        dominantKey: "Db Major",
        subdominantKey: "Cb Major",
        closelyRelatedKeys: ["Db Major", "Cb Major", "Eb Minor", "Bb Minor", "Bbm", "Fb Major"],
        distantKeys: ["A Major", "E Major", "B Major"]
    },
    modes: {
        Ionian: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
        Dorian: ["Ab", "Bb", "Cb", "Db", "Eb", "F", "Gb"],
        Phrygian: ["Bb", "Cb", "Db", "Eb", "F", "Gb", "Ab"],
        Lydian: ["Cb", "Db", "Eb", "F", "Gb", "Ab", "Bb"],
        Mixolydian: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "Cb"],
        Aeolian: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],
        Locrian: ["F", "Gb", "Ab", "Bb", "Cb", "Db", "Eb"]
    },
    chordSpellingQuickRef: [
        "Gbmaj7 = Gb-Bb-Db-F",
        "Gbm7 = Gb-A-Db-E"
    ],
    emotionalCharacter: {
        color: "teal / cool jade",
        feelings: ["lush", "introspective", "velvety", "mysterious"],
        commonGenres: ["Soul", "Jazz", "Orchestral", "Pop"]
    }
};

export default gbMajor;