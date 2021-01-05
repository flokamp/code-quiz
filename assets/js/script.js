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
      choice1: "Strings",
      choice2: "Booleans",
      choice3: "Alerts",
      choice4: "Numbers",
      correct: 3
    },
    {
      question: "A loop that never ends is referred to as:", 
      choice1: "While loop",
      choice2: "Infinite loop",
      choice3: "Recursive loop",
      choice4: "For loop",
      correct: 4
    },
    {
      question: "The process of finding errors and fixing them within a program is called:", 
      choice1: "Compiling",
      choice2: "Executing",
      choice3: "Debugging",
      choice4: "Scanning",
      correct: 3
    },
    {
      question: "Which of the following if statements means x is NOT equal to 5?", 
      choice1: "if x<>5",
      choice2: "if (x !=5)",
      choice3: "if x><5",
      choice4: "if !=5",
      correct: 2
    },
    {
      question: "How do you add comments in Javascript?", 
      choice1: "//this is a comment",
      choice2: "(this is a comment)",
      choice3: "!-- this is a comment --!",
      choice4: "/*this is a comment*/",
      correct: 1
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
  question.innerText = q.question;
  choice1.innerHTML = ("<p> <b>A.</b> " + q.choice1 + "</p>");
  choice2.innerHTML = ("<p> <b>B.</b> " + q.choice2 + "</p>");
  choice3.innerHTML = ("<p> <b>C.</b> " + q.choice3 + "</p>");
  choice4.innerHTML = ("<p> <b>D.</b> " + q.choice4 + "</p>");
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
      document.getElementById(answer).style.backgroundColor = "lightgreen";
      document.getElementById(answer).innerHTML = ("<p> Correct! </p>");
      setTimeout(function(){
        document.getElementById(answer).style.border = "solid blue";
        document.getElementById(answer).style.backgroundColor = "white";
        newQuestion();
       }, 1000);
  // show wrong feedback and deduct time for incorrect choice
  }else{
      time = time - 10;
      setTimeout(function(){
        document.getElementById(answer).style.border = "solid red";
        document.getElementById(answer).style.backgroundColor = "pink";
        document.getElementById(answer).innerHTML = ("<p> Incorrect! </p>");
        setTimeout(function(){
        document.getElementById(answer).style.border = "solid blue";
        document.getElementById(answer).style.backgroundColor = "white";
        newQuestion();
       }, 1000);
       }, 1000);
      
  }
  currentQuestion++;
}

startQuiz();