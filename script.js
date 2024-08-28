// Renombrado de variables a inglés
let encryptButton = document.getElementById("button_encrypt");
let decryptButton = document.getElementById("button_decrypt");
let copyButton = document.getElementById("button_copiar");
let buttons = document.getElementsByClassName(".button");
let inputText = document.getElementById("input_text_encrypt");
let outputText = document.getElementById("output_text_decrypt");
let bodyElement = document.querySelector('body');
let parentContainer = document.querySelector(".result");

function enableButtons() {
    encryptButton.disabled = false;
    decryptButton.disabled = false;
}

function enableCopy() {
    copyButton.disabled = false;
}

function updatePage() {
    if (inputText.value !== "") {
        parentContainer.classList.remove("no_texto");
    }
    inputText.focus();
}

function showAlert(message) {
    var alertElement = document.getElementById('custom-alert');
    alertElement.innerHTML = message;
    alertElement.style.display = 'block';
    setTimeout(function() {
        alertElement.style.display = 'none';
    }, 2000); // Hide the alert after 2 seconds
}

function focusInputText() {
    inputText.focus();
}

function encryptMessage() {
    if (inputText.value != "") {
        // Regular expression to check lowercase letters and spaces
        let regExp = /^[a-z\s]+$/;

        if (regExp.test(inputText.value)) {
            let encryptedMessage = inputText.value
                .replace(/e/gim, "enter")
                .replace(/i/gim, "imes")
                .replace(/a/gim, "ai")
                .replace(/o/gim, "ober")
                .replace(/u/gim, "ufat");

            outputText.innerHTML = encryptedMessage;
            outputText.value = encryptedMessage;
            updatePage();
        } else {
            showAlert("Please enter a valid text with only lowercase letters and spaces.");
            focusInputText();
        }
    } else {
        showAlert("Please enter some text.");
        focusInputText();
    }
}

function decryptMessage() {
    if (inputText.value != "") {
        let decryptedMessage = inputText.value
            .replace(/enter/gim, "e")
            .replace(/imes/gim, "i")
            .replace(/ai/gim, "a")
            .replace(/ober/gim, "o")
            .replace(/ufat/gim, "u");

        outputText.innerHTML = decryptedMessage;
        outputText.value = decryptedMessage;
        updatePage();
    } else {
        showAlert("To decrypt a message, use the text box.");
        focusInputText();
    }
}

function copyMessage() {
    if (outputText.value != "") {
        navigator.clipboard.writeText(outputText.value);
        showAlert("Message copied.");
    } else {
        showAlert("Nothing to copy.");
    }
}

encryptButton.onclick = encryptMessage;
decryptButton.onclick = decryptMessage;
copyButton.onclick = copyMessage;
inputText.onclick = enableButtons;
