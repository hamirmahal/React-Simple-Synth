export const keyboardEventCodesToNotes = new Map<string, Note>();
keyboardEventCodesToNotes.set("KeyQ", { freq: 261.63, octave: 4, pitch: "C"});
keyboardEventCodesToNotes.set("Digit2", { freq: 277.18, octave: 4, pitch: "C#"});
keyboardEventCodesToNotes.set("KeyW", { freq: 293.66, octave: 4, pitch: "D"});
keyboardEventCodesToNotes.set("Digit3", { freq: 311.13, octave: 4, pitch: "D#"});
keyboardEventCodesToNotes.set("KeyE", { freq: 329.63, octave: 4, pitch: "E"});
keyboardEventCodesToNotes.set("KeyR", { freq: 349.23, octave: 4, pitch: "F"});
keyboardEventCodesToNotes.set("Digit5", { freq: 369.99, octave: 4, pitch: "F#"});
keyboardEventCodesToNotes.set("KeyT", { freq: 392.00, octave: 4, pitch: "G"});
keyboardEventCodesToNotes.set("Digit6", { freq: 415.30, octave: 4, pitch: "G#"});
keyboardEventCodesToNotes.set("KeyY", { freq: 440.00, octave: 4, pitch: "A"});
keyboardEventCodesToNotes.set("Digit7", { freq: 466.16, octave: 4, pitch: "A#"});
keyboardEventCodesToNotes.set("KeyU", { freq: 493.88, octave: 4, pitch: "B"});
keyboardEventCodesToNotes.set("KeyI", { freq: 523.25, octave: 5, pitch: "C"});
keyboardEventCodesToNotes.set("Digit9", { freq: 554.37, octave: 5, pitch: "C#"});
keyboardEventCodesToNotes.set("KeyO", { freq: 587.33, octave: 5, pitch: "D"});
keyboardEventCodesToNotes.set("Digit0", { freq: 622.25, octave: 5, pitch: "D#"});
keyboardEventCodesToNotes.set("KeyP", { freq: 659.25, octave: 5, pitch: "E"});
keyboardEventCodesToNotes.set("BracketLeft", { freq: 698.46, octave: 5, pitch: "F"});
keyboardEventCodesToNotes.set("Equal", { freq: 739.99, octave: 5, pitch: "F#"});
keyboardEventCodesToNotes.set("BracketRight", { freq: 783.99, octave: 5, pitch: "G"});
keyboardEventCodesToNotes.set("Backspace", { freq: 830.61, octave: 5, pitch: "G#"});
keyboardEventCodesToNotes.set("Backslash", { freq: 880.00, octave: 5, pitch: "A"});

export const NOTE_FREQUENCIES: { [pitch: string]: number }[] = [
    {
        "A": 27.500000000000000,
        "A#": 29.135235094880619,
        "B": 30.867706328507756,
    },
    {
        "C": 32.703195662574829,
        "C#": 34.647828872109012,
        "D": 36.708095989675945,
        "D#": 38.890872965260113,
        "E": 41.203444614108741,
        "F": 43.653528929125485,
        "F#": 46.249302838954299,
        "G": 48.999429497718661,
        "G#": 51.913087197493142,
        "A": 55.000000000000000,
        "A#": 58.270470189761239,
        "B": 61.735412657015513,
    },
    {
        "C": 65.41, // https://pages.mtu.edu/~suits/notefreqs.html
        "C#": 69.30, // https://pages.mtu.edu/~suits/notefreqs.html
        "D": 73.42, // https://pages.mtu.edu/~suits/notefreqs.html
        "D#": 77.78, // https://pages.mtu.edu/~suits/notefreqs.html
        "E": 82.41, // https://pages.mtu.edu/~suits/notefreqs.html
        "F": 87.31, // https://pages.mtu.edu/~suits/notefreqs.html
        "F#": 92.50, // https://pages.mtu.edu/~suits/notefreqs.html
        "G": 98.00, // https://pages.mtu.edu/~suits/notefreqs.html
        "G#": 103.83, // https://pages.mtu.edu/~suits/notefreqs.html
        "A": 110.00, // https://pages.mtu.edu/~suits/notefreqs.html
        "A#": 116.54, // https://pages.mtu.edu/~suits/notefreqs.html
        "B": 123.47, // https://pages.mtu.edu/~suits/notefreqs.html
    },
    {
        "C": 130.81, // https://pages.mtu.edu/~suits/notefreqs.html
        "C#": 138.59, // https://pages.mtu.edu/~suits/notefreqs.html
        "D": 146.83, // https://pages.mtu.edu/~suits/notefreqs.html
        "D#": 155.56, // https://pages.mtu.edu/~suits/notefreqs.html
        "E": 164.81, // https://pages.mtu.edu/~suits/notefreqs.html
        "F": 174.61, // https://pages.mtu.edu/~suits/notefreqs.html
        "F#": 185.00, // https://pages.mtu.edu/~suits/notefreqs.html
        "G": 196.00, // https://pages.mtu.edu/~suits/notefreqs.html
        "G#": 207.65, // https://pages.mtu.edu/~suits/notefreqs.html
        "A": 220.00, // https://pages.mtu.edu/~suits/notefreqs.html
        "A#": 233.08, // https://pages.mtu.edu/~suits/notefreqs.html
        "B": 246.94, // https://pages.mtu.edu/~suits/notefreqs.html
    },
    {
        "C": 261.63, // https://pages.mtu.edu/~suits/notefreqs.html
        "C#": 277.18, // https://pages.mtu.edu/~suits/notefreqs.html
        "D": 293.66, // https://pages.mtu.edu/~suits/notefreqs.html
        "D#": 311.13, // https://pages.mtu.edu/~suits/notefreqs.html
        "E": 329.63, // https://pages.mtu.edu/~suits/notefreqs.html
        "F": 349.23, // https://pages.mtu.edu/~suits/notefreqs.html
        "F#": 369.99, // https://pages.mtu.edu/~suits/notefreqs.html
        "G": 392.00, // https://pages.mtu.edu/~suits/notefreqs.html
        "G#": 415.30, // https://pages.mtu.edu/~suits/notefreqs.html
        "A": 440.00, // https://pages.mtu.edu/~suits/notefreqs.html
        "A#": 466.16, // https://pages.mtu.edu/~suits/notefreqs.html
        "B": 493.88, // https://pages.mtu.edu/~suits/notefreqs.html
    },
    {
        "C": 523.25, // https://pages.mtu.edu/~suits/notefreqs.html
        "C#": 554.37, // https://pages.mtu.edu/~suits/notefreqs.html
        "D": 587.33, // https://pages.mtu.edu/~suits/notefreqs.html
        "D#": 622.25, // https://pages.mtu.edu/~suits/notefreqs.html
        "E": 659.25, // https://pages.mtu.edu/~suits/notefreqs.html
        "F": 698.46, // https://pages.mtu.edu/~suits/notefreqs.html
        "F#": 739.99, // https://pages.mtu.edu/~suits/notefreqs.html
        "G": 783.99, // https://pages.mtu.edu/~suits/notefreqs.html
        "G#": 830.61, // https://pages.mtu.edu/~suits/notefreqs.html
        "A": 880.00, // https://pages.mtu.edu/~suits/notefreqs.html
        "A#": 932.33, // https://pages.mtu.edu/~suits/notefreqs.html
        "B": 987.77, // https://pages.mtu.edu/~suits/notefreqs.html
    },
    {
        "C": 1046.50, // https://pages.mtu.edu/~suits/notefreqs.html
        "C#": 1108.73, // https://pages.mtu.edu/~suits/notefreqs.html
        "D": 1174.66, // https://pages.mtu.edu/~suits/notefreqs.html
        "D#": 1244.51, // https://pages.mtu.edu/~suits/notefreqs.html
        "E": 1318.51, // https://pages.mtu.edu/~suits/notefreqs.html
        "F": 1396.91, // https://pages.mtu.edu/~suits/notefreqs.html
        "F#": 1479.98, // https://pages.mtu.edu/~suits/notefreqs.html
        "G": 1567.98, // https://pages.mtu.edu/~suits/notefreqs.html
        "G#": 1661.22, // https://pages.mtu.edu/~suits/notefreqs.html
        "A": 1760.00, // https://pages.mtu.edu/~suits/notefreqs.html
        "A#": 1864.66, // https://pages.mtu.edu/~suits/notefreqs.html
        "B": 1975.53, // https://pages.mtu.edu/~suits/notefreqs.html
    },
    {
        "C": 2093.004522404789077,
        "C#": 2217.461047814976769,
        "D": 2349.318143339260482,
        "D#": 2489.015869776647285,
        "E": 2637.020455302959437,
        "F": 2793.825851464031075,
        "F#": 2959.955381693075191,
        "G": 3135.963487853994352,
        "G#": 3322.437580639561108,
        "A": 3520.000000000000000,
        "A#": 3729.310092144719331,
        "B": 3951.066410048992894,
    },
    {
        "C": 4186.009044809578154,
    }
];

export type Note = {
    freq: number,
    octave: number,
    pitch: string,
};