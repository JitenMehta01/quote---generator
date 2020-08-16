/******************************************

A Karl Pilkington Quote Generator
******************************************/

/*** 
 * An array of objects that contains properties relating to a quote by Karl Pilkington
***/

const quotes = [
  {
    quote: `I read something about they get rid of him next week cuz of his attitude. And the first time I read it I thought he actually ate someone's hat.`, 
    source: `Karl Pilkington`, 
    citation: `XFM Radio Show`, 
    year: `16 November 2002`, 
    topic: `Puns`
  }, 
  {
    quote: `Neil Armstrong, that spaceman, he went to the moon but he ain't been back. It can't have been that good.`, 
    source: `Karl Pilkington`, 
    citation: `3 minute wonder, episode 2`, 
    year: `15 August 2006`, 
    topic: `On Travel`
  }, 
  {
    quote: `They keep saying that sea levels are rising an' all this. It's nowt to do with the icebergs melting, it's because there's too many fish in it. Get rid of some of the fish and the water will drop. Simple. Basic science.`, 
    source: `Karl Pilkington`, 
    citation: `3 minute wonder, episode 2`, 
    year: `17 August 2006`, 
    topic: `On Nature`
  }, 
  {
    quote: `Jellyfish are 97% water or something, so how much are they doing? Just give them another 3% and make them water. More useful`, 
    source: `Karl Pilkington`, 
    citation: `The Ricky Gervais Show`, 
    year: `2005`, 
    topic: `On Nature`
  }, 
  {
    quote: `it annoys me a bit how people like squirrels but not rats. at the end of the day they're the same thing, except that squirrels have had a better upbringing.`, 
    source: `Karl Pilkington`, 
    citation: `Happyslapped by a Jellyfish: The Words of Karl Pilkington`, 
    year: `2006`, 
    topic: `Animals`
  }
];





/***
 * `getRandomQuote` function
 * 
 * This function creates a random number between 0 and the number of objects in the quotes array
 * It then return a random quote object
***/

  function randomquote () {
  const number = Math.floor(Math.random() * quotes.length );
  return quotes[number];
}






/***
 * `printQuote` function
 * 
 * This function does the following:
 * 
 * 1. creates a random rba value for the body's background-color value.This is done by via the rgbvalue function. 
 * 2. The next bit of code adds a random quote object as a string to the DOM. The function check if the quote object has either a citation or year property.
 * 3. Finally the random quote object gets printed to the DOM via the innerHTML property.
***/
 function printQuote () {

    // changes background color on click
    function rgbvalue () {  
      const value = Math.floor(Math.random() * 256); // random number between 1 and 256
      return value;
    }
    document.querySelector('body').style.backgroundColor = `
    rgb(${rgbvalue()}, ${rgbvalue()}, ${rgbvalue()}) `; // gives the body a random rgb value. For example rgb(256, 256, 256);

    // END changes background color on click

   const quoteObject = randomquote();
   let html = ` <p class = 'quote'>${quoteObject.quote}</p>
                  <p class = 'source'>${quoteObject.source} `// starts to build the string for the quote
    if (quoteObject.citation){
      html+= `   <span class="citation">${quoteObject.citation}</span>`; // gets added to the string if it exists
    }
    if (quoteObject.year){
      html+= `   <span class="year">${quoteObject.year}</span>`; // gets added to the string if it exists
    }
    html+= `  <span class="year">${quoteObject.topic}</span> </p> `        // completing the end of the 2nd para tag and adds topic of quote
            

    document.getElementById('quote-box').innerHTML = html; // adds string to the DOM

 }


 /********
  * 
  *   Countdown for the next phrase. In this function the quote object will refresh every 15 seconds.
  *   
  *   This function will do the following:
  *   
  *   1. It will refrence the h3 and span tags containg the string for the countdown
  *   2. There will also be a variable containing the total time the quote will appear for
  *   3. The function will decrement this value and add it to the DOM, therefore creating a countdown.
  *   4. Also if the button is click, the timeLeft timer will be rest to 15
  *   5. This function was inspired from the following youtube tutorial:
  *   https://www.youtube.com/watch?v=vSV_Ml2_A88
  * 

  **/


 const countdown = () => {
  const timelefttoDisplay = document.getElementById('time-left');
  let timeLeft = 15;

  setInterval(function(){
    if (timeLeft <= 0) {
      clearInterval(timeLeft =15);
      printQuote();// adds a new quote once the timer reaches 0
    } // This clears the interval and resets it to 15 once its down to 0

    document.getElementById('load-quote').addEventListener("click",() =>{
      clearInterval(timeLeft =15);
    }), false; // This resets the timer if the button is clicked

    timelefttoDisplay.innerHTML = timeLeft // adds timer to the DOM
    timeLeft -= 1; // decreaments the timer by 1

  }, 1000)

 }

 // the countdown will begin once the page has loaded
 window.onload = countdown();

 // Calls the printquote function everytime the page is refreshed
document.querySelector('body').onload = printQuote();

//click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);

