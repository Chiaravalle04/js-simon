// contenitore celle
const mainContainer = document.getElementById('container')

// contenitore span
let myElements = [];

// contenitore numeri generati
let myNumbers = [];

// creazione celle
for (let i = 0; i < 5; i++) {

    let myCell = document.createElement('div');

    myCell.classList.add('cell');

    mainContainer.append(myCell);

    let myElement = document.createElement('span');

    myElements.push(myElement);

    myCell.append(myElement);

    let myRandomNumber = randomNumber(1, 99);

    console.log(myRandomNumber);

    myElement.append(myRandomNumber);

    myNumbers.push(myRandomNumber);

};

console.log(myNumbers);


let counter = 3;

const myInterval = setInterval(function () {

    if (counter == 0) {

        clearInterval(myInterval);

        for (let i = 0; i < myElements.length; i++) {

            myElements[i].classList.add('none');
        
        };

        setTimeout(function () {

            let solution1 = parseInt(prompt('Inserisci il Primo Numero'));

            let solution2 = parseInt(prompt('Inserisci il Secondo Numero'));

            let solution3 = parseInt(prompt('Inserisci il Terzo Numero'));

            let solution4 = parseInt(prompt('Inserisci il Quarto Numero'));

            let solution5 = parseInt(prompt('Inserisci il Quinto Numero'));

            if (solution1 == myNumbers[0] 
                && 
                solution2 == myNumbers[1] 
                && 
                solution3 == myNumbers[2] 
                && 
                solution4 == myNumbers[3] 
                && 
                solution5 == myNumbers[4]) {

                alert('Hai vinto!');

                console.log('Numeri da individuare:', myNumbers, 
                'Tuoi Numeri:', 
                solution1, 
                solution2, 
                solution3, 
                solution4, 
                solution5);

            } else {

                alert('Hai perso!');

                console.log('Numeri da individuare:', myNumbers, 
                'Tuoi Numeri:', 
                solution1, 
                solution2, 
                solution3, 
                solution4, 
                solution5)

            }

        }, 1);
    
    }

    else {
    
        console.log('Countdown:', counter);
    
        counter--;
    
    }
    

}, 1000);

//funzione random number
function randomNumber (min ,max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;

};