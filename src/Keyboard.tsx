import Octave from './components/Octave';
import { NOTE_FREQUENCIES } from './constants';

function Keyboard({playTone, stopTone}: {
        playTone: (freq: number, octave: number, pitch: string) => void,
        stopTone: (octave: number, pitch: string) => void
    }) {
    return (
        <main className="Keyboard">
            <Octave
                notes={NOTE_FREQUENCIES[0]}
                octaveNumber={0}
                playTone={playTone}
                stopTone={stopTone}
            />
            <Octave
                notes={NOTE_FREQUENCIES[1]}
                octaveNumber={1}
                playTone={playTone}
                stopTone={stopTone}
            />
            <Octave
                notes={NOTE_FREQUENCIES[2]}
                octaveNumber={2}
                playTone={playTone}
                stopTone={stopTone}
            />
            <Octave
                notes={NOTE_FREQUENCIES[3]}
                octaveNumber={3}
                playTone={playTone}
                stopTone={stopTone}
            />
            <Octave
                notes={NOTE_FREQUENCIES[4]}
                octaveNumber={4}
                playTone={playTone}
                stopTone={stopTone}
            />
            <Octave
                notes={NOTE_FREQUENCIES[5]}
                octaveNumber={5}
                playTone={playTone}
                stopTone={stopTone}
            />
            <Octave
                notes={NOTE_FREQUENCIES[6]}
                octaveNumber={6}
                playTone={playTone}
                stopTone={stopTone}
            />
            <Octave
                notes={NOTE_FREQUENCIES[7]}
                octaveNumber={7}
                playTone={playTone}
                stopTone={stopTone}
            />
            <Octave
                notes={NOTE_FREQUENCIES[8]}
                octaveNumber={8}
                playTone={playTone}
                stopTone={stopTone}
            />
        </main>
    );
}

export default Keyboard;