const cMajor = {
    "C Major": {
        scaleNotes: ["C", "D", "E", "F", "G", "A", "B"],
        scales: {
            Major: ["C", "D", "E", "F", "G", "A", "B"],
            Minor: ["A", "B", "C", "D", "E", "F", "G"],
            MajorPentatonic: ["C", "D", "E", "G", "A"],
            MinorPentatonic: ["A", "C", "D", "E", "G"],
            Blues: ["C", "Eb", "F", "F#", "G", "Bb"],
            HarmonicMinor: ["A", "B", "C", "D", "E", "F", "G#"],
            MelodicMinorAscending: ["A", "B", "C", "D", "E", "F#", "G#"]
        },
        parallelMinor: "C Minor",
        triads: [
            {
                type: "Major",
                name: "C",
                root: ["C", "E", "G"],
                inv1: ["E", "G", "C"],
                inv2: ["G", "C", "E"]
            },
            {
                type: "Minor",
                name: "Cm",
                root: ["C", "Eb", "G"],
                inv1: ["Eb", "G", "C"],
                inv2: ["G", "C", "Eb"]
            }
        ],
        sevenths: [
            {
                name: "Cmaj7",
                root: ["C", "E", "G", "B"],
                inv1: ["E", "G", "B", "C"],
                inv2: ["G", "B", "C", "E"],
                inv3: ["B", "C", "E", "G"]
            }
        ],
        extendedChords: [
            { name: "Cmaj9", notes: ["C", "E", "G", "B", "D"] },
            { name: "C9", notes: ["C", "E", "G", "Bb", "D"] },
            { name: "C11", notes: ["C", "E", "G", "Bb", "D", "F"] },
            { name: "C13", notes: ["C", "E", "G", "Bb", "D", "F", "A"] },
            { name: "Cmin9", notes: ["C", "Eb", "G", "Bb", "D"] },
            { name: "Cmin11", notes: ["C", "Eb", "G", "Bb", "D", "F"] },
            { name: "Cmin13", notes: ["C", "Eb", "G", "Bb", "D", "F", "A"] },
            { name: "C7b9", notes: ["C", "E", "G", "Bb", "Db"] },
            { name: "C7#9", notes: ["C", "E", "G", "Bb", "D#"] },
            { name: "C7#11", notes: ["C", "E", "G", "Bb", "F#"] }
        ],
        insaneChords: [
            { name: "C13b9#11", notes: ["C", "E", "G", "Bb", "Db", "F#", "A"] },
            { name: "C7alt", notes: ["C", "E", "G", "Bb", "Db", "D#", "F#"] },
            { name: "Cmaj7#11", notes: ["C", "E", "G", "B", "F#"] },
            { name: "C7#5#9", notes: ["C", "E", "G#", "Bb", "D#"] },
            { name: "C7b5b9", notes: ["C", "E", "Gb", "Bb", "Db"] },
            { name: "Cdim7add13", notes: ["C", "Eb", "Gb", "A", "B", "D", "F", "A"] }
        ],
        commonProgressions: {
            Pop: [
                "I - IV - V → C - F - G",
                "I - V - vi - IV - V → C - G - Am - F - G"
            ],
            Jazz: [
                "ii - V - I → Dm - G7 - C",
                "ii7 - V7 - Imaj7 - VI7 - ii7 → Dm7 - G7 - Cmaj7 - A7 - Dm7",
                "iii7 - VI7 - ii7 - V7 - Imaj7 → Em7 - A7 - Dm7 - G7 - Cmaj7"
            ],
            Funk: [
                "I7 - IV7 - V7 - IV7 - I7 → C7 - F7 - G7 - F7 - C7",
                "I9 - bVII9 - IV9 - V9 - I9 → C9 - Bb9 - F9 - G9 - C9"
            ],
            RnB: [
                "Imaj7 - iii7 - vi7 - II7 - V7 → Cmaj7 - Em7 - Am7 - D7 - G7"
            ],
            Latin: [
                "Imaj7 - bIII7 - ii7 - V7 - Imaj7 → Cmaj7 - Eb7 - Dm7 - G7 - Cmaj7"
            ],
            Synthwave: [
                "vi - IV - I - V → Am - F - C - G",
                "i - VI - III - VII → Am - F - C - G",
                "I - iii - vi - IV → C - Em - Am - F",
                "i - VII - VI - VII → Am - G - F - G",
                "I - V - IV - V → C - G - F - G",
                "vi - V - IV - V → Am - G - F - G"
            ]
        },
        asianPopProgressions: {
            Japanese: [
                "Kojo no Tsuki → iv - bVI - V → Fm - Ab - G",
                "Hirano → bVI - bVII - I → Ab - Bb - C",
                "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Fmaj7 - G7 - Em7 - Am7",
                "Haru no Hi → bVImaj7 - bVII - Imaj7 → Abmaj7 - Bb - Cmaj7",
                "Evangelion Ending → ii - V - iii - VI → Dm7 - G7 - Em7 - A7",
                "Natsukashii → Imaj7 - iii7 - vi7 - II7 → Cmaj7 - Em7 - Am7 - D7",
                "J-Rock Minor Lift → iv - V - bVI - V → Fm - G - Ab - G"
            ],
            CityPop: [
                "IVmaj7 - V7 - iii7 - vi7 → Fmaj7 - G7 - Em7 - Am7",
                "Imaj7 - bIII7 - ii7 - V7 → Cmaj7 - Eb7 - Dm7 - G7",
                "I - V - vi - IV → C - G - Am - F",
                "Imaj7 - VI7 - ii7 - V7 → Cmaj7 - A7 - Dm7 - G7"
            ],
            KPop: [
                "Imaj7 - iii7 - vi7 - IVmaj7 → Cmaj7 - Em7 - Am7 - Fmaj7",
                "vi - IV - I - V → Am - F - C - G",
                "I - V/vi - vi - IV → C - E7 - Am - F",
                "I - V - IV - V → C - G - F - G"
            ],
            AnimeBallad: [
                "vi - IV - I - V → Am - F - C - G",
                "I - V/vi - vi - IV → C - E7 - Am - F",
                "IV - V - iii - vi → F - G - Em - Am",
                "I - iii - IV - V → C - Em - F - G",
                "Imaj7 - iii7 - vi7 - IVmaj7 → Cmaj7 - Em7 - Am7 - Fmaj7",
                "ii7 - V7 - Imaj7 - vi7 → Dm7 - G7 - Cmaj7 - Am7",
                "Imaj7 - vi7 - IVmaj7 - V7 → Cmaj7 - Am7 - Fmaj7 - G7"
            ]
        },
        chordFunctions: [
            { degree: "I", chord: "Cmaj" },
            { degree: "ii", chord: "Dmin" },
            { degree: "iii", chord: "Emin" },
            { degree: "IV", chord: "Fmaj" },
            { degree: "V", chord: "Gmaj" },
            { degree: "vi", chord: "Amin" },
            { degree: "vii°", chord: "Bdim" },
            { degree: "bIII", chord: "Ebmaj" },
            { degree: "bVI", chord: "Abmaj" },
            { degree: "bVII", chord: "Bbmaj" },
            { degree: "bVII9", chord: "Bb9" },
            { degree: "VI7", chord: "A7" },
            { degree: "II7", chord: "D7" }
        ],
        substitutions: [
            "G7 → Db7 (tritone)",
            "Em → Cmaj7 (relative)"
        ],
        nextChords: ["Am", "F", "G", "Em", "Bb"],
        parallelMinorChords: [
            {
                name: "Cm",
                notes: ["C", "Eb", "G"]
            }
        ],
        circleOfFifths: {
            relativeMinor: "A Minor",
            parallelMinor: "C Minor",
            dominantKey: "G Major",
            subdominantKey: "F Major",
            closelyRelatedKeys: ["G Major", "F Major", "A Minor", "D Minor", "E Minor", "Bb Major"],
            distantKeys: ["Gb Major", "Db Major", "B Major"]
        },
        modes: {
            Ionian: ["C", "D", "E", "F", "G", "A", "B"],
            Dorian: ["D", "E", "F", "G", "A", "B", "C"],
            Phrygian: ["E", "F", "G", "A", "B", "C", "D"],
            Lydian: ["F", "G", "A", "B", "C", "D", "E"],
            Mixolydian: ["G", "A", "B", "C", "D", "E", "F"],
            Aeolian: ["A", "B", "C", "D", "E", "F", "G"],
            Locrian: ["B", "C", "D", "E", "F", "G", "A"]
        },
        chordSpellingQuickRef: [
            "Cmaj7 = C-E-G-B",
            "Cm7 = C-Eb-G-Bb"
        ],
        emotionalCharacter: {
            color: "white / light gold",
            feelings: ["pure", "innocent", "clear", "neutral", "joyful"],
            commonGenres: ["Pop", "Classical", "Children's songs", "Folk"]
        }
    },
}