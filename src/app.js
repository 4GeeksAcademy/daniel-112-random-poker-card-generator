

const suits = ["♦", "♥", "♠", "♣"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function randomPosition(someArray) {

    let arrayLength = someArray.length;
    let randomPosition = Math.floor( Math.random() * arrayLength);

    return someArray[randomPosition];
}


function generateNewCard() {

    let randomSuit = randomPosition(suits);
    let randomNumber = randomPosition(numbers);

    let topSuitValue = document.querySelector(".top");
    let numberValue = document.querySelector(".number");
    let bottomSuitValue = document.querySelector(".bottom");

    topSuitValue.innerHTML = randomSuit;
    bottomSuitValue.innerHTML = randomSuit;

    numberValue.innerHTML = randomNumber;


    if (randomSuit === "♥" || randomSuit === "♦") {
        document.querySelector(".top").style.color = "red";
        document.querySelector(".bottom").style.color = "red";
    } else {
        document.querySelector(".top").style.color = "";
        document.querySelector(".bottom").style.color = "";
    }
};


// PARA QUE FUNCIONE AL CARGAR LA PÁGINA
// window.onload = generateNewCard;

// BOTÓN GENERADOR DE CARTAS
document.getElementById("cardGeneratorButton").onclick = generateNewCard;