const ebMajor = {
    scaleNotes: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
    scales: {
        Major: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
        Minor: ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
        MajorPentatonic: ["Eb", "F", "G", "Bb", "C"],
        MinorPentatonic: ["C", "Eb", "F", "G", "Bb"],
        Blues: ["Eb", "Gb", "Ab", "A", "Bb", "Db"],
        HarmonicMinor: ["C", "D", "Eb", "F", "G", "Ab", "B"],
        MelodicMinorAscending: ["C", "D", "Eb", "F", "G", "A", "B"]
    },
    parallelMinor: "Eb Minor",
    triads: [
        {
            type: "Major",
            name: "Eb",
            root: ["Eb", "G", "Bb"],
            inv1: ["G", "Bb", "Eb"],
            inv2: ["Bb", "Eb", "G"]
        },
        {
            type: "Minor",
            name: "Ebm",
            root: ["Eb", "Gb", "Bb"],
            inv1: ["Gb", "Bb", "Eb"],
            inv2: ["Bb", "Eb", "Gb"]
        }
    ],
    sevenths: [
        {
            name: "Ebmaj7",
            root: ["Eb", "G", "Bb", "D"],
            inv1: ["G", "Bb", "D", "Eb"],
            inv2: ["Bb", "D", "Eb", "G"],
            inv3: ["D", "Eb", "G", "Bb"]
        }
    ],
    extendedChords: [
        { name: "Ebmaj9", notes: ["Eb", "G", "Bb", "D", "F"] },
        { name: "Eb9", notes: ["Eb", "G", "Bb", "Db", "F"] },
        { name: "Eb11", notes: ["Eb", "G", "Bb", "Db", "F", "Ab"] },
        { name: "Eb13", notes: ["Eb", "G", "Bb", "Db", "F", "Ab", "C"] },
        { name: "Ebmin9", notes: ["Eb", "Gb", "Bb", "Db", "F"] },
        { name: "Ebmin11", notes: ["Eb", "Gb", "Bb", "Db", "F", "Ab"] },
        { name: "Ebmin13", notes: ["Eb", "Gb", "Bb", "Db", "F", "Ab", "C"] },
        { name: "Eb7b9", notes: ["Eb", "G", "Bb", "Db", "E"] },
        { name: "Eb7#9", notes: ["Eb", "G", "Bb", "Db", "F#"] },
        { name: "Eb7#11", notes: ["Eb", "G", "Bb", "Db", "A"] }
    ],
    insaneChords: [
        { name: "Eb13b9#11", notes: ["Eb", "G", "Bb", "Db", "E", "A", "C"] },
        { name: "Eb7alt", notes: ["Eb", "G", "Bb", "Db", "E", "F#", "A"] },
        { name: "Ebmaj7#11", notes: ["Eb", "G", "Bb", "D", "A"] },
        { name: "Eb7#5#9", notes: ["Eb", "G", "B", "Db", "F#"] },
        { name: "Eb7b5b9", notes: ["Eb", "G", "A", "Db", "E"] },
        { name: "Ebdim7add13", notes: ["Eb", "Gb", "A", "C", "D", "F", "Ab", "C"] }
    ],
    commonProgressions: {
        Pop: [
            "I - IV - V → Eb - Ab - Bb",
            "I - V - vi - IV - V → Eb - Bb - Cm - Ab - Bb"
        ],
        Jazz: [
            "ii - V - I → Fm - Bb7 - Eb",
            "ii7 - V7 - Imaj7 - VI7 - ii7 → Fm7 - Bb7 - Ebmaj7 - G7 - Fm7",
            "iii7 - VI7 - ii7 - V7 - Imaj7 → Gm7 - C7 - Fm7 - Bb7 - Ebmaj7"
        ],
        Funk: [
            "I7 - IV7 - V7 - IV7 - I7 → Eb7 - Ab7 - Bb7 - Ab7 - Eb7",
            "I9 - bVII9 - IV9 - V9 - I9 → Eb9 - Db9 - Ab9 - Bb9 - Eb9"
        ],
        RnB: [
            "Imaj7 - iii7 - vi7 - II7 - V7 → Ebmaj7 - Gm7 - Cm7 - F7 - Bb7"
        ],
        Latin: [
            "Imaj7 - bIII7 - ii7 - V7 - Imaj7 → Ebmaj7 - Gb7 - Fm7 - Bb7 - Ebmaj7"
        ],
        Synthwave: [
            "vi - IV - I - V → Cm - Ab - Eb - Bb",
            "i - VI - III - VII → Cm - Ab - Eb - Bb",
            "I - iii - vi - IV → Eb - Gm - Cm - Ab",
            "i - VII - VI - VII → Cm - Bb - Ab - Bb",
            "I - V - IV - V → Eb - Bb - Ab - Bb",
            "vi - V - IV - V → Cm - Bb - Ab - Bb"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Ebm - Gb - Bb",
            "Hirano → bVI - bVII - I → Gb - Ab - Eb",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Abmaj7 - Bb7 - Gm7 - Cm7",
            "Haru no Hi → bVImaj7 - bVII - Imaj7 → Gbmaj7 - Ab - Ebmaj7",
            "Evangelion Ending → ii - V - iii - VI → Fm7 - Bb7 - Gm7 - C7",
            "Natsukashii → Imaj7 - iii7 - vi7 - II7 → Ebmaj7 - Gm7 - Cm7 - F7",
            "J-Rock Minor Lift → iv - V - bVI - V → Ebm - Bb - B - Bb"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Abmaj7 - Bb7 - Gm7 - Cm7",
            "Imaj7 - bIII7 - ii7 - V7 → Ebmaj7 - Gb7 - Fm7 - Bb7",
            "I - V - vi - IV → Eb - Bb - Cm - Ab",
            "Imaj7 - VI7 - ii7 - V7 → Ebmaj7 - G7 - Fm7 - Bb7"
        ],
        KPop: [
            "Imaj7 - iii7 - vi7 - IVmaj7 → Ebmaj7 - Gm7 - Cm7 - Abmaj7",
            "vi - IV - I - V → Cm - Ab - Eb - Bb",
            "I - V/vi - vi - IV → Eb - G7 - Cm - Ab",
            "I - V - IV - V → Eb - Bb - Ab - Bb"
        ],
        AnimeBallad: [
            "vi - IV - I - V → Cm - Ab - Eb - Bb",
            "I - V/vi - vi - IV → Eb - G7 - Cm - Ab",
            "IV - V - iii - vi → Ab - Bb - Gm - Cm",
            "I - iii - IV - V → Eb - Gm - Ab - Bb",
            "Imaj7 - iii7 - vi7 - IVmaj7 → Ebmaj7 - Gm7 - Cm7 - Abmaj7",
            "ii7 - V7 - Imaj7 - vi7 → Fm7 - Bb7 - Ebmaj7 - Cm7",
            "Imaj7 - vi7 - IVmaj7 - V7 → Ebmaj7 - Cm7 - Abmaj7 - Bb7"
        ]
    },
    chordFunctions: [
        { degree: "I", chord: "Ebmaj" },
        { degree: "ii", chord: "Fm" },
        { degree: "iii", chord: "Gm" },
        { degree: "IV", chord: "Abmaj" },
        { degree: "V", chord: "Bbmaj" },
        { degree: "vi", chord: "Cm" },
        { degree: "vii°", chord: "Ddim" },
        { degree: "bIII", chord: "Gbmaj" },
        { degree: "bVI", chord: "Cbmaj" },
        { degree: "bVII", chord: "Dbmaj" },
        { degree: "bVII9", chord: "Db9" },
        { degree: "VI7", chord: "C7" },
        { degree: "II7", chord: "F7" }
    ],
    substitutions: [
        "Bb7 → E7 (tritone)",
        "Gm → Ebmaj7 (relative)"
    ],
    nextChords: ["Cm", "Ab", "Bb", "Gm", "Db"],
    parallelMinorChords: [
        {
            name: "Ebm",
            notes: ["Eb", "Gb", "Bb"]
        }
    ],
    circleOfFifths: {
        relativeMinor: "C Minor",
        parallelMinor: "Eb Minor",
        dominantKey: "Bb Major",
        subdominantKey: "Ab Major",
        closelyRelatedKeys: ["Bb Major", "Ab Major", "C Minor", "F Minor", "G Minor", "Db Major"],
        distantKeys: ["E Major", "A Major", "B Major"]
    },
    modes: {
        Ionian: ["Eb", "F", "G", "Ab", "Bb", "C", "D"],
        Dorian: ["F", "G", "Ab", "Bb", "C", "D", "Eb"],
        Phrygian: ["G", "Ab", "Bb", "C", "D", "Eb", "F"],
        Lydian: ["Ab", "Bb", "C", "D", "Eb", "F", "G"],
        Mixolydian: ["Bb", "C", "D", "Eb", "F", "G", "Ab"],
        Aeolian: ["C", "D", "Eb", "F", "G", "Ab", "Bb"],
        Locrian: ["D", "Eb", "F", "G", "Ab", "Bb", "C"]
    },
    chordSpellingQuickRef: [
        "Ebmaj7 = Eb-G-Bb-D",
        "Ebm7 = Eb-Gb-Bb-Db"
    ],
    emotionalCharacter: {
        color: "warm copper / bronze",
        feelings: ["majestic", "warm", "heroic", "lyrical"],
        commonGenres: ["Jazz", "Classical", "Soul", "Pop"]
    }
};

export default ebMajor;