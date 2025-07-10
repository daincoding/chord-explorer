const bbMajor = {
    scaleNotes: ["Bb", "C", "D", "Eb", "F", "G", "A"],
    scales: {
        Major: ["Bb", "C", "D", "Eb", "F", "G", "A"],
        Minor: ["G", "A", "Bb", "C", "D", "Eb", "F"],
        MajorPentatonic: ["Bb", "C", "D", "F", "G"],
        MinorPentatonic: ["G", "Bb", "C", "D", "F"],
        Blues: ["Bb", "Db", "Eb", "E", "F", "Ab"],
        HarmonicMinor: ["G", "A", "Bb", "C", "D", "Eb", "F#"],
        MelodicMinorAscending: ["G", "A", "Bb", "C", "D", "E", "F#"]
    },
    parallelMinor: "Bb Minor",
    triads: [
        {
            type: "Major",
            name: "Bb",
            root: ["Bb", "D", "F"],
            inv1: ["D", "F", "Bb"],
            inv2: ["F", "Bb", "D"]
        },
        {
            type: "Minor",
            name: "Bbm",
            root: ["Bb", "Db", "F"],
            inv1: ["Db", "F", "Bb"],
            inv2: ["F", "Bb", "Db"]
        }
    ],
    sevenths: [
        {
            name: "Bbmaj7",
            root: ["Bb", "D", "F", "A"],
            inv1: ["D", "F", "A", "Bb"],
            inv2: ["F", "A", "Bb", "D"],
            inv3: ["A", "Bb", "D", "F"]
        }
    ],
    extendedChords: [
        { name: "Bbmaj9", notes: ["Bb", "D", "F", "A", "C"] },
        { name: "Bb9", notes: ["Bb", "D", "F", "Ab", "C"] },
        { name: "Bb11", notes: ["Bb", "D", "F", "Ab", "C", "Eb"] },
        { name: "Bb13", notes: ["Bb", "D", "F", "Ab", "C", "Eb", "G"] },
        { name: "Bbmin9", notes: ["Bb", "Db", "F", "Ab", "C"] },
        { name: "Bbmin11", notes: ["Bb", "Db", "F", "Ab", "C", "Eb"] },
        { name: "Bbmin13", notes: ["Bb", "Db", "F", "Ab", "C", "Eb", "G"] },
        { name: "Bb7b9", notes: ["Bb", "D", "F", "Ab", "B"] },
        { name: "Bb7#9", notes: ["Bb", "D", "F", "Ab", "C#"] },
        { name: "Bb7#11", notes: ["Bb", "D", "F", "Ab", "E"] }
    ],
    insaneChords: [
        { name: "Bb13b9#11", notes: ["Bb", "D", "F", "Ab", "B", "E", "G"] },
        { name: "Bb7alt", notes: ["Bb", "D", "F", "Ab", "B", "C#", "E"] },
        { name: "Bbmaj7#11", notes: ["Bb", "D", "F", "A", "E"] },
        { name: "Bb7#5#9", notes: ["Bb", "D", "F#", "Ab", "C#"] },
        { name: "Bb7b5b9", notes: ["Bb", "D", "E", "Ab", "B"] },
        { name: "Bbdim7add13", notes: ["Bb", "Db", "E", "G", "A", "C", "Eb", "G"] }
    ],
    commonProgressions: {
        Pop: [
            "I - IV - V → Bb - Eb - F",
            "I - V - vi - IV - V → Bb - F - Gm - Eb - F"
        ],
        Jazz: [
            "ii - V - I → Cm - F7 - Bb",
            "ii7 - V7 - Imaj7 - VI7 - ii7 → Cm7 - F7 - Bbmaj7 - D7 - Cm7",
            "iii7 - VI7 - ii7 - V7 - Imaj7 → Dm7 - G7 - Cm7 - F7 - Bbmaj7"
        ],
        Funk: [
            "I7 - IV7 - V7 - IV7 - I7 → Bb7 - Eb7 - F7 - Eb7 - Bb7",
            "I9 - bVII9 - IV9 - V9 - I9 → Bb9 - Ab9 - Eb9 - F9 - Bb9"
        ],
        RnB: [
            "Imaj7 - iii7 - vi7 - II7 - V7 → Bbmaj7 - Dm7 - Gm7 - C7 - F7"
        ],
        Latin: [
            "Imaj7 - bIII7 - ii7 - V7 - Imaj7 → Bbmaj7 - Db7 - Cm7 - F7 - Bbmaj7"
        ],
        Synthwave: [
            "vi - IV - I - V → Gm - Eb - Bb - F",
            "i - VI - III - VII → Gm - Eb - Bb - F",
            "I - iii - vi - IV → Bb - Dm - Gm - Eb",
            "i - VII - VI - VII → Gm - F - Eb - F",
            "I - V - IV - V → Bb - F - Eb - F",
            "vi - V - IV - V → Gm - F - Eb - F"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Bbm - Db - F",
            "Hirano → bVI - bVII - I → Db - Eb - Bb",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Ebmaj7 - F7 - Dm7 - Gm7",
            "Haru no Hi → bVImaj7 - bVII - Imaj7 → Dbmaj7 - Eb - Bbmaj7",
            "Evangelion Ending → ii - V - iii - VI → Cm7 - F7 - Dm7 - G7",
            "Natsukashii → Imaj7 - iii7 - vi7 - II7 → Bbmaj7 - Dm7 - Gm7 - C7",
            "J-Rock Minor Lift → iv - V - bVI - V → Bbm - F - Gb - F"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Ebmaj7 - F7 - Dm7 - Gm7",
            "Imaj7 - bIII7 - ii7 - V7 → Bbmaj7 - Db7 - Cm7 - F7",
            "I - V - vi - IV → Bb - F - Gm - Eb",
            "Imaj7 - VI7 - ii7 - V7 → Bbmaj7 - D7 - Cm7 - F7"
        ],
        KPop: [
            "Imaj7 - iii7 - vi7 - IVmaj7 → Bbmaj7 - Dm7 - Gm7 - Ebmaj7",
            "vi - IV - I - V → Gm - Eb - Bb - F",
            "I - V/vi - vi - IV → Bb - D7 - Gm - Eb",
            "I - V - IV - V → Bb - F - Eb - F"
        ],
        AnimeBallad: [
            "vi - IV - I - V → Gm - Eb - Bb - F",
            "I - V/vi - vi - IV → Bb - D7 - Gm - Eb",
            "IV - V - iii - vi → Eb - F - Dm - Gm",
            "I - iii - IV - V → Bb - Dm - Eb - F",
            "Imaj7 - iii7 - vi7 - IVmaj7 → Bbmaj7 - Dm7 - Gm7 - Ebmaj7",
            "ii7 - V7 - Imaj7 - vi7 → Cm7 - F7 - Bbmaj7 - Gm7",
            "Imaj7 - vi7 - IVmaj7 - V7 → Bbmaj7 - Gm7 - Ebmaj7 - F7"
        ]
    },
    chordFunctions: [
        { degree: "I", chord: "Bbmaj" },
        { degree: "ii", chord: "Cmin" },
        { degree: "iii", chord: "Dmin" },
        { degree: "IV", chord: "Ebmaj" },
        { degree: "V", chord: "Fmaj" },
        { degree: "vi", chord: "Gmin" },
        { degree: "vii°", chord: "Adim" },
        { degree: "bIII", chord: "Dbmaj" },
        { degree: "bVI", chord: "Gbmaj" },
        { degree: "bVII", chord: "Abmaj" },
        { degree: "bVII9", chord: "Ab9" },
        { degree: "VI7", chord: "G7" },
        { degree: "II7", chord: "C7" }
    ],
    substitutions: [
        "F7 → B7 (tritone)",
        "Dm → Bbmaj7 (relative)"
    ],
    nextChords: ["Gm", "Eb", "F", "Dm", "Ab"],
    parallelMinorChords: [
        {
            name: "Bbm",
            notes: ["Bb", "Db", "F"]
        }
    ],
    circleOfFifths: {
        relativeMinor: "G Minor",
        parallelMinor: "Bb Minor",
        dominantKey: "F Major",
        subdominantKey: "Eb Major",
        closelyRelatedKeys: ["F Major", "Eb Major", "G Minor", "C Minor", "D Minor", "Ab Major"],
        distantKeys: ["B Major", "E Major", "A Major"]
    },
    modes: {
        Ionian: ["Bb", "C", "D", "Eb", "F", "G", "A"],
        Dorian: ["C", "D", "Eb", "F", "G", "A", "Bb"],
        Phrygian: ["D", "Eb", "F", "G", "A", "Bb", "C"],
        Lydian: ["Eb", "F", "G", "A", "Bb", "C", "D"],
        Mixolydian: ["F", "G", "A", "Bb", "C", "D", "Eb"],
        Aeolian: ["G", "A", "Bb", "C", "D", "Eb", "F"],
        Locrian: ["A", "Bb", "C", "D", "Eb", "F", "G"]
    },
    chordSpellingQuickRef: [
        "Bbmaj7 = Bb-D-F-A",
        "Bbm7 = Bb-Db-F-Ab"
    ],
    emotionalCharacter: {
        color: "warm ochre / gold-brown",
        feelings: ["noble", "mellow", "lyrical", "majestic"],
        commonGenres: ["Jazz", "Soul", "Classical", "Ballads"]
    }
};

export default bbMajor;