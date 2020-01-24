const speech = document.querySelector('.speech');
const confidence = document.querySelector('.confidence');

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

function handleResult(event) {
    const result = event.results;
    speech.textContent = `${(result[result.length - 1][0].transcript)}`;
    confidence.textContent =
        `Predicted accuracy of catching your speech: ${(((result[result.length - 1][0].confidence)).toFixed(2))*100}%`;
}

function recognizeSpeech() {
    // Checking if users browser supports speech reco
    if (!('SpeechRecognition' in window)) {
        speech.textContent =
            'Unfortunately your browers does not support speech recognition. Try in Google Chrome.';
        return;
    }
    const recognition = new SpeechRecognition();
    // If you set it to true, function will be continously listening for speech, with false it will stop after catching a speech
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = handleResult;
    recognition.start();
}

recognizeSpeech();