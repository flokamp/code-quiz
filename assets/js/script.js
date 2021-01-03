const question = document.getElementById("question")

// create array of question choices
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

// quiz variables
let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
const correctAnswer = 5;
const maxQuestions = 10;

// question array with question, choices and answer
var questionsArr = [
    {
      question: "Commonly used data types DO NOT include:", 
      choice1: "strings",
      choice2: "booleans",
      choice3: "alerts",
      choice4: "numbers",
      answer: 3
    },
    {
      question: "A loop that never ends is referred to as:", 
      choice1: "while loop",
      choice2: "infinite loop",
      choice3: "recursive loop",
      choice4: "for loop",
      answer: 4
    },
    {
      question: "The process of finding errors and fixing them within a program is called:", 
      choice1: "compiling",
      choice2: "executing",
      choice3: "debugging",
      choice4: "scanning",
      answer: 3
    },
  ]; 

// function to start quiz
var startQuiz = function() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questionsArr]
  console.log(availableQuestions)
  getNewQuestion();
}

// function to get random question from array
var getNewQuestion= function() {
  // display random question each time
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  // display answer choices with corresponding question
  choices.forEach(function(choice) {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  // prevent answered questions from being displayed again
  availableQuestions.splice(questionIndex, 1);

  acceptingAnswer = true;
};

// event listener for clicking on an answer choice
choices.forEach(function(choice) {
  choice.addEventListener("click", function(e) {

    if (!acceptingAnswer) return;
    acceptingAnswer = false;
    const selectedAnswer = selectedChoice.dataset["number"];

    getNewQuestion();
  });
});


startQuiz();