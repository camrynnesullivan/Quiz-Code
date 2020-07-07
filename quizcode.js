//create an array with an actual quiz =====================================================

var quiz = [
  // question 1
  {
    q1: "Who wrote CATS the Musical?",
    a: "Stephen Sondheim",
    b: "Celine Dion",
    c: "Prince",
    d: "Andrew Lloyd Weber",
  },
  // question 2
  {
    q2: "CATS is based on a poem by...",
    a: "Emily Dickinson",
    b: "Emerson",
    c: "T.S. Eliott",
    d: "Tennessee Williams",
  },

  // question 3
  {
    q3: "What is a jellicle cat?",
    a: "any cute beloved cat",
    b: "alley cat",
    c: "forest cat",
    d: "mountain cat",
  },
];

//DOM Elements ===========================================================================

var timerEl = document.querySelector(".timer");
var startEl = document.querySelector("#start");

//Click Start

// var timeEl = document.querySelector(".time");
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }
//   }, 1000);
// }
// ===========================================================================
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

//====================================================================================
// Predetermined Data example- Set everything to zero
// score counter
// timer
// shit ton of variables
// objects (are the mulitple choice answers?)

// Quiz Elements

// Click Start button

// start.addEventListener("click", startQuiz);

//Then 2min timer starts

//First question pops up

//User Input Question one

//if correct move on to next question

//else subtract 10 sec and then move to next question

// if  the timer reaches zero GAME OVER

// else if when all questions are answered GAME OVER

// save the score and intials

// Return to start
