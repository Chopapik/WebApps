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


const randWord = () => {
    // return Math.floor(Math.random() * words.length);
    return 7;
}

var randomWord = randWord();
var word = words[randomWord];

const displayWord = () => {
    var wordContainer = document.getElementById("word-container")
    wordContainer.innerHTML = '';


    word.forEach(letter => {
        var letterSpanContainer = document.createElement("div")
        letterSpanContainer.className = "word-letter-container";
        wordContainer.appendChild(letterSpanContainer);

        var letterSpan = document.createElement("span");
        var wordLetter = letter;
        letterSpan.className = "word-letter";
        letterSpan.id = letter.toUpperCase();
        letterSpan.style.visibility = 'hidden';
        console.log(wordLetter);

        letterSpan.textContent = wordLetter;

        letterSpanContainer.appendChild(letterSpan);

    });

};

const generateLettersButtons = () => {

    var letterButtonsContainer = document.getElementById("letter-buttons-container");
    letterButtonsContainer.innerHTML = '';

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

            var isCorrect;


            word.forEach(letter => {
                if (letter.toUpperCase() === letterButton.id) {
                    const matchedLetters = document.querySelectorAll(`.word-letter#${letterButton.id}`);
                    matchedLetters.forEach(matchedLetter => {
                        console.log("Letter matched");
                        matchedLetter.style.visibility = 'visible';
                        isCorrect = true;
                    });
                }
            });
            console.log(isCorrect);
            killHeart(isCorrect);
        };

    });
}


const generateHearts = () => {
    var heartContainer = document.getElementById("heart-container");

    var i = 0;

    for (i; i < 5; i++) {
        var heart = document.createElement("div");
        heart.className = "heart";
        heart.id = i;
        heartContainer.appendChild(heart);
    }
}
let letterIdToDelete = 4;

const killHeart = (isCorrect) => {
    if (!isCorrect && letterIdToDelete >= 0) {
        var killedHeart = document.querySelector(`.heart[id='${letterIdToDelete}']`);
        killedHeart.style.visibility = 'hidden';
        letterIdToDelete--;
        if (letterIdToDelete < 0) {
            document.getElementById("heart-container").textContent = "GAME OVER";
        }
    }
}


displayWord();
generateLettersButtons();
generateHearts();
