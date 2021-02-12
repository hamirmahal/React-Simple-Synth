function WaveSelector({currentWaveType, handleChange}: {
    currentWaveType: OscillatorType,
    handleChange: ({target: { value }}: {target: HTMLSelectElement}) => void
}) {
    return (
        <div className="WaveSelector">
            Waveform<br />
            <select onChange={handleChange} value={currentWaveType}>
                <option value="custom">Custom</option>
                <option value="sawtooth">Sawtooth</option>
                <option value="sine">Sine</option>
                <option value="square">Square</option>
                <option value="triangle">Triangle</option>
            </select>
        </div>
    )
}

export default WaveSelector;