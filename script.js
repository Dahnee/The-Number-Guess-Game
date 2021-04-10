//declaring and assigning values to variables
var play = document.querySelector(`#play`);
var player = prompt("What's your Name?");
player = player.toUpperCase();
var hist = document.querySelector( `#history`);
var gu = document.querySelector( `#guesses`);

gu.style.visibility = `hidden`;
hist.style.visibility = `hidden`;
//giving a new value to player if the value is empty or null
if( player === "" ) {
  player = `Player`;
}
else if(player === null) {
  player = `Player`;
}


//adding functions for when the mouse enters and leaves the button
play.addEventListener(`mouseenter`, () => play.innerText = `Welcome, ${player} ∩﹏∩` );
play.addEventListener(`mouseleave`, () => play.innerText = "Guess");




//function for when the button is clicked
play.addEventListener( `click`, () => {
       
       
       //gets the maximum number of the guess range
      var maxNum = parseInt(prompt(`Set The Guess Range`));
      
        //repeats prompt as value is not a number
      while( isNaN(maxNum) ) {
        maxNum = parseInt(prompt(`Please input a Number`));
        
      }
        
       
       // assigning variables for guessing between 1 and the maxNum
      var guess = parseInt(prompt(`${player}, I'm thinking of a number between 0 and ${maxNum}, what is it?`));
      var number = Math.floor( Math.random() * maxNum);
       
       
       //checks if the guess is correct or not
      if(guess === number){
        
        
        alert( `The answer was ${guess} you are correct!` );
        console.log(`${number}, I feel defeated`);
        gu.innerHTML += `<p style = "color:lightgreen;"> You guessed ${guess} </p>`;
      }else{
        
        
        alert(`The answer was ${number} you are incorrect`);
        console.log(`${number}, Guess Again Loser!`);
        gu.style.color = `#ff5f53`;
        gu.innerHTML += `<p style = "color: #ff5f53;"> You guessed ${guess} </p>`;
      }
       
       hist.style.visibility = `visible`;
 
});
 let toggle = evt => {
   
  if( evt.style.visibility === `hidden` ) {
    evt.style.visibility = `visible`;
}


else if( evt.style.visibility === `visible` ){
  evt.style.visibility = `hidden`;
}

};


hist.addEventListener( `click`, () => toggle(gu));


