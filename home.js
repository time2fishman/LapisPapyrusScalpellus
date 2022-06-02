const player = {
    currentChoice: null
};
const computer = {
    currentChoice: null
};
const choices = ["Lapis", "Papyrus", "Scalpellus"];

// event listner variables for button clicks

const clicklapis = document
    .getElementById("lapis-button")
    .addEventListener("click", selectLapis);
const clickpapyrus = document
    .getElementById("papyrus-button")
    .addEventListener("click", selectPapyrus);
const clickscallpellus = document
    .getElementById("scalpellus-button")
    .addEventListener("click", selectScalpellus);

// randomly chooses an index number from the 'choices' variable/array

function computerChooses() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
}

// creates a new <p> element and appends the game result text (found in compairChoices' function) to it

function displayResult(result) {
    const resultText = document.createElement('p');
    resultText.setAttribute('class', 'output')
    resultText.innerText = result;
    document.body.appendChild(resultText);
}

// runs through 'conditional' statements until it finds a true one that matches the computer and the players choices, 
// then calls the 'displayResult' funciton to output the result to the page

function compairChoices() {
    computerChooses();
    if (computer.currentChoice === player.currentChoice) {
        displayResult(
            "It's a tie! The computer and player both chose " + computer.currentChoice
        );
    } else if (computer.currentChoice === choices[0]) {
        if (player.currentChoice === choices[1]) {
            displayResult(
                "The player wins! The computer chose " +
                computer.currentChoice +
                " and the player chose " +
                player.currentChoice
            );
        } else {
            displayResult(
                "The computer wins! The computer chose " +
                computer.currentChoice +
                " and the player chose " +
                player.currentChoice
            );
        }
    } else if (computer.currentChoice === choices[1]) {
        if (player.currentChoice === choices[2]) {
            displayResult(
                "The player wins! The computer chose " +
                computer.currentChoice +
                " and the player chose " +
                player.currentChoice
            );
        } else {
            displayResult(
                "The computer wins! The computer chose " +
                computer.currentChoice +
                " and the player chose " +
                player.currentChoice
            );
        }
    } else if (computer.currentChoice === choices[2]) {
        if (player.currentChoice === choices[0]) {
            displayResult(
                "The player wins! The computer chose " +
                computer.currentChoice +
                " and the player chose " +
                player.currentChoice
            );
        } else {
            displayResult(
                "The computer wins! The computer chose " +
                computer.currentChoice +
                " and the player chose " +
                player.currentChoice
            );
        }
    }
}

// removes previous result upon button click
function reset() {
    const clearResult = document.querySelector('p');
    clearResult.remove();
}

// the following 3 functions assign the 'player.currentChoice' index when the relating button is clicked.
// It then calls the 'compairChoices' function to evaluate the conditions and display the game result

function selectLapis() {
    player.currentChoice = choices[0];
    compairChoices();
    reset();
}

function selectPapyrus() {
    player.currentChoice = choices[1];
    compairChoices();
    reset();
}

function selectScalpellus() {
    player.currentChoice = choices[2];
    compairChoices();
    reset();
}