/*************************

Simple refactoring challenge

**********************/

// A: Refactor the code so it loops over one of the RGB code blocks and prints to the DOM 10 times.

/* B: Refactor the code in the loop by using function expresions 

   1. create a arrow  function expression which creates a random number between 0 and 256;

   2. create a function that creates a string holding a rgb value. Give this function a paremeter which accepts the arrow function expression as a arguement.

*/ 


let html = '';

const randomValue = () => Math.floor(Math.random() * 256);

const randomRGB = (value) =>{
    const color = ` rgb( ${value()}, ${value()}, ${value()}) `;
    return color;
}

for (let i =1; i <= 10; i++){
html += `<div style="background-color: ${randomRGB(randomValue)}">${i}</div>`;
}

document.querySelector('main').innerHTML = html;