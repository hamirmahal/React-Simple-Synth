import { useEffect, useRef } from "react";

function NonAccidental(
    { frequency, octave, pitch, playTone, stopTone }:
    { frequency: number, octave: number, pitch: string,
        playTone: (freq: number, octave: number, pitch: string) => void,
        stopTone: (octave: number, pitch: string) => void }
) {
    const handleMouseDownAndOver = (
        buttons: number, freq: number, octave: number, pitch: string
    ): void => { // Only play the tone if the left mouse button is down.
        if (buttons & 1) playTone(frequency, octave, pitch);
    }

    const note = useRef(document.createElement("div"));

    useEffect(() => { // Start at the end of the keyboard.
        if (octave === 8 && pitch === "C") note.current.scrollIntoView(false);
    }, [octave, pitch])
    
    return (
        <div
            className="NonAccidental"
            id={`${pitch}${octave}`} // Need this to style notes that are playing
            onMouseDown={({buttons}: {buttons: number}) =>
                handleMouseDownAndOver(buttons, frequency, octave, pitch)}
            onMouseLeave={() => stopTone(octave, pitch)}
            onMouseOver={({buttons}: {buttons: number}) =>
                handleMouseDownAndOver(buttons, frequency, octave, pitch)}
            onMouseUp={() => stopTone(octave, pitch)}
            onTouchEnd={() => stopTone(octave, pitch)}
            onTouchStart={() => playTone(frequency, octave, pitch)}
            ref={note}
        >
            <span className="NonAccidentalLabel">
                {pitch}<sub>{octave}</sub>
            </span>
        </div>
    );
}

export default NonAccidental;