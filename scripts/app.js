document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("input-text");
    const outputTextDiv = document.getElementById("output-text");
    const outputTextarea = outputTextDiv.querySelector("textarea");
    const noMessage = document.getElementById("no-message");
    const encryptButton = document.getElementById("encrypt-button");
    const decryptButton = document.getElementById("decrypt-button");
    const copyButton = document.getElementById("copy-button");

    const encryptations = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    const decryptations = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
    };

    function encrypt() {
        const text = inputText.value.trim(); // Elimina espacios en blanco
        if (text === "") {
            showNoMessage();
            return;
        }
        let result = text.replace(/[eioua]/g, letter => encryptations[letter]);
        showOutput(result);
    }

    function decrypt() {
        let text = inputText.value.trim(); // Elimina espacios en blanco
        if (text === "") {
            showNoMessage();
            return;
        }
        for (let key in decryptations) {
            text = text.split(key).join(decryptations[key]);
        }
        showOutput(text);
    }

    function showOutput(result) {
        outputTextarea.value = result;
        outputTextDiv.style.display = "flex";
        noMessage.style.display = "none";
    }

    function showNoMessage() {
        outputTextDiv.style.display = "none";
        noMessage.style.display = "flex";
    }

    function copy() {
        outputTextarea.select();
        outputTextarea.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(outputTextarea.value)
            .then(() => alert("Texto copiado: " + outputTextarea.value))
            .catch(err => alert("Hubo un error al copiar el texto: " + err));
    }

    encryptButton.addEventListener("click", encrypt);
    decryptButton.addEventListener("click", decrypt);
    copyButton.addEventListener("click", copy);
});
