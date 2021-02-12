import { keyboardEventCodesToNotes } from './constants';
import Keyboard from './Keyboard';
import Volume from './Volume';
import WaveSelector from './WaveSelector';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const audioContext: AudioContext =
    new (window.AudioContext || window.webkitAudioContext)();
  const oscillatorList: { [key: string]: OscillatorNode }[] = [];

  const mainGainNode: GainNode = audioContext.createGain();
  mainGainNode.connect(audioContext.destination);
  
  const sineTerms: Float32Array = new Float32Array([0, 0, 1, 0, 1]);
  const cosineTerms: Float32Array = new Float32Array(sineTerms.length);
  const customWaveform: PeriodicWave
    = audioContext.createPeriodicWave(cosineTerms, sineTerms);

  for (let i = 0; i < 9; i++)
    oscillatorList[i] = {};

  const playTone = (freq: number, octave: number, pitch: string): void => {
    const noteDiv = document.getElementById(`${pitch}${octave}`);
    if (noteDiv === null || noteDiv.className.includes("active")) return;
    const oscillator: OscillatorNode = audioContext.createOscillator();
    oscillator.connect(mainGainNode);
    if (waveType === "custom") oscillator.setPeriodicWave(customWaveform);
    else oscillator.type = waveType;
    oscillator.frequency.value = freq;
    noteDiv.className += " active";
    oscillator.start();
    oscillatorList[octave][pitch] = oscillator;
  }

  const stopTone = (octave: number, pitch: string): void => {
    // It's important to make sure the oscillator we're trying to stop exists.
    // If it doesn't, we can get a TypeError: undefined is not an object
    // (evaluating 'oscillatorList[octave][pitch].stop').
    if (oscillatorList[octave][pitch] === undefined) return;
    const noteDiv = document.getElementById(`${pitch}${octave}`);
    if (noteDiv === null) return; // If, somehow, noteDiv is null, we exit.
    noteDiv.className = noteDiv.className.replace(" active", "");
    oscillatorList[octave][pitch].stop();
    // It's really important that we delete the OscillatorNode
    // after we stop it, otherwise we can get the following
    // error in Safari: InvalidStateError: The object is in an invalid state.
    delete oscillatorList[octave][pitch];
  }

  const [waveType, setWaveType]: [
    waveType: OscillatorType,
    setWaveType: React.Dispatch<React.SetStateAction<OscillatorType>>
  ] = useState(("custom" as OscillatorType));

  const changeWaveTypeTo = (
    { target: { value } }: { target: HTMLSelectElement }
  ): void => {
    if (value === "custom") setWaveType(value);
    if (value === "sawtooth") setWaveType(value);
    if (value === "sine") setWaveType(value);
    if (value === "square") setWaveType(value);
    if (value === "triangle") setWaveType(value);
  }

  useEffect(() => {
    const handleKeyboardShortcut = (
      {code, type}: {code: string, type: string}
    ): void => {
      const note = keyboardEventCodesToNotes.get(code);
      if (note === undefined) return; // Do nothing if there's no shortcut for that key.
      const { freq, octave, pitch } = note;
      if (type === "keydown") playTone(freq, octave, pitch);
      if (type === "keyup") stopTone(octave, pitch);
    };
    // Thanks to https://www.pluralsight.com/guides/event-listeners-in-react-components!
    window.addEventListener("keydown", handleKeyboardShortcut);
    window.addEventListener("keyup", handleKeyboardShortcut);
    // Without the following return statement, keyboard shortcuts will not play
    // the correct wave type after changing the waveform from the wave selector
    // dropdown, but clicking on notes will play the correct wave type.
    return () => {
      window.removeEventListener("keydown", handleKeyboardShortcut);
      window.removeEventListener("keyup", handleKeyboardShortcut);
    }
  });

  return (
    <>
      <WaveSelector currentWaveType={waveType} handleChange={changeWaveTypeTo} />
      <Keyboard playTone={playTone} stopTone={stopTone} />
      <Volume gainNode={mainGainNode} />
    </>
  );
}

export default App;
