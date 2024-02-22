const playerText = document.querySelector("#playerText")
const computerText = document.querySelector("#computerText")
const resultText = document.querySelector("#resultText")
const choiceBtns = document.querySelector(".choiceBtns")

let player;
let computer;
let result;

// !!!!!

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch (randNum) {
        case 1:
            computer = "Rock";
            break;
        case 1:
            computer = "Paper";
            break;
        case 1:
            computer = "Scissors";
            break;
    }
}

