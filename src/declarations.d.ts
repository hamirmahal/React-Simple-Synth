// This is necessary to remove the
// Property 'webkitAudioContext' does not exist on type 'Window & typeof globalThis'.
// ts(2339) error.
interface Window {
    webkitAudioContext: typeof AudioContext;
}