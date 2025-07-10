const fMajor = {
    scaleNotes: ["F", "G", "A", "Bb", "C", "D", "E"],
    scales: {
        Major: ["F", "G", "A", "Bb", "C", "D", "E"],
        Minor: ["D", "E", "F", "G", "A", "Bb", "C"],
        MajorPentatonic: ["F", "G", "A", "C", "D"],
        MinorPentatonic: ["D", "F", "G", "A", "C"],
        Blues: ["F", "Ab", "Bb", "B", "C", "Eb"],
        HarmonicMinor: ["D", "E", "F", "G", "A", "Bb", "C#"],
        MelodicMinorAscending: ["D", "E", "F", "G", "A", "B", "C#"]
    },
    parallelMinor: "F Minor",
    triads: [
        {
            type: "Major",
            name: "F",
            root: ["F", "A", "C"],
            inv1: ["A", "C", "F"],
            inv2: ["C", "F", "A"]
        },
        {
            type: "Minor",
            name: "Fm",
            root: ["F", "Ab", "C"],
            inv1: ["Ab", "C", "F"],
            inv2: ["C", "F", "Ab"]
        }
    ],
    sevenths: [
        {
            name: "Fmaj7",
            root: ["F", "A", "C", "E"],
            inv1: ["A", "C", "E", "F"],
            inv2: ["C", "E", "F", "A"],
            inv3: ["E", "F", "A", "C"]
        }
    ],
    extendedChords: [
        { name: "Fmaj9", notes: ["F", "A", "C", "E", "G"] },
        { name: "F9", notes: ["F", "A", "C", "Eb", "G"] },
        { name: "F11", notes: ["F", "A", "C", "Eb", "G", "Bb"] },
        { name: "F13", notes: ["F", "A", "C", "Eb", "G", "Bb", "D"] },
        { name: "Fmin9", notes: ["F", "Ab", "C", "Eb", "G"] },
        { name: "Fmin11", notes: ["F", "Ab", "C", "Eb", "G", "Bb"] },
        { name: "Fmin13", notes: ["F", "Ab", "C", "Eb", "G", "Bb", "D"] },
        { name: "F7b9", notes: ["F", "A", "C", "Eb", "Gb"] },
        { name: "F7#9", notes: ["F", "A", "C", "Eb", "G#"] },
        { name: "F7#11", notes: ["F", "A", "C", "Eb", "B"] }
    ],
    insaneChords: [
        { name: "F13b9#11", notes: ["F", "A", "C", "Eb", "Gb", "B", "D"] },
        { name: "F7alt", notes: ["F", "A", "C", "Eb", "Gb", "G#", "B"] },
        { name: "Fmaj7#11", notes: ["F", "A", "C", "E", "B"] },
        { name: "F7#5#9", notes: ["F", "A", "C#", "Eb", "G#"] },
        { name: "F7b5b9", notes: ["F", "A", "Db", "Eb", "Gb"] },
        { name: "Fdim7add13", notes: ["F", "Ab", "B", "D", "E", "G", "Bb", "D"] }
    ],
    commonProgressions: {
        Pop: [
            "I - IV - V → F - Bb - C",
            "I - V - vi - IV - V → F - C - Dm - Bb - C"
        ],
        Jazz: [
            "ii - V - I → Gm - C7 - F",
            "ii7 - V7 - Imaj7 - VI7 - ii7 → Gm7 - C7 - Fmaj7 - A7 - Gm7",
            "iii7 - VI7 - ii7 - V7 - Imaj7 → Am7 - D7 - Gm7 - C7 - Fmaj7"
        ],
        Funk: [
            "I7 - IV7 - V7 - IV7 - I7 → F7 - Bb7 - C7 - Bb7 - F7",
            "I9 - bVII9 - IV9 - V9 - I9 → F9 - Eb9 - Bb9 - C9 - F9"
        ],
        RnB: [
            "Imaj7 - iii7 - vi7 - II7 - V7 → Fmaj7 - Am7 - Dm7 - G7 - C7"
        ],
        Latin: [
            "Imaj7 - bIII7 - ii7 - V7 - Imaj7 → Fmaj7 - Ab7 - Gm7 - C7 - Fmaj7"
        ],
        Synthwave: [
            "vi - IV - I - V → Dm - Bb - F - C",
            "i - VI - III - VII → Dm - Bb - F - C",
            "I - iii - vi - IV → F - Am - Dm - Bb",
            "i - VII - VI - VII → Dm - C - Bb - C",
            "I - V - IV - V → F - C - Bb - C",
            "vi - V - IV - V → Dm - C - Bb - C"
        ]
    },
    asianPopProgressions: {
        Japanese: [
            "Kojo no Tsuki → iv - bVI - V → Fm - Ab - C",
            "Hirano → bVI - bVII - I → Ab - Bb - F",
            "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Bbmaj7 - C7 - Am7 - Dm7",
            "Haru no Hi → bVImaj7 - bVII - Imaj7 → Abmaj7 - Bb - Fmaj7",
            "Evangelion Ending → ii - V - iii - VI → Gm7 - C7 - Am7 - D7",
            "Natsukashii → Imaj7 - iii7 - vi7 - II7 → Fmaj7 - Am7 - Dm7 - G7",
            "J-Rock Minor Lift → iv - V - bVI - V → Fm - C - Db - C"
        ],
        CityPop: [
            "IVmaj7 - V7 - iii7 - vi7 → Bbmaj7 - C7 - Am7 - Dm7",
            "Imaj7 - bIII7 - ii7 - V7 → Fmaj7 - Ab7 - Gm7 - C7",
            "I - V - vi - IV → F - C - Dm - Bb",
            "Imaj7 - VI7 - ii7 - V7 → Fmaj7 - A7 - Gm7 - C7"
        ],
        KPop: [
            "Imaj7 - iii7 - vi7 - IVmaj7 → Fmaj7 - Am7 - Dm7 - Bbmaj7",
            "vi - IV - I - V → Dm - Bb - F - C",
            "I - V/vi - vi - IV → F - A7 - Dm - Bb",
            "I - V - IV - V → F - C - Bb - C"
        ],
        AnimeBallad: [
            "vi - IV - I - V → Dm - Bb - F - C",
            "I - V/vi - vi - IV → F - A7 - Dm - Bb",
            "IV - V - iii - vi → Bb - C - Am - Dm",
            "I - iii - IV - V → F - Am - Bb - C",
            "Imaj7 - iii7 - vi7 - IVmaj7 → Fmaj7 - Am7 - Dm7 - Bbmaj7",
            "ii7 - V7 - Imaj7 - vi7 → Gm7 - C7 - Fmaj7 - Dm7",
            "Imaj7 - vi7 - IVmaj7 - V7 → Fmaj7 - Dm7 - Bbmaj7 - C7"
        ]
    },
    chordFunctions: [
        { degree: "I", chord: "Fmaj" },
        { degree: "ii", chord: "Gmin" },
        { degree: "iii", chord: "Amin" },
        { degree: "IV", chord: "Bbmaj" },
        { degree: "V", chord: "Cmaj" },
        { degree: "vi", chord: "Dmin" },
        { degree: "vii°", chord: "Edim" },
        { degree: "bIII", chord: "Abmaj" },
        { degree: "bVI", chord: "Dbmaj" },
        { degree: "bVII", chord: "Ebmaj" },
        { degree: "bVII9", chord: "Eb9" },
        { degree: "VI7", chord: "D7" },
        { degree: "II7", chord: "G7" }
    ],
    substitutions: [
        "C7 → Gb7 (tritone)",
        "Am → Fmaj7 (relative)"
    ],
    nextChords: ["Dm", "Bb", "C", "Am", "Eb"],
    parallelMinorChords: [
        {
            name: "Fm",
            notes: ["F", "Ab", "C"]
        }
    ],
    circleOfFifths: {
        relativeMinor: "D Minor",
        parallelMinor: "F Minor",
        dominantKey: "C Major",
        subdominantKey: "Bb Major",
        closelyRelatedKeys: ["C Major", "Bb Major", "D Minor", "G Minor", "A Minor", "Eb Major"],
        distantKeys: ["B Major", "E Major", "A Major"]
    },
    modes: {
        Ionian: ["F", "G", "A", "Bb", "C", "D", "E"],
        Dorian: ["G", "A", "Bb", "C", "D", "E", "F"],
        Phrygian: ["A", "Bb", "C", "D", "E", "F", "G"],
        Lydian: ["Bb", "C", "D", "E", "F", "G", "A"],
        Mixolydian: ["C", "D", "E", "F", "G", "A", "Bb"],
        Aeolian: ["D", "E", "F", "G", "A", "Bb", "C"],
        Locrian: ["E", "F", "G", "A", "Bb", "C", "D"]
    },
    chordSpellingQuickRef: [
        "Fmaj7 = F-A-C-E",
        "Fm7 = F-Ab-C-Eb"
    ],
    emotionalCharacter: {
        color: "soft coral / salmon pink",
        feelings: ["warm", "gentle", "pastoral", "loving"],
        commonGenres: ["Folk", "Pop", "Jazz", "Classical"]
    }
};

export default fMajor;