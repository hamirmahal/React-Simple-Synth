function Accidental(
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
    
    return (
        <div
            className={`Accidental ${pitch}`}
            id={`${pitch}${octave}`} // Need this to style notes that are playing
            // Pressing and holding a note on a touchscreen shouldn't open the
            // right-click menu!
            onContextMenu={(mouseEvnt: React.MouseEvent) => mouseEvnt.preventDefault()}
            onMouseDown={({buttons}: {buttons: number}) =>
                handleMouseDownAndOver(buttons, frequency, octave, pitch)}
            onMouseLeave={() => stopTone(octave, pitch)}
            onMouseOver={({buttons}: {buttons: number}) =>
                handleMouseDownAndOver(buttons, frequency, octave, pitch)}
            onMouseUp={() => stopTone(octave, pitch)}
            onTouchEnd={() => stopTone(octave, pitch)}
            onTouchStart={() => playTone(frequency, octave, pitch)}
        >
            {pitch}<sub>{octave}</sub>
        </div>
    );
}

export default Accidental;