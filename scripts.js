// Define Lua script functions for processing words
function processWordScript1(word) {
    const replacements = {
        "a": "Α", "b": "Β", "c": "С", "d": "Đ", "e": "Ε",
        "f": "Ƒ", "g": "Ĝ", "h": "Ή", "i": "İ", "j": "Ј",
        "k": "Κ", "l": "Ĺ", "m": "Μ", "n": "Ν", "o": "Ø",
        "p": "Ρ", "q": "Ꝗ", "r": "Ř", "s": "Š", "t": "Τ",
        "u": "Џ", "v": "Ṿ", "w": "Ш", "x": "Χ", "y": "Ύ",
        "z": "Ζ"
    };

    return word.toLowerCase().split('').map(char => replacements[char] || char).join('');
}

function processWordScript2(word) {
    const outputWord = word
        .replace(/a/g, 'Α')
        .replace(/b/g, 'Β')
        .replace(/c/g, 'С')
        .replace(/d/g, 'Đ')
        .replace(/e/g, 'Ε')
        .replace(/f/g, 'Ƒ')
        .replace(/g/g, 'Ĝ')
        .replace(/h/g, 'Ή')
        .replace(/i/g, 'İ')
        .replace(/j/g, 'Ј')
        .replace(/k/g, 'Κ')
        .replace(/l/g, 'Ĺ')
        .replace(/m/g, 'Μ')
        .replace(/n/g, 'Ν')
        .replace(/o/g, 'Ø')
        .replace(/p/g, 'Ρ')
        .replace(/q/g, 'Ꝗ')
        .replace(/r/g, 'Ř')
        .replace(/s/g, 'Š')
        .replace(/t/g, 'Τ')
        .replace(/u/g, 'Џ')
        .replace(/v/g, 'Ṿ')
        .replace(/w/g, 'Ш')
        .replace(/x/g, 'Χ')
        .replace(/y/g, 'Ύ')
        .replace(/z/g, 'Ζ');

    return outputWord;
}

function processWordScript3(word) {
    const letterReplacements = {
        "a": "α", "b": "β", "c": "¢", "d": "∂", "e": "є",
        "f": "ƒ", "g": "g", "h": "н", "i": "ι", "j": "נ",
        "k": "к", "l": "ℓ", "m": "м", "n": "η", "o": "σ",
        "p": "ρ", "q": "q", "r": "я", "s": "$", "t": "т",
        "u": "υ", "v": "ν", "w": "ω", "x": "χ", "y": "γ",
        "z": "z"
    };

    return word.toLowerCase().split('').map(char => letterReplacements[char] || char).join('');
}

// Function to process the word based on selected script
function processWord(option, word) {
    switch (option) {
        case 1:
            return processWordScript1(word);
        case 2:
            return processWordScript2(word);
        case 3:
            return processWordScript3(word);
        default:
            return word;
    }
}

// Handle button click and show the copied notification
document.getElementById('copyButton').addEventListener('click', function() {
    const outputWord = document.getElementById('outputWord').innerText;
    navigator.clipboard.writeText(outputWord).then(() => {
        const notification = document.getElementById('copyNotification');
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
});

// Handle textarea input and select option change
document.getElementById('inputWord').addEventListener('input', updateOutput);
document.getElementById('selectOption').addEventListener('change', updateOutput);

function updateOutput() {
    const inputWord = document.getElementById('inputWord').value;
    const selectedOption = parseInt(document.getElementById('selectOption').value, 10);
    const processedWord = processWord(selectedOption, inputWord);
    document.getElementById('outputWord').innerText = processedWord;
}
