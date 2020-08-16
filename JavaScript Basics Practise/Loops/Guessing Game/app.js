/***********************************************************************************

Guessing Game Practise!!

****/

// Create a Number guessing game where the user input us compared to a generated number between 1 and 10

// The user has 5 attempts to guess the number

// If the user guesses correctly then a message will appear in the window stating how many attemps it took to guess the right number and what the number is.

// If the user runs out of attempts, then the a message will appear stating the user has run out of attempts. The number they where trying to guess should appear in the message.

const main = document.querySelector('main');
const randomNumber = randomNumberGeneretor(10);
let message;
// random Number function

function randomNumberGeneretor (upper)  {

    const number = Math.floor(Math.random() * upper) + 1; 
    console.log(number);
    return number;
}

// checking if the user has compared the numbers correctly

for(let i =1; i <= 5; i++){
    const userInput = prompt('Please guess a number between 1 and 10');

    if(parseInt((userInput)) === randomNumber ){
        message = ` <h1> Well done!</h1>
                    <p>you guessed the correct number which was <b>${randomNumber}</b></p>
                    <p>It took you <b>${i}</b> attempts to guess the number.</p>
                    `;
                    break;
    } else{
        message = ` <h1>Oh no!</h1>
                    <p> You ran out of guesses!</p>
                    <p> The correct number was ${randomNumber}</p>
        `;
    }

}

main.innerHTML = message;

