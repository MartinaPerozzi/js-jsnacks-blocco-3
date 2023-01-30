// Preparare gli elementi necessari //
const submitButton = document.querySelector(".submit-button");

/* Chiedere all'utente un numero massimo e un numero minimo*/
submitButton.addEventListener(
    "click",
    function () {
        const minValue = document.querySelector(".min-number").value;
        console.log("min" + minValue)
        const maxValue = document.querySelector(".max-number").value;
        console.log("max" + maxValue)

        // Controlla che i valori inseriti siano accettati 

        if ((maxValue <= minValue) || (maxValue <= 0 || minValue <= 0)) {
            document.querySelector(".mess").innerHTML = "Inserisci i dati correttamente."

            // Se i dati sono giusti. 

        } else {

            // Problema con la generazione del numero randomico

            const betweenNumber = Math.floor(Math.random() * (maxValue - minValue) + minValue);

            document.querySelector(".mess").innerHTML = `Numero generato tra ${minValue}  e  ${maxValue} = ${betweenNumber}`;
            console.log(betweenNumber)

        }
    }

)