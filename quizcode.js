//Starting Data

//Set Variables

var timerEl = document.querySelector(".timer");
var startEl = document.querySelector("#start");

var secondsLeft = 90;
var score = 0;

//Array of Quesions for Quiz
var quiz = [
  // question 1
  {
    q1: "Who wrote CATS the Musical?",
    a1: "Stephen Sondheim",
    b1: "Celine Dion",
    c1: "Prince",
    d1: "Andrew Lloyd Weber",

    // question 2

    q2: "CATS is based on a poem by...",
    a2: "Emily Dickinson",
    b2: "Emerson",
    c2: "T.S. Eliott",
    d2: "Tennessee Williams",

    // question 3

    q3: "What is a jellicle cat?",
    a3: "any cute beloved cat",
    b3: "alley cat",
    c3: "forest cat",
    d3: "mountain cat",
  },
];

//Array of Answers

var answers = ["Andrew Lloyd Weber", "T.S. Eliott", "any cute beloved cat"];

//User Interactions

//When we click on Start, timer countdown starts

startEl.addEventListener("click", function () {
  startEl.style.display = "none";
  var myInterval = setInterval(function () {
    timerEl.textContent = secondsLeft;
    secondsLeft--;
    if (secondsLeft === -1) {
      clearInterval(myInterval);
      sendMessage();
    }
  }, 1000);
});

//Question 1 Appears -Function

//Handler Functions===============================================================================

// Check answer - use answer array and .include
//if it is correct
//alert yay!
//then move to the next question

// Else if it is wrong
// alert wrong,
//ten seconds taken away,
// move to the next question

//WHEN all questions are answered or the timer reaches 0
//THEN the game is over

//Display Input===============================================================================

//WHEN the game is over
//Clear screen
//Reset Timer
//Submit Button appears

//THEN I can save my initials and score
//When click submit button
//Return to the beginning of quiz
