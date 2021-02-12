import { useEffect, useState } from "react";

function Volume({gainNode}: {gainNode: GainNode}) {
    const initialVolume = 1.0;
    const [currentVolume, setCurrentVolume] = useState(initialVolume);
    const handleChange = ({target}: {target: HTMLInputElement}): void => {
        setCurrentVolume(parseFloat(target.value));
    }
    useEffect(() => {
        gainNode.gain.value = currentVolume;
    })
    return (
        <div className="Volume">
            <br />Volume<br />
            <input
                max={2.0}
                min={0.0}
                onChange={handleChange}
                step={0.01}
                type="range"
                value={currentVolume}
            />
        </div>
    );
}

export default Volume;