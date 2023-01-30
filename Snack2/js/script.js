// Preparare gli elementi necessari //
// const submitButton = document.querySelector(".submit-button");

let numberArray = [];

document.querySelector(".mess").innerHTML = "Inserisci un numero";


// Partendo da 0
let sum = 0;
// Finchè non sarai <= di 50
while (sum <= 50) {

    // Chiedere all'utente un numero//
    const numberValue = parseInt(prompt("Inserisci un numero"));

    // Inserisci i numeri dell'utente nell'array
    numberArray.push(numberValue);
    // somma= somma + numero utente 
    sum += numberValue;
    document.querySelector(".mess").innerHTML = "Inserisci un altro numero: " + numberArray + ".";
}
document.querySelector(".mess").innerHTML += `La somma dei numeri inseriti è ${sum}`;
