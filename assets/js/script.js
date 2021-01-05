// select html elements
const timerEl = document.getElementById("timer")
const question = document.getElementById("question")
const choiceLabel = document.querySelector("h4")
const choice1 = document.getElementById("1")
const choice2 = document.getElementById("2")
const choice3 = document.getElementById("3")
const choice4 = document.getElementById("4")
var choiceContainer = document.getElementsByClassName("choice-container")
var totalScore = document.querySelector("h3")

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
      question: "Which of the following statements means x is NOT equal to 5?", 
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
    {
      question: "Which character is used to indicate an end tag in HTML?", 
      choice1: "*",
      choice2: "^",
      choice3: "/",
      choice4: "]",
      correct: 3
    },
    {
      question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", 
      choice1: "alt",
      choice2: "class",
      choice3: "src",
      choice4: "id",
      correct: 1
    },
    {
      question: "In HTML, which attribute is used to specify that an input field must be filled out?", 
      choice1: "required",
      choice2: "placeholder",
      choice3: "validate",
      choice4: "formvalidate",
      correct: 1
    },
    {
      question: "What does CSS stand for?", 
      choice1: "Colorful Style Sheets",
      choice2: "Creative Style Sheets",
      choice3: "Computer Style Sheets",
      choice4: "Cascading Style Sheets",
      correct: 4
    },
    {
      question: "In CSS, which HTML attribute is used to define inline styles?", 
      choice1: "style",
      choice2: "class",
      choice3: "styles",
      choice4: "font",
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
  if (currentQuestion > questionsArr.length - 1 || time <= 0){
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
      document.getElementById(answer).innerHTML += ("<div class='feedback correct'> Correct! </div>");
      setTimeout(function(){
        document.getElementById(answer).style.border = "solid blue";
        document.getElementById(answer).style.backgroundColor = "white";
        newQuestion();
       }, 1000);
  // show wrong feedback and deduct time for incorrect choice
  }else{
      time = time - 10;
        document.getElementById(answer).style.border = "solid red";
        document.getElementById(answer).style.backgroundColor = "pink";
        document.getElementById(answer).innerHTML += ("<div class='feedback wrong'> Incorrect! </div>");
        setTimeout(function(){
        document.getElementById(answer).style.border = "solid blue";
        document.getElementById(answer).style.backgroundColor = "white";
        newQuestion();
       }, 1000);
  }
  currentQuestion++;
}

// show and save score render
function scoreRender(){
  window.open("scores.html");
    
    // calculate the amount of question percent answered by the user
    
   totalScore.textContent = "Your score is" + score;
 
}




startQuiz();