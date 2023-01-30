// Preparare gli elementi necessari //
const submitButton = document.querySelector(".submit-button");

let numberArray = [];

document.querySelector(".mess").innerHTML = "Inserisci un numero";

// Chiedere all'utente un numero//
submitButton.addEventListener(
    "click",
    function () {
        const numberValue = parseInt(document.querySelector(".number").value);
        console.log("number-" + numberValue)

        // Partendo da 0
        let sum = 0;
        // Finchè non sarai <= di 50
        while (sum <= 50) {

            // Inserisci i numeri dell'utente nell'array
            numberArray.push(numberValue);
            // somma= somma + numero utente 
            sum += numberValue;
            document.querySelector(".mess").innerHTML = "Inserisci un altro numero" + numberArray;

        }
    }

)