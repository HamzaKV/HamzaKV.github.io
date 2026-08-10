// The two ambient glow blobs from the original site, carried over verbatim
// (see app/globals.css .glow / .glow--primary / .glow--secondary).
export default function GlowBackground() {
    return (
        <>
            <div class="glow glow--primary" />
            <div class="glow glow--secondary" />
        </>
    );
}
