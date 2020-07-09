//Starting Data

//Set Variables

var timerEl = document.querySelector(".timer");
var startEl = document.querySelector("#start");
var quizEl = document.querySelector("#quiz");

var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");

function checkAnswerA() {
  var questionData = quiz[questionNumber]["a" + questionNumber];
  var correctAnswer = answers[questionNumber];
  console.log("we are here!", questionData, correctAnswer);
  if (questionData === correctAnswer) {
    score++;
    questionNumber++;
    displayCorrectMessage();
  } else {
    questionNumber++;
    secondsLeft -= 10;
    displayWrongMessage();
  }
  // displayQuestion();
}

function checkAnswerB() {
  var questionData = quiz[questionNumber]["b" + questionNumber];
  var correctAnswer = answers[questionNumber];
  console.log("we are here!", questionData, correctAnswer);
  if (questionData === correctAnswer) {
    score++;
    questionNumber++;
    displayCorrectMessage();
  } else {
    questionNumber++;
    secondsLeft -= 10;
    displayWrongMessage();
  }
  // displayQuestion();
}
function checkAnswerC() {
  var questionData = quiz[questionNumber]["c" + questionNumber];
  var correctAnswer = answers[questionNumber];
  console.log("we are here!", questionData, correctAnswer);
  if (questionData === correctAnswer) {
    score++;
    questionNumber++;
    displayCorrectMessage();
  } else {
    questionNumber++;
    secondsLeft -= 10;
    displayWrongMessage();
  }
  // displayQuestion();
}
function checkAnswerD() {
  var questionData = quiz[questionNumber]["d" + questionNumber];
  var correctAnswer = answers[questionNumber];
  console.log("we are here!", questionData, correctAnswer);
  if (questionData === correctAnswer) {
    score++;
    questionNumber++;
    displayCorrectMessage();
  } else {
    questionNumber++;
    secondsLeft -= 10;
    displayWrongMessage();
  }
  // displayQuestion();
}

optionA.addEventListener("click", checkAnswerA);
optionB.addEventListener("click", checkAnswerB);
optionC.addEventListener("click", checkAnswerC);
optionD.addEventListener("click", checkAnswerD);

//Array

var options = [optionA, optionB, optionC, optionD];

var question = document.querySelector("#question");

var secondsLeft = 60;
var score = 0;

var answers = ["Andrew Lloyd Weber", "T.S. Eliott", "any cute beloved cat"];

//Array of Quesions for Quiz
var quiz = [
  // question 1
  {
    q0: "Who wrote CATS the Musical?",
    a0: "Stephen Sondheim",
    b0: "Celine Dion",
    c0: "Prince",
    d0: "Andrew Lloyd Weber",
  },

  // question 2
  {
    q1: "CATS is based on a poem by...",
    a1: "Emily Dickinson",
    b1: "Emerson",
    c1: "T.S. Eliott",
    d1: "Tennessee Williams",
  },

  // question 3
  {
    q2: "What is a jellicle cat?",
    a2: "any cute beloved cat",
    b2: "alley cat",
    c2: "forest cat",
    d2: "mountain cat",
  },
];

var questionNumber = 0;

//User Interactions

//When we click on Start, timer countdown starts

startEl.addEventListener("click", function () {
  startEl.style.display = "none";
  var myInterval = setInterval(function () {
    timerEl.textContent = secondsLeft;
    displayQuestion();
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(myInterval);
    }
  }, 1000);
});

// After timer starts, first question is displayed - create a display question functions

function displayQuestion() {
  question.textContent = quiz[questionNumber]["q" + questionNumber];
  optionA.value = "";
  optionA.innerHTML = quiz[questionNumber]["a" + questionNumber];
  optionB.value = "";
  optionB.innerHTML = quiz[questionNumber]["b" + questionNumber];
  optionC.value = "";
  optionC.innerHTML = quiz[questionNumber]["c" + questionNumber];
  optionD.value = "";
  optionD.innerHTML = quiz[questionNumber]["d" + questionNumber];
}

function clearScreen() {
  console.log("hello");
  if (questionNumber === -1) {
    quizEl.textContent.display = "none";
  }
}

clearScreen();
// function nextQuestion() {
//   questionNumber++;
//   displayQuestion();
// }

// for (var i = 0; i < quiz.length; i++) {
//   question.textContent = quiz[i]["q" + `${i}`];
//   optionA.value = "";
//   optionA.innerHTML = quiz[i]["a" + `${i}`];
//   optionB.value = "";
//   optionB.innerHTML = quiz[i]["b" + `${i}`];
//   optionC.value = "";
//   optionC.innerHTML = quiz[i]["c" + `${i}`];
//   optionD.value = "";
//   optionD.innerHTML = quiz[i]["d" + `${i}`];
// }

//call on some DOMS

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
