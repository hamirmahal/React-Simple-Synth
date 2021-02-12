import NonAccidental from './NonAccidental';
import Accidental from './Accidental';

function Octave(
    { notes, octaveNumber, playTone, stopTone }:
    { notes: { [note: string]: number }, octaveNumber: number,
      playTone: (freq: number, octave: number, pitch: string) => void,
      stopTone: (octave: number, pitch: string) => void }
) {
    if (octaveNumber === 0)
        return (
            <div className="Octave">
                <NonAccidental 
                    frequency={notes["A"]}
                    octave={octaveNumber}
                    pitch="A"
                    playTone={playTone}
                    stopTone={stopTone}
                />
                <Accidental
                    frequency={notes["A#"]}
                    octave={octaveNumber}
                    pitch="A#"
                    playTone={playTone}
                    stopTone={stopTone}
                />
                <NonAccidental 
                    frequency={notes["B"]}
                    octave={octaveNumber}
                    pitch="B"
                    playTone={playTone}
                    stopTone={stopTone}
                />
            </div>
        );
    
    if (octaveNumber === 8)
        return (
            <div className="Octave">
                <NonAccidental 
                    frequency={notes["C"]}
                    octave={octaveNumber}
                    pitch="C"
                    playTone={playTone}
                    stopTone={stopTone}
                />
            </div>
        );
    
    return (
        <div className="Octave">
            <NonAccidental 
                frequency={notes["C"]}
                octave={octaveNumber}
                pitch="C"
                playTone={playTone}
                stopTone={stopTone}
            />
            <Accidental
                frequency={notes["C#"]}
                octave={octaveNumber}
                pitch="C#"
                    playTone={playTone}
                    stopTone={stopTone}
            />
            <NonAccidental 
                frequency={notes["D"]}
                octave={octaveNumber}
                pitch="D"
                playTone={playTone}
                stopTone={stopTone}
            />
            <Accidental
                frequency={notes["D#"]}
                octave={octaveNumber}
                pitch="D#"
                    playTone={playTone}
                    stopTone={stopTone}
            />
            <NonAccidental 
                frequency={notes["E"]}
                octave={octaveNumber}
                pitch="E"
                playTone={playTone}
                stopTone={stopTone}
            />
            <NonAccidental 
                frequency={notes["F"]}
                octave={octaveNumber}
                pitch="F"
                playTone={playTone}
                stopTone={stopTone}
            />
            <Accidental
                frequency={notes["F#"]}
                octave={octaveNumber}
                pitch="F#"
                    playTone={playTone}
                    stopTone={stopTone}
            />
            <NonAccidental 
                frequency={notes["G"]}
                octave={octaveNumber}
                pitch="G"
                playTone={playTone}
                stopTone={stopTone}
            />
            <Accidental
                frequency={notes["G#"]}
                octave={octaveNumber}
                pitch="G#"
                    playTone={playTone}
                    stopTone={stopTone}
            />
            <NonAccidental 
                frequency={notes["A"]}
                octave={octaveNumber}
                pitch="A"
                playTone={playTone}
                stopTone={stopTone}
            />
            <Accidental
                frequency={notes["A#"]}
                octave={octaveNumber}
                pitch="A#"
                    playTone={playTone}
                    stopTone={stopTone}
            />
            <NonAccidental 
                frequency={notes["B"]}
                octave={octaveNumber}
                pitch="B"
                playTone={playTone}
                stopTone={stopTone}
            />
        </div>
    );
}

export default Octave;