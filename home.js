// Accessibility Controls
const contrastToggle = document.getElementById('contrast-toggle');
const zoomIn = document.getElementById('zoom-in');
const zoomOut = document.getElementById('zoom-out');
const readText = document.getElementById('read-text');

let zoomLevel = 1;

// Contrast Toggle
contrastToggle.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// Zoom In
zoomIn.addEventListener('click', () => {
    zoomLevel += 0.1;
    document.body.style.transform = `scale(${zoomLevel})`;
    document.body.style.transformOrigin = '0 0';
});

// Zoom Out
zoomOut.addEventListener('click', () => {
    if (zoomLevel > 0.5) {
        zoomLevel -= 0.1;
        document.body.style.transform = `scale(${zoomLevel})`;
        document.body.style.transformOrigin = '0 0';
    }
});

// Text-to-Speech
readText.addEventListener('click', () => {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
        const utterance = new SpeechSynthesisUtterance(selectedText);
        speechSynthesis.speak(utterance);
    } else {
        alert('Please select some text to read aloud.');
    }
});
