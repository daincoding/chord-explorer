const gMajor = {
    "G Major": {
        scaleNotes: ["G", "A", "B", "C", "D", "E", "F#"],
        scales: {
            Major: ["G", "A", "B", "C", "D", "E", "F#"],
            Minor: ["E", "F#", "G", "A", "B", "C", "D"],
            MajorPentatonic: ["G", "A", "B", "D", "E"],
            MinorPentatonic: ["E", "G", "A", "B", "D"],
            Blues: ["G", "Bb", "C", "C#", "D", "F"],
            HarmonicMinor: ["E", "F#", "G", "A", "B", "C", "D#"],
            MelodicMinorAscending: ["E", "F#", "G", "A", "B", "C#", "D#"]
        },
        parallelMinor: "G Minor",
        triads: [
            {
                type: "Major",
                name: "G",
                root: ["G", "B", "D"],
                inv1: ["B", "D", "G"],
                inv2: ["D", "G", "B"]
            },
            {
                type: "Minor",
                name: "Gm",
                root: ["G", "Bb", "D"],
                inv1: ["Bb", "D", "G"],
                inv2: ["D", "G", "Bb"]
            }
        ],
        sevenths: [
            {
                name: "Gmaj7",
                root: ["G", "B", "D", "F#"],
                inv1: ["B", "D", "F#", "G"],
                inv2: ["D", "F#", "G", "B"],
                inv3: ["F#", "G", "B", "D"]
            }
        ],
        extendedChords: [
            { name: "Gmaj9", notes: ["G", "B", "D", "F#", "A"] },
            { name: "G9", notes: ["G", "B", "D", "F", "A"] },
            { name: "G11", notes: ["G", "B", "D", "F", "A", "C"] },
            { name: "G13", notes: ["G", "B", "D", "F", "A", "C", "E"] },
            { name: "Gmin9", notes: ["G", "Bb", "D", "F", "A"] },
            { name: "Gmin11", notes: ["G", "Bb", "D", "F", "A", "C"] },
            { name: "Gmin13", notes: ["G", "Bb", "D", "F", "A", "C", "E"] },
            { name: "G7b9", notes: ["G", "B", "D", "F", "Ab"] },
            { name: "G7#9", notes: ["G", "B", "D", "F", "A#"] },
            { name: "G7#11", notes: ["G", "B", "D", "F", "C#"] }
        ],
        insaneChords: [
            { name: "G13b9#11", notes: ["G", "B", "D", "F", "Ab", "C#", "E"] },
            { name: "G7alt", notes: ["G", "B", "D", "F", "Ab", "A#", "C#"] },
            { name: "Gmaj7#11", notes: ["G", "B", "D", "F#", "C#"] },
            { name: "G7#5#9", notes: ["G", "B", "D#", "F", "A#"] },
            { name: "G7b5b9", notes: ["G", "B", "Db", "F", "Ab"] },
            { name: "Gdim7add13", notes: ["G", "Bb", "Db", "E", "F#", "A", "C", "E"] }
        ],
        commonProgressions: {
            Pop: [
                "I - IV - V → G - C - D",
                "I - V - vi - IV - V → G - D - Em - C - D"
            ],
            Jazz: [
                "ii - V - I → Am - D7 - G",
                "ii7 - V7 - Imaj7 - VI7 - ii7 → Am7 - D7 - Gmaj7 - E7 - Am7",
                "iii7 - VI7 - ii7 - V7 - Imaj7 → Bm7 - E7 - Am7 - D7 - Gmaj7"
            ],
            Funk: [
                "I7 - IV7 - V7 - IV7 - I7 → G7 - C7 - D7 - C7 - G7",
                "I9 - bVII9 - IV9 - V9 - I9 → G9 - F9 - C9 - D9 - G9"
            ],
            RnB: [
                "Imaj7 - iii7 - vi7 - II7 - V7 → Gmaj7 - Bm7 - Em7 - A7 - D7"
            ],
            Latin: [
                "Imaj7 - bIII7 - ii7 - V7 - Imaj7 → Gmaj7 - Bb7 - Am7 - D7 - Gmaj7"
            ],
            Synthwave: [
                "vi - IV - I - V → Em - C - G - D",
                "i - VI - III - VII → Em - C - G - D",
                "I - iii - vi - IV → G - Bm - Em - C",
                "i - VII - VI - VII → Em - D - C - D",
                "I - V - IV - V → G - D - C - D",
                "vi - V - IV - V → Em - D - C - D"
            ]
        },
        asianPopProgressions: {
            Japanese: [
                "Kojo no Tsuki → iv - bVI - V → Gm - Bb - D",
                "Hirano → bVI - bVII - I → Bb - C - G",
                "Tokyo City Pop → IVmaj7 - V7 - iii7 - vi7 → Cmaj7 - D7 - Bm7 - Em7",
                "Haru no Hi → bVImaj7 - bVII - Imaj7 → Bbmaj7 - C - Gmaj7",
                "Evangelion Ending → ii - V - iii - VI → Am7 - D7 - Bm7 - E7",
                "Natsukashii → Imaj7 - iii7 - vi7 - II7 → Gmaj7 - Bm7 - Em7 - A7",
                "J-Rock Minor Lift → iv - V - bVI - V → Gm - D - Eb - D"
            ],
            CityPop: [
                "IVmaj7 - V7 - iii7 - vi7 → Cmaj7 - D7 - Bm7 - Em7",
                "Imaj7 - bIII7 - ii7 - V7 → Gmaj7 - Bb7 - Am7 - D7",
                "I - V - vi - IV → G - D - Em - C",
                "Imaj7 - VI7 - ii7 - V7 → Gmaj7 - E7 - Am7 - D7"
            ],
            KPop: [
                "Imaj7 - iii7 - vi7 - IVmaj7 → Gmaj7 - Bm7 - Em7 - Cmaj7",
                "vi - IV - I - V → Em - C - G - D",
                "I - V/vi - vi - IV → G - B7 - Em - C",
                "I - V - IV - V → G - D - C - D"
            ],
            AnimeBallad: [
                "vi - IV - I - V → Em - C - G - D",
                "I - V/vi - vi - IV → G - B7 - Em - C",
                "IV - V - iii - vi → C - D - Bm - Em",
                "I - iii - IV - V → G - Bm - C - D",
                "Imaj7 - iii7 - vi7 - IVmaj7 → Gmaj7 - Bm7 - Em7 - Cmaj7",
                "ii7 - V7 - Imaj7 - vi7 → Am7 - D7 - Gmaj7 - Em7",
                "Imaj7 - vi7 - IVmaj7 - V7 → Gmaj7 - Em7 - Cmaj7 - D7"
            ]
        },
        chordFunctions: [
            { degree: "I", chord: "Gmaj" },
            { degree: "ii", chord: "Amin" },
            { degree: "iii", chord: "Bmin" },
            { degree: "IV", chord: "Cmaj" },
            { degree: "V", chord: "Dmaj" },
            { degree: "vi", chord: "Emin" },
            { degree: "vii°", chord: "F#dim" },
            { degree: "bIII", chord: "Bbmaj" },
            { degree: "bVI", chord: "Ebmaj" },
            { degree: "bVII", chord: "Fmaj" },
            { degree: "bVII9", chord: "F9" },
            { degree: "VI7", chord: "E7" },
            { degree: "II7", chord: "A7" }
        ],
        substitutions: [
            "D7 → Ab7 (tritone)",
            "Bm → Gmaj7 (relative)"
        ],
        nextChords: ["Em", "C", "D", "Bm", "F"],
        parallelMinorChords: [
            {
                name: "Gm",
                notes: ["G", "Bb", "D"]
            }
        ],
        circleOfFifths: {
            relativeMinor: "E Minor",
            parallelMinor: "G Minor",
            dominantKey: "D Major",
            subdominantKey: "C Major",
            closelyRelatedKeys: ["D Major", "C Major", "E Minor", "A Minor", "B Minor", "F Major"],
            distantKeys: ["Db Major", "Ab Major", "E Major"]
        },
        modes: {
            Ionian: ["G", "A", "B", "C", "D", "E", "F#"],
            Dorian: ["A", "B", "C", "D", "E", "F#", "G"],
            Phrygian: ["B", "C", "D", "E", "F#", "G", "A"],
            Lydian: ["C", "D", "E", "F#", "G", "A", "B"],
            Mixolydian: ["D", "E", "F#", "G", "A", "B", "C"],
            Aeolian: ["E", "F#", "G", "A", "B", "C", "D"],
            Locrian: ["F#", "G", "A", "B", "C", "D", "E"]
        },
        chordSpellingQuickRef: [
            "Gmaj7 = G-B-D-F#",
            "Gm7 = G-Bb-D-F"
        ],
        emotionalCharacter: {
            color: "light green / spring green",
            feelings: ["optimistic", "pastoral", "bright", "open", "joyful"],
            commonGenres: ["Folk", "Pop", "Rock", "Orchestral"]
        }
    },
}