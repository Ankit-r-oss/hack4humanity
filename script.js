let speechSynthesisInstance = window.speechSynthesis;
let currentUtterance = null;
let currentZoom = 1.0;

function zoomIn() {
    currentZoom += 0.1;
    document.body.style.fontSize = `${16 * currentZoom}px`;
}

function zoomOut() {
    currentZoom = Math.max(1, currentZoom - 0.1);
    document.body.style.fontSize = `${16 * currentZoom}px`;
}

function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

function speakSelectedText() {
    const selectedText = window.getSelection().toString();
    if (selectedText) {
        if (currentUtterance) {
            speechSynthesisInstance.cancel();
        }
        currentUtterance = new SpeechSynthesisUtterance(selectedText);
        speechSynthesisInstance.speak(currentUtterance);
    }
}

function stopSpeech() {
    if (currentUtterance) {
        speechSynthesisInstance.cancel();
        currentUtterance = null;
    }
}

document.getElementById('increase-font').addEventListener('click', zoomIn);
document.getElementById('decrease-font').addEventListener('click', zoomOut);
document.getElementById('speak-selected').addEventListener('click', speakSelectedText);
document.getElementById('stop-speech').addEventListener('click', stopSpeech);

const loginForm = document.querySelector('.modal-content form');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();  // Prevent the default form action

        const email = loginForm.email.value;
        const password = loginForm.password.value;

        if (email && password) {
            alert('Login Successful');
            window.location.href = 'homepage.html';  // Redirect to home page
        } else {
            alert('Please fill in both email and password.');
        }
    });