const ebMinor = {
    scaleNotes: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],
    scales: {
        NaturalMinor: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],
        HarmonicMinor: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "D"],
        MelodicMinorAscending: ["Eb", "F", "Gb", "Ab", "Bb", "C", "D"],
        MelodicMinorDescending: ["Eb", "Db", "Cb", "Bb", "Ab", "Gb", "F"],
        MinorPentatonic: ["Eb", "Gb", "Ab", "Bb", "Db"],
        Blues: ["Eb", "Gb", "Ab", "A", "Bb", "Db"]
    },
    parallelMajor: "Eb Major",
    triads: [
        {
            type: "Minor",
            name: "Ebm",
            root: ["Eb", "Gb", "Bb"],
            inv1: ["Gb", "Bb", "Eb"],
            inv2: ["Bb", "Eb", "Gb"]
        },
        {
            type: "Major",
            name: "Eb",
            root: ["Eb", "G", "Bb"],
            inv1: ["G", "Bb", "Eb"],
            inv2: ["Bb", "Eb", "G"]
        }
    ],
    sevenths: [
        {
            name: "Ebm7",
            root: ["Eb", "Gb", "Bb", "Db"],
            inv1: ["Gb", "Bb", "Db", "Eb"],
            inv2: ["Bb", "Db", "Eb", "Gb"],
            inv3: ["Db", "Eb", "Gb", "Bb"]
        },
        {
            name: "Ebm(maj7)",
            root: ["Eb", "Gb", "Bb", "D"],
            inv1: ["Gb", "Bb", "D", "Eb"],
            inv2: ["Bb", "D", "Eb", "Gb"],
            inv3: ["D", "Eb", "Gb", "Bb"]
        }
    ],
    extendedChords: [
        { name: "Ebm9", notes: ["Eb", "Gb", "Bb", "Db", "F"] },
        { name: "Ebm11", notes: ["Eb", "Gb", "Bb", "Db", "F", "Ab"] },
        { name: "Ebm13", notes: ["Eb", "Gb", "Bb", "Db", "F", "Ab", "C"] },
        { name: "Eb7b9", notes: ["Eb", "G", "Bb", "Db", "Fb"] },
        { name: "Eb7#9", notes: ["Eb", "G", "Bb", "Db", "F#"] },
        { name: "Eb7#11", notes: ["Eb", "G", "Bb", "Db", "A"] }
    ],
    insaneChords: [
        { name: "Ebm13b9#11", notes: ["Eb", "Gb", "Bb", "Db", "Fb", "A", "C"] },
        { name: "Eb7alt", notes: ["Eb", "G", "Bb", "Db", "Fb", "F#", "A"] },
        { name: "Ebm(maj7)#11", notes: ["Eb", "Gb", "Bb", "D", "A"] },
        { name: "Eb7#5#9", notes: ["Eb", "G", "B", "Db", "F#"] },
        { name: "Eb7b5b9", notes: ["Eb", "G", "A", "Db", "Fb"] },
        { name: "Ebdim7add13", notes: ["Eb", "Gb", "A", "C", "D", "F", "Ab", "C"] }
    ],
    commonProgressions: {
        Pop: [
            "i - VI - III - VII → Ebm - Cb - Gb - Db",
            "i - iv - v - i → Ebm - Abm - Bbm - Ebm"
        ],
        Jazz: [
            "iiø7 - V7 - i → Fm7b5 - Bb7 - Ebm",
            "i - VI7 - iiø7 - V7 → Ebm - Cb7 - Fm7b5 - Bb7",
            "iii7b5 - VI7 - iiø7 - V7 - i → Gm7b5 - C7 - Fm7b5 - Bb7 - Ebm"
        ],
        Funk: [
            "i7 - iv7 - V7 - iv7 - i7 → Ebm7 - Abm7 - Bb7 - Abm7 - Ebm7",
            "i9 - bVII9 - iv9 - V9 - i9 → Ebm9 - Db9 - Abm9 - Bb9 - Ebm9"
        ],
        RnB: [
            "i(maj7) - iii7 - vi7 - II7 - V7 → Ebm(maj7) - Gm7 - Cm7 - F7 - Bb7"
        ],
        Latin: [
            "i(maj7) - bIII7 - iiø7 - V7 - i(maj7) → Ebm(maj7) - Gb7 - Fm7b5 - Bb7 - Ebm(maj7)"
        ],
        Synthwave: [
            "i - VI - III - VII → Ebm - Cb - Gb - Db",
            "i - VII - VI - VII → Ebm - Db - Cb - Db",
            "i - v - iv - VII → Ebm - Bbm - Abm - Db"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Abm - Cb - Bb",
            "Hirano → bVI - bVII - i → Cb - Db - Ebm",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Abmaj7 - Bb7 - Gm7 - Cm7",
            "Haru no Hi → bVImaj7 - bVII - i(maj7) → Cbmaj7 - Db - Ebm(maj7)",
            "Evangelion Ending → ii - V - iii - VI → Fm7b5 - Bb7 - Gm7 - C7",
            "Natsukashii → i(maj7) - iii7 - vi7 - II7 → Ebm(maj7) - Gm7 - Cm7 - F7",
            "J-Rock Minor Lift → iv - V - bVI - V → Abm - Bb - Cb - Bb"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Abmaj7 - Bb7 - Gm7 - Cm7",
            "i(maj7) - bIII7 - iiø7 - V7 → Ebm(maj7) - Gb7 - Fm7b5 - Bb7",
            "i - v - VI - VII → Ebm - Bbm - Cb - Db"
        ],
        KPop: [
            "i(maj7) - iii7 - vi7 - IVmaj7 → Ebm(maj7) - Gm7 - Cm7 - Abmaj7",
            "vi - IV - i - V → Cm - Ab - Ebm - Bb",
            "i - V/vi - vi - IV → Ebm - Bb7 - Cm - Ab",
            "i - V - IV - V → Ebm - Bb - Ab - Bb"
        ],
        AnimeBallad: [
            "vi - IV - i - V → Cm - Ab - Ebm - Bb",
            "i - V/vi - vi - IV → Ebm - Bb7 - Cm - Ab",
            "IV - V - iii - vi → Ab - Bb - Gm - Cm",
            "i - iii - IV - V → Ebm - Gm - Ab - Bb",
            "i(maj7) - iii7 - vi7 - IVmaj7 → Ebm(maj7) - Gm7 - Cm7 - Abmaj7",
            "iiø7 - V7 - i(maj7) - vi7 → Fm7b5 - Bb7 - Ebm(maj7) - Cm7",
            "i(maj7) - vi7 - IVmaj7 - V7 → Ebm(maj7) - Cm7 - Abmaj7 - Bb7"
        ]
    },
    chordFunctions: [
        { degree: "i", chord: "Ebm" },
        { degree: "ii°", chord: "Fdim" },
        { degree: "III", chord: "Gbmaj" },
        { degree: "iv", chord: "Abm" },
        { degree: "v", chord: "Bbm" },
        { degree: "VI", chord: "Cbmaj" },
        { degree: "VII", chord: "Dbmaj" },
        { degree: "bIII", chord: "Gbmaj" },
        { degree: "bVI", chord: "Cbmaj" },
        { degree: "bVII", chord: "Dbmaj" },
        { degree: "bVII9", chord: "Db9" },
        { degree: "VI7", chord: "Cb7" },
        { degree: "II7", chord: "F7" }
    ],
    substitutions: [
        "Bb7 → E7 (tritone)",
        "Gb → Ebm(maj7) (relative)"
    ],
    nextChords: ["Abm", "Cb", "Db", "Gb", "Bbm"],
    parallelMajorChords: [
        {
            name: "Eb",
            notes: ["Eb", "G", "Bb"]
        }
    ],
    circleOfFifths: {
        relativeMajor: "Gb Major",
        parallelMajor: "Eb Major",
        dominantKey: "Bb Minor",
        subdominantKey: "Ab Minor",
        closelyRelatedKeys: ["Gb Major", "Bb Minor", "Cb Major", "Db Major", "Ab Minor"],
        distantKeys: ["B Major", "E Major", "A Major"]
    },
    modes: {
        Aeolian: ["Eb", "F", "Gb", "Ab", "Bb", "Cb", "Db"],
        Dorian: ["F", "Gb", "Ab", "Bb", "C", "Db", "Eb"],
        Phrygian: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
        Lydian: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
        Mixolydian: ["Bb", "C", "Db", "Eb", "F", "Gb", "Ab"],
        Ionian: ["Gb", "Ab", "Bb", "Cb", "Db", "Eb", "F"],
        Locrian: ["Db", "Eb", "F", "Gb", "Ab", "Bb", "Cb"]
    },
    chordSpellingQuickRef: [
        "Ebm7 = Eb-Gb-Bb-Db",
        "Ebm(maj7) = Eb-Gb-Bb-D"
    ],
    emotionalCharacter: {
        color: "dark teal / dusky blue-green",
        feelings: ["mysterious", "soulful", "elegant", "somber"],
        commonGenres: ["Jazz", "Soul", "Classical", "Film Score"]
    }
};

export default ebMinor;