const dMajor = {
        scaleNotes: ["D", "E", "F#", "G", "A", "B", "C#"],
        scales: {
            Major: ["D", "E", "F#", "G", "A", "B", "C#"],
            Minor: ["B", "C#", "D", "E", "F#", "G", "A"],
            MajorPentatonic: ["D", "E", "F#", "A", "B"],
            MinorPentatonic: ["B", "D", "E", "F#", "A"],
            Blues: ["D", "F", "G", "G#", "A", "C"],
            HarmonicMinor: ["B", "C#", "D", "E", "F#", "G", "A#"],
            MelodicMinorAscending: ["B", "C#", "D", "E", "F#", "G#", "A#"]
        },
        parallelMinor: "D Minor",
        triads: [
            {
                type: "Major",
                name: "D",
                root: ["D", "F#", "A"],
                inv1: ["F#", "A", "D"],
                inv2: ["A", "D", "F#"]
            },
            {
                type: "Minor",
                name: "Dm",
                root: ["D", "F", "A"],
                inv1: ["F", "A", "D"],
                inv2: ["A", "D", "F"]
            }
        ],
        sevenths: [
            {
                name: "Dmaj7",
                root: ["D", "F#", "A", "C#"],
                inv1: ["F#", "A", "C#", "D"],
                inv2: ["A", "C#", "D", "F#"],
                inv3: ["C#", "D", "F#", "A"]
            }
        ],
        extendedChords: [
            { name: "Dmaj9", notes: ["D", "F#", "A", "C#", "E"] },
            { name: "D9", notes: ["D", "F#", "A", "C", "E"] },
            { name: "D11", notes: ["D", "F#", "A", "C", "E", "G"] },
            { name: "D13", notes: ["D", "F#", "A", "C", "E", "G", "B"] },
            { name: "Dmin9", notes: ["D", "F", "A", "C", "E"] },
            { name: "Dmin11", notes: ["D", "F", "A", "C", "E", "G"] },
            { name: "Dmin13", notes: ["D", "F", "A", "C", "E", "G", "B"] },
            { name: "D7b9", notes: ["D", "F#", "A", "C", "Eb"] },
            { name: "D7#9", notes: ["D", "F#", "A", "C", "F"] },
            { name: "D7#11", notes: ["D", "F#", "A", "C", "G#"] }
        ],
        insaneChords: [
            { name: "D13b9#11", notes: ["D", "F#", "A", "C", "Eb", "G#", "B"] },
            { name: "D7alt", notes: ["D", "F#", "A", "C", "Eb", "F", "G#"] },
            { name: "Dmaj7#11", notes: ["D", "F#", "A", "C#", "G#"] },
            { name: "D7#5#9", notes: ["D", "F#", "A#", "C", "F"] },
            { name: "D7b5b9", notes: ["D", "F#", "Ab", "C", "Eb"] },
            { name: "Ddim7add13", notes: ["D", "F", "Ab", "B", "C#", "E", "G", "B"] }
        ],
        commonProgressions: {
            Pop: [
                "I - IV - V → D - G - A",
                "I - V - vi - IV - V → D - A - Bm - G - A"
            ],
            Jazz: [
                "ii - V - I → Em - A7 - D",
                "ii7 - V7 - Imaj7 - VI7 - ii7 → Em7 - A7 - Dmaj7 - B7 - Em7",
                "iii7 - VI7 - ii7 - V7 - Imaj7 → F#m7 - B7 - Em7 - A7 - Dmaj7"
            ],
            Funk: [
                "I7 - IV7 - V7 - IV7 - I7 → D7 - G7 - A7 - G7 - D7",
                "I9 - bVII9 - IV9 - V9 - I9 → D9 - C9 - G9 - A9 - D9"
            ],
            RnB: [
                "Imaj7 - iii7 - vi7 - II7 - V7 → Dmaj7 - F#m7 - Bm7 - E7 - A7"
            ],
            Latin: [
                "Imaj7 - bIII7 - ii7 - V7 - Imaj7 → Dmaj7 - F7 - Em7 - A7 - Dmaj7"
            ],
            Synthwave: [
                "vi - IV - I - V → Bm - G - D - A",
                "i - VI - III - VII → Bm - G - D - A",
                "I - iii - vi - IV → D - F#m - Bm - G",
                "i - VII - VI - VII → Bm - A - G - A",
                "I - V - IV - V → D - A - G - A",
                "vi - V - IV - V → Bm - A - G - A"
            ]
        },
        asianPopProgressions: {
            Japanese: [
                "Kojo no Tsuki → iv - bVI - V → Dm - F - A",
                "Hirano → bVI - bVII - I → F - G - D",
                "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Gmaj7 - A7 - F#m7 - Bm7",
                "Haru no Hi → bVImaj7 - bVII - Imaj7 → Fmaj7 - G - Dmaj7",
                "Evangelion Ending → ii - V - iii - VI → Em7 - A7 - F#m7 - B7",
                "Natsukashii → Imaj7 - iii7 - vi7 - II7 → Dmaj7 - F#m7 - Bm7 - E7",
                "J-Rock Minor Lift → iv - V - bVI - V → Dm - A - Bb - A"
            ],
            CityPop: [
                "IVmaj7 - V7 - iii7 - vi7 → Gmaj7 - A7 - F#m7 - Bm7",
                "Imaj7 - bIII7 - ii7 - V7 → Dmaj7 - F7 - Em7 - A7",
                "I - V - vi - IV → D - A - Bm - G",
                "Imaj7 - VI7 - ii7 - V7 → Dmaj7 - B7 - Em7 - A7"
            ],
            KPop: [
                "Imaj7 - iii7 - vi7 - IVmaj7 → Dmaj7 - F#m7 - Bm7 - Gmaj7",
                "vi - IV - I - V → Bm - G - D - A",
                "I - V/vi - vi - IV → D - F#7 - Bm - G",
                "I - V - IV - V → D - A - G - A"
            ],
            AnimeBallad: [
                "vi - IV - I - V → Bm - G - D - A",
                "I - V/vi - vi - IV → D - F#7 - Bm - G",
                "IV - V - iii - vi → G - A - F#m - Bm",
                "I - iii - IV - V → D - F#m - G - A",
                "Imaj7 - iii7 - vi7 - IVmaj7 → Dmaj7 - F#m7 - Bm7 - Gmaj7",
                "ii7 - V7 - Imaj7 - vi7 → Em7 - A7 - Dmaj7 - Bm7",
                "Imaj7 - vi7 - IVmaj7 - V7 → Dmaj7 - Bm7 - Gmaj7 - A7"
            ]
        },
        chordFunctions: [
            { degree: "I", chord: "Dmaj" },
            { degree: "ii", chord: "Emin" },
            { degree: "iii", chord: "F#min" },
            { degree: "IV", chord: "Gmaj" },
            { degree: "V", chord: "Amaj" },
            { degree: "vi", chord: "Bmin" },
            { degree: "vii°", chord: "C#dim" },
            { degree: "bIII", chord: "Fmaj" },
            { degree: "bVI", chord: "Bbmaj" },
            { degree: "bVII", chord: "Cmaj" },
            { degree: "bVII9", chord: "C9" },
            { degree: "VI7", chord: "B7" },
            { degree: "II7", chord: "E7" }
        ],
        substitutions: [
            "A7 → Eb7 (tritone)",
            "F#m → Dmaj7 (relative)"
        ],
        nextChords: ["Bm", "G", "A", "F#m", "C"],
        parallelMinorChords: [
            {
                name: "Dm",
                notes: ["D", "F", "A"]
            }
        ],
        circleOfFifths: {
            relativeMinor: "B Minor",
            parallelMinor: "D Minor",
            dominantKey: "A Major",
            subdominantKey: "G Major",
            closelyRelatedKeys: ["A Major", "G Major", "B Minor", "E Minor", "F# Minor", "C Major"],
            distantKeys: ["Ab Major", "Db Major", "E Major"]
        },
        modes: {
            Ionian: ["D", "E", "F#", "G", "A", "B", "C#"],
            Dorian: ["E", "F#", "G", "A", "B", "C#", "D"],
            Phrygian: ["F#", "G", "A", "B", "C#", "D", "E"],
            Lydian: ["G", "A", "B", "C#", "D", "E", "F#"],
            Mixolydian: ["A", "B", "C#", "D", "E", "F#", "G"],
            Aeolian: ["B", "C#", "D", "E", "F#", "G", "A"],
            Locrian: ["C#", "D", "E", "F#", "G", "A", "B"]
        },
        chordSpellingQuickRef: [
            "Dmaj7 = D-F#-A-C#",
            "Dm7 = D-F-A-C"
        ],
        emotionalCharacter: {
            color: "golden yellow / sunny",
            feelings: ["triumphant", "joyful", "bright", "confident"],
            commonGenres: ["Folk", "Rock", "Classical", "Orchestral"]
        }
};

export default dMajor;