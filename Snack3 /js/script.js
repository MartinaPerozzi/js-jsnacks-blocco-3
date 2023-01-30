// Preparare gli elementi necessari //
const submitButton = document.querySelector(".submit-button");

// Chiedere all'utente un numero//
document.querySelector(".mess").innerHTML = "Inserisci un numero";

// Prendere i dati al click del bottone
submitButton.addEventListener(
    "click",
    function () {
        const uservalueN = parseInt(document.querySelector(".number").value);

        // Poi creo N che parte da 1;
        let N = 1;
        // Finchè N sarà minore o uguale nel valore inserito dall'utente
        while (N <= uservalueN) {

            // Creare un array
            const newArray = [];
            console.log(newArray)
            // Che conterrà 10 elementi.
            const arrayElements = 10;
            // Numero di elementi per array permessi:10;
            i = 0;
            // Finchè i sarà minore di 10;
            while (i < arrayElements) {
                // Genero numeri randomici
                let arrayNumbers = Math.floor(Math.random() * 100) + 1;
                // Da pushare nelle array
                newArray.push(arrayNumbers);
                console.log(arrayNumbers)
                // Messaggio per utente
                document.querySelector(".mess").innerHTML = `Ho creato ${uservalueN} Array con ${arrayElements} numeri randomici da 1 a 100! Ecco:`;

                document.querySelector(".mess").innerHTML += ` [${newArray}] `;
                // Incremento
                i++;
            }

            // incremento
            N++;
        }
    }

)

