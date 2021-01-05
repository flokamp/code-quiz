// select html elements
const timerEl = document.getElementById("timer")
const question = document.getElementById("question")
const choiceLabel = document.querySelector("h4")
const choice1 = document.getElementById("1")
const choice2 = document.getElementById("2")
const choice3 = document.getElementById("3")
const choice4 = document.getElementById("4")
var choiceContainer = document.getElementsByClassName("choice-container")

// question array with question, choices and answer
var questionsArr = [
    {
      question: "Commonly used data types DO NOT include:", 
      choice1: "strings",
      choice2: "booleans",
      choice3: "alerts",
      choice4: "numbers",
      correct: 3
    },
    {
      question: "A loop that never ends is referred to as:", 
      choice1: "while loop",
      choice2: "infinite loop",
      choice3: "recursive loop",
      choice4: "for loop",
      correct: 4
    },
    {
      question: "The process of finding errors and fixing them within a program is called:", 
      choice1: "compiling",
      choice2: "executing",
      choice3: "debugging",
      choice4: "scanning",
      correct: 3
    },
]; 

// declare quiz vairables
let currentQuestion = 0;
let score = 0;
let time = 120;

// render a different question
function newQuestion(){
  // end game if all questions answered
  if (currentQuestion > questionsArr.length - 1){
    scoreRender();
  } else {
  // display current question and choices
  var q = questionsArr[currentQuestion];
  question.innerText += q.question;
  choice1.innerHTML += ("<p>" + q.choice1 + "</p>");
  choice2.innerHTML += ("<p>" + q.choice2 + "</p>");
  choice3.innerHTML += ("<p>" + q.choice3 + "</p>");
  choice4.innerHTML += ("<p>" + q.choice4 + "</p>");
  }
}

// start quiz timer and show first question
function startQuiz(){
  newQuestion();
  setInterval(function() {
    timerEl.innerHTML= "Time left: " + time;
      time--;
  }, 1000); 
}

// check if selected answer is correct
function checkAnswer(answer){
  // show correct feedback and add points for correct choice
  if(answer == questionsArr[currentQuestion].correct){
      score++;
      document.getElementById(answer).style.border = "solid green";
      setTimeout(function(){
        document.getElementById(answer).style.backgroundColor = "white";
        newQuestion();
       }, 1000);
       newQuestion();
  //   // show wrong feedback and deduct time for incorrect choice
  }else{
      time = time - 10;
      setTimeout(function(){
        newQuestion();
       }, 1000);
      
  }
  currentQuestion++;
}

startQuiz();