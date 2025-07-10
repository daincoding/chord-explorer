const abMajor = {
    scaleNotes: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
    scales: {
        Major: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
        Minor: ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
        MajorPentatonic: ["Ab", "Bb", "C", "Eb", "F"],
        MinorPentatonic: ["F", "Ab", "Bb", "C", "Eb"],
        Blues: ["Ab", "B", "Db", "D", "Eb", "Gb"],
        HarmonicMinor: ["F", "G", "Ab", "Bb", "C", "Db", "E"],
        MelodicMinorAscending: ["F", "G", "Ab", "Bb", "C", "D", "E"]
    },
    parallelMinor: "Ab Minor",
    triads: [
        {
            type: "Major",
            name: "Ab",
            root: ["Ab", "C", "Eb"],
            inv1: ["C", "Eb", "Ab"],
            inv2: ["Eb", "Ab", "C"]
        },
        {
            type: "Minor",
            name: "Abm",
            root: ["Ab", "Cb", "Eb"],
            inv1: ["Cb", "Eb", "Ab"],
            inv2: ["Eb", "Ab", "Cb"]
        }
    ],
    sevenths: [
        {
            name: "Abmaj7",
            root: ["Ab", "C", "Eb", "G"],
            inv1: ["C", "Eb", "G", "Ab"],
            inv2: ["Eb", "G", "Ab", "C"],
            inv3: ["G", "Ab", "C", "Eb"]
        }
    ],
    extendedChords: [
        { name: "Abmaj9", notes: ["Ab", "C", "Eb", "G", "Bb"] },
        { name: "Ab9", notes: ["Ab", "C", "Eb", "Gb", "Bb"] },
        { name: "Ab11", notes: ["Ab", "C", "Eb", "Gb", "Bb", "Db"] },
        { name: "Ab13", notes: ["Ab", "C", "Eb", "Gb", "Bb", "Db", "F"] },
        { name: "Abmin9", notes: ["Ab", "Cb", "Eb", "Gb", "Bb"] },
        { name: "Abmin11", notes: ["Ab", "Cb", "Eb", "Gb", "Bb", "Db"] },
        { name: "Abmin13", notes: ["Ab", "Cb", "Eb", "Gb", "Bb", "Db", "F"] },
        { name: "Ab7b9", notes: ["Ab", "C", "Eb", "Gb", "A"] },
        { name: "Ab7#9", notes: ["Ab", "C", "Eb", "Gb", "B"] },
        { name: "Ab7#11", notes: ["Ab", "C", "Eb", "Gb", "D"] }
    ],
    insaneChords: [
        { name: "Ab13b9#11", notes: ["Ab", "C", "Eb", "Gb", "A", "D", "F"] },
        { name: "Ab7alt", notes: ["Ab", "C", "Eb", "Gb", "A", "B", "D"] },
        { name: "Abmaj7#11", notes: ["Ab", "C", "Eb", "G", "D"] },
        { name: "Ab7#5#9", notes: ["Ab", "C", "E", "Gb", "B"] },
        { name: "Ab7b5b9", notes: ["Ab", "C", "D", "Gb", "A"] },
        { name: "Abdim7add13", notes: ["Ab", "Cb", "D", "E", "G", "Bb", "Db", "F"] }
    ],
    commonProgressions: {
        Pop: [
            "I - IV - V → Ab - Db - Eb",
            "I - V - vi - IV - V → Ab - Eb - Fm - Db - Eb"
        ],
        Jazz: [
            "ii - V - I → Bbm - Eb7 - Ab",
            "ii7 - V7 - Imaj7 - VI7 - ii7 → Bbm7 - Eb7 - Abmaj7 - C7 - Bbm7",
            "iii7 - VI7 - ii7 - V7 - Imaj7 → Cm7 - F7 - Bbm7 - Eb7 - Abmaj7"
        ],
        Funk: [
            "I7 - IV7 - V7 - IV7 - I7 → Ab7 - Db7 - Eb7 - Db7 - Ab7",
            "I9 - bVII9 - IV9 - V9 - I9 → Ab9 - Gb9 - Db9 - Eb9 - Ab9"
        ],
        RnB: [
            "Imaj7 - iii7 - vi7 - II7 - V7 → Abmaj7 - Cm7 - Fm7 - Bb7 - Eb7"
        ],
        Latin: [
            "Imaj7 - bIII7 - ii7 - V7 - Imaj7 → Abmaj7 - Cb7 - Bbm7 - Eb7 - Abmaj7"
        ],
        Synthwave: [
            "vi - IV - I - V → Fm - Db - Ab - Eb",
            "i - VI - III - VII → Fm - Db - Ab - Eb",
            "I - iii - vi - IV → Ab - Cm - Fm - Db",
            "i - VII - VI - VII → Fm - Eb - Db - Eb",
            "I - V - IV - V → Ab - Eb - Db - Eb",
            "vi - V - IV - V → Fm - Eb - Db - Eb"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Abm - Cb - Eb",
            "Hirano → bVI - bVII - I → Cb - Db - Ab",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Dbmaj7 - Eb7 - Cm7 - Fm7",
            "Haru no Hi → bVImaj7 - bVII - Imaj7 → Cbmaj7 - Db - Abmaj7",
            "Evangelion Ending → ii - V - iii - VI → Bbm7 - Eb7 - Cm7 - F7",
            "Natsukashii → Imaj7 - iii7 - vi7 - II7 → Abmaj7 - Cm7 - Fm7 - Bb7",
            "J-Rock Minor Lift → iv - V - bVI - V → Abm - Eb - Fb - Eb"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Dbmaj7 - Eb7 - Cm7 - Fm7",
            "Imaj7 - bIII7 - ii7 - V7 → Abmaj7 - Cb7 - Bbm7 - Eb7",
            "I - V - vi - IV → Ab - Eb - Fm - Db",
            "Imaj7 - VI7 - ii7 - V7 → Abmaj7 - C7 - Bbm7 - Eb7"
        ],
        KPop: [
            "Imaj7 - iii7 - vi7 - IVmaj7 → Abmaj7 - Cm7 - Fm7 - Dbmaj7",
            "vi - IV - I - V → Fm - Db - Ab - Eb",
            "I - V/vi - vi - IV → Ab - C7 - Fm - Db",
            "I - V - IV - V → Ab - Eb - Db - Eb"
        ],
        AnimeBallad: [
            "vi - IV - I - V → Fm - Db - Ab - Eb",
            "I - V/vi - vi - IV → Ab - C7 - Fm - Db",
            "IV - V - iii - vi → Db - Eb - Cm - Fm",
            "I - iii - IV - V → Ab - Cm - Db - Eb",
            "Imaj7 - iii7 - vi7 - IVmaj7 → Abmaj7 - Cm7 - Fm7 - Dbmaj7",
            "ii7 - V7 - Imaj7 - vi7 → Bbm7 - Eb7 - Abmaj7 - Fm7",
            "Imaj7 - vi7 - IVmaj7 - V7 → Abmaj7 - Fm7 - Dbmaj7 - Eb7"
        ]
    },
    chordFunctions: [
        { degree: "I", chord: "Abmaj" },
        { degree: "ii", chord: "Bbm" },
        { degree: "iii", chord: "Cm" },
        { degree: "IV", chord: "Dbmaj" },
        { degree: "V", chord: "Ebmaj" },
        { degree: "vi", chord: "Fm" },
        { degree: "vii°", chord: "Gdim" },
        { degree: "bIII", chord: "Cbmaj" },
        { degree: "bVI", chord: "Fbmaj" },
        { degree: "bVII", chord: "Gbmaj" },
        { degree: "bVII9", chord: "Gb9" },
        { degree: "VI7", chord: "F7" },
        { degree: "II7", chord: "Bb7" }
    ],
    substitutions: [
        "Eb7 → A7 (tritone)",
        "Cm → Abmaj7 (relative)"
    ],
    nextChords: ["Fm", "Db", "Eb", "Cm", "Gb"],
    parallelMinorChords: [
        {
            name: "Abm",
            notes: ["Ab", "Cb", "Eb"]
        }
    ],
    circleOfFifths: {
        relativeMinor: "F Minor",
        parallelMinor: "Ab Minor",
        dominantKey: "Eb Major",
        subdominantKey: "Db Major",
        closelyRelatedKeys: ["Eb Major", "Db Major", "F Minor", "Bb Minor", "Cm", "Gb Major"],
        distantKeys: ["B Major", "E Major", "A Major"]
    },
    modes: {
        Ionian: ["Ab", "Bb", "C", "Db", "Eb", "F", "G"],
        Dorian: ["Bb", "C", "Db", "Eb", "F", "G", "Ab"],
        Phrygian: ["C", "Db", "Eb", "F", "G", "Ab", "Bb"],
        Lydian: ["Db", "Eb", "F", "G", "Ab", "Bb", "C"],
        Mixolydian: ["Eb", "F", "G", "Ab", "Bb", "C", "Db"],
        Aeolian: ["F", "G", "Ab", "Bb", "C", "Db", "Eb"],
        Locrian: ["G", "Ab", "Bb", "C", "Db", "Eb", "F"]
    },
    chordSpellingQuickRef: [
        "Abmaj7 = Ab-C-Eb-G",
        "Abm7 = Ab-Cb-Eb-Gb"
    ],
    emotionalCharacter: {
        color: "deep crimson / burgundy",
        feelings: ["lush", "romantic", "warm", "emotional"],
        commonGenres: ["Soul", "R&B", "Classical", "Jazz"]
    }
};

export default abMajor;