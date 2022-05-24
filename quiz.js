class Quiz {
    constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.index = 0;
    }
    getQuestionByIndex() {
      return this.questions[this.index];
    }
    checkForCorrectAnswer(answer) {
      let question = this.getQuestionByIndex();
      if (question.isCorrectAnswer(answer)) {
        this.score++;
      }
      this.index++;
    }
    isEnded() {
      return this.index === this.questions.length;
    }
  }
  

  class Question {
    constructor(questionText, choices, answer) {
      this.text = questionText;
      this.choices = choices;
      this.answer = answer;
    }
    isCorrectAnswer(selectedChoice) {
      return this.answer === selectedChoice;
    }
  }
  

  let questions = [
    new Question(
      "JavaScript is an ______________ language.",
      ["Object-oriented", "Object-based", "Procedural", "Scripting"],
      "Object-oriented"
    ),

    new Question(
      "JavaScript Supports?",
      [ "XHTML", "CSS","Functions", "HTML"],
      "Functions"
    ),

    new Question(
      "Which keyword is used to declare variable in JavaScript ?",
      [ "constant", "char", "int", "let"],
      "let"
    ),

    new Question(
      "Which language is compatible with HTML & CSS?",
      ["Java", "JavaScript", "Python", "C++"],
      "JavaScript"
    ),
     
        new Question(
      "What does JSON stand for ?",
      [
        "JavaScript Object Notation",
        "Java Simple Object Notation",
        "Java Semi Object Notation",
        "Java Shell Object Notation",
      ],
      "JavaScript Object Notation"
    ),
  ];
  

  function loadQuestions() {
    if (quiz.isEnded()) {
      showFinalScores();
      return;
    }
  

    let currentQuestion = quiz.getQuestionByIndex();
    let questionElement = document.getElementById("question"); //<p id="question"></p>
    questionElement.innerHTML = currentQuestion.text;
  

    let displayedChoices = currentQuestion.choices;
    for (let i = 0; i < displayedChoices.length; i++) {
      let eachChoiceElement = document.getElementById("choice" + i); //<span id="choice0"></span
      eachChoiceElement.innerHTML = displayedChoices[i];
  

      let eachChoiceBtn = document.getElementById("btn" + i); //<button id="btn0"></button>
      eachChoiceBtn.onclick = function () {
        quiz.checkForCorrectAnswer(displayedChoices[i]); // Verification, scoring and incrementing the question index
        loadQuestions();
      };
    }
  

    showProgress();
  }
  

  let quiz = new Quiz(questions);
  loadQuestions();
  

  function showFinalScores() {
    let resPercent = (quiz.score / questions.length) * 100;
    let scoresHTML = `
          <h1>Results... </h1>
          <h2 id='score'>Your Score is :- ${quiz.score} </h2>
          <h2> Your overall percentage is :- ${resPercent}% </h2>
          <h1>Quiz Completed!!!</h1>
      `;
    let quizCanvas = document.getElementById("quiz");
    quizCanvas.innerHTML = scoresHTML;
  }
  

  function showProgress() {
    let questionNumber = quiz.index + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${questionNumber} of ${quiz.questions.length}`;
  }
