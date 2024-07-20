var words = [
    ['c', 'h', 'a', 'i', 'r'],
    ['t', 'a', 'b', 'l', 'e'],
    ['a', 'p', 'p', 'l', 'e'],
    ['b', 'a', 'n', 'a', 'n', 'a'],
    ['o', 'r', 'a', 'n', 'g', 'e'],
    ['g', 'r', 'a', 'p', 'e'],
    ['k', 'e', 'y', 'b', 'o', 'a', 'r', 'd'],
    ['m', 'o', 'n', 'i', 't', 'o', 'r'],
    ['l', 'a', 'p', 't', 'o', 'p'],
    ['m', 'o', 'u', 's', 'e'],
    ['w', 'i', 'n', 'd', 'o', 'w'],
    ['d', 'o', 'o', 'r'],
    ['c', 'e', 'i', 'l', 'i', 'n', 'g'],
    ['f', 'l', 'o', 'o', 'r'],
    ['w', 'a', 'l', 'l'],
    ['b', 'e', 'd'],
    ['s', 'o', 'f', 'a'],
    ['p', 'i', 'l', 'l', 'o', 'w'],
    ['b', 'l', 'a', 'n', 'k', 'e', 't'],
    ['l', 'a', 'm', 'p']
];

const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));


function randWord() {
    return Math.floor(Math.random() * words.length);
}

var randomWord = randWord();
var word = words[randomWord];

function displayWord() {
    var wordContainer = document.getElementById("word-container")
    wordContainer.innerHTML = '';

    word.forEach(letter => {

        var letterSpan = document.createElement("span");

        letterSpan.textContent = letter;

        letterSpan.className = "word-letter";

        wordContainer.appendChild(letterSpan);

        // div.style.visibility = 'hidden';
    });
}

function generateLettersButtons() {

    var letterButtonsContainer = document.getElementById("letter-buttons-container");

    alphabet.forEach(letter => {

        var letterButton = document.createElement("div");
        letterButton.textContent = letter;
        letterButton.className = "letter-button";
        letterButton.id = letter;
        letterButtonsContainer.appendChild(letterButton);

        letterButton.onclick = () => {
            letterButton.classList.add("clicked");

            setTimeout(() => {
                letterButton.classList.remove("clicked");
            }, 50);

        }
    })
}

// function checkLetter(){

// }



function main() {
    displayWord();
    generateLettersButtons();

}