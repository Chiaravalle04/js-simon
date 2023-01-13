// play game
const myButton = document.getElementById('play-game');

// overlay
const myOverlay = document.getElementById('overlay');

// end game container
const endGame = document.getElementById('end-game');

// numeri inseriti 
const yourNumber = document.getElementById('your-num');

// numeri generati
const generateNumber = document.getElementById('random-num');

// array span
let myElements = [];

// contenitore numeri generati
let myNumbers = [];

// verifica bottone
let verifyButton = 0;

myButton.addEventListener('click',

    () => {

        verifyButton++;

        if (verifyButton == 1) {

            // contenitore celle
            const mainContainer = document.getElementById('container');

            // testo intro
            const intro = document.getElementById('intro');

            intro.classList.add('none');

            // creazione celle
            for (let i = 0; i < 5; i++) {

                let myCell = document.createElement('div');

                myCell.classList.add('cell');

                mainContainer.append(myCell);

                let myElement = document.createElement('span');

                myElements.push(myElement);

                myCell.append(myElement);

                let myRandomNumber = randomNumber(1, 99);

                myElement.append(myRandomNumber);

                myNumbers.push(myRandomNumber);

            };

            // Contatore
            let counter = 30;

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

                            myOverlay.classList.remove('none');

                            myOverlay.classList.add('block');

                            endGame.classList.remove('none');

                            endGame.classList.add('flex');

                            const lose = document.getElementById('lose');

                            lose.classList.add('none');

                            yourNumber.innerHTML = solution1 + " " + solution2 + " " + solution3 + " " + solution4 + " " + solution5;

                            generateNumber.innerHTML = myNumbers[0] + " " + myNumbers[1] + " " + myNumbers[2] + " " + myNumbers[3] + " " + myNumbers[4];

                        } else {

                            myOverlay.classList.remove('none');

                            myOverlay.classList.add('block');

                            endGame.classList.remove('none');

                            endGame.classList.add('flex');

                            const win = document.getElementById('win');

                            win.classList.add('none');

                            yourNumber.innerHTML = solution1 + " " + solution2 + " " + solution3 + " " + solution4 + " " + solution5;

                            generateNumber.innerHTML = myNumbers[0] + " " + myNumbers[1] + " " + myNumbers[2] + " " + myNumbers[3] + " " + myNumbers[4];

                        }

                    }, 1);
                
                }

                else {

                    counter--;

                    // timer
                    const myTimer = document.getElementById('my-timer');

                    myTimer.innerHTML = counter;
                
                }
                

            }, 1000);

        }

    }

);

//gioca ancora
const playAgain = document.getElementById('play-again');

playAgain.addEventListener('click',

    () => {

        location.reload();

    }

)

//funzione random number
function randomNumber (min ,max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;

};