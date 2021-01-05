// select html elements
const timerEl = document.getElementById("timer")
const question = document.getElementById("question")
const choice1 = document.getElementById("1")
const choice2 = document.getElementById("2")
const choice3 = document.getElementById("3")
const choice4 = document.getElementById("4")
var feedbackEl = document.getElementById("feedback");

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
  question.innerText = q.question;
  choice1.innerText = q.choice1;
  choice2.innerText = q.choice2;
  choice3.innerText = q.choice3;
  choice4.innerText = q.choice4;
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
      feedbackEl.className = ("show-correct");
      feedbackEl.textContent = ("Correct!"); 
      setTimeout(function(){
        feedbackEl.className = feedbackEl.className.replace("show-correct", "");
        newQuestion();
       }, 2000);
  //   // show wrong feedback and deduct time for incorrect choice
  }else{
      time = time - 10;
      feedbackEl.className = ("show-wrong"); 
      feedbackEl.textContent = ("Wrong!"); 
      setTimeout(function(){
        feedbackEl.className = feedbackEl.className.replace("show-wrong", "");
        newQuestion();
       }, 2000);
  }
  currentQuestion++;
}

startQuiz();