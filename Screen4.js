// Feature 3: Question Display
// - Fetching 10 questions, and using a loop, loop through each question in
// the array, displaing 1 at a time
// */
/*
PSEUDO-CODE
- SELECT THE QUESTION H2 IN THE DOM 
- SET AS TRIVIA_QUESTION 
- CREATE BUTTON IN HTML
- SELECT BUTTON IN THE DOM 
- SET AS GENERATE_QUESTION_BUTTON
- FUNTION GET_QUESTIONS_ARRAY
    - FETCH 10 QUESTIONS FROM API
    - SET ARRAY AS QUESTIONS_ARRAY
    - RETURN QUESTIONS_ARRAY
FUNCTION GET_CURRENT_QUESTION
    - LOOP THROUGH QUESTIONS_ARRAY INCRAMENTALLY BY 1
    - SELECT 1 QUESTION FROM THE ARRAY 
    - IF GENERATE_QUESTION_BUTTON IS CLICKED, 
    - DISPLAY Q1 IN H2  
*/
/*
- SELECT CORRECT ANSWER IN THE DOM
- SELECT INCORRECT ANSWERS IN THE DOM
- FUNCTION DISPLAY_CORRECT_ANSWER
  - PASS IN QUESTIONS_ARRAY
  - USE DOT NOTATION TO FIND CORRECT_ANSWER IN QUESTIONS_ARRAY
  - CREATE A INCREMENT COUNT TO COUNT THROUGH THE ARRAY
  - DISPLAY CORRECT ANSWER IN CORRECT_ANSWER BUTTON
- FUNCTION DISPLAY INCORRECT_ANSWER
  - PASS IN QUESTIONS_ARRAY
  - USE DOT NOTATION TO FIND INCORRECT_ANSWERS_ARRAY IN QUESTIONS_ARRAY
  - 
  */
const questionDisplay = document.querySelector(".question-h2");
const requestUrlTriviaApi = `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`;

const displayCorrectAnswer = document.querySelector("#correct-answer");
const displayIncorrectAnswers = document.querySelectorAll(".incorrect-answer");
const progressBar = document.querySelector(".progress-bar");
const showGameProgress = document.querySelector(".show-game-progress");

let count = 0;
let score = 0;
// let questionsArray = [];
let startAgain = document.querySelector(".start-again");
// fetchQuestion();
let questionCounter = 0;
const maximumQuestions = 10;

let letsGo = document.querySelector(".letsgo-button");

letsGo.addEventListener("click", goToScreen4);

function goToScreen4() {
  screen3.classList.add("hide");
  screen4.classList.remove("hide");
  fetchQuestion();
  getCurrentQuestion(fetchQuestion);
}

function startGame(questionsArray) {
  count = 0;
  score = 0;
  questionCounter = 0;
  questionsArray = [];
}

let allAnswers = document.querySelectorAll(".answer");

function increaseScoreOnClick() {
  for (let i = 0; i < allAnswers.length; i++) {
    allAnswers[i].onclick = () => {
      getCurrentQuestion(questionsArray);
      if (allAnswers[i].id === "correct-answer") {
        console.log("correct");
        score++;
        console.log(`score ` + score);
      }
    };
  }
  return score;
}
increaseScoreOnClick();
function getCurrentQuestion(fetchQuestion) {
  console.log(fetchQuestion);
  if (count >= 10) {
    goToScreen5();
  }
  currentQuestion = fetchQuestion[count].question;
  questionDisplay.textContent = currentQuestion;
  let correctAnswer = fetchQuestion[count].correct_answer;
  displayCorrectAnswer.innerHTML = correctAnswer;
  let incorrectAnswersArray = fetchQuestion[count].incorrect_answers;
  for (let i = 0; i < incorrectAnswersArray.length; i++) {
    displayIncorrectAnswers[i].innerHTML = incorrectAnswersArray[i];
  }
  count++;
  console.log(count);
  questionCounter++;
  showGameProgress.style.width = `${
    (questionCounter / maximumQuestions) * 100
  }%`;
  showGameProgress.innerText = `${questionCounter}/${maximumQuestions}`;
  // IF MAXIMUM QUESTIONS REACHED LINK TO SCREEN 5
  shuffle();
  correctAnswerSpan.innerHTML = score;
}
function shuffle() {
  let parent = document.getElementById("answers");
  let button = document.createDocumentFragment();
  while (parent.children.length) {
    button.appendChild(
      parent.children[Math.floor(Math.random() * parent.children.length)]
    );
  }
  parent.appendChild(button);
}

/*GIF */
// async function getQuestionsArray() {
//   let response = await fetch(
//     `https://opentdb.com/api.php?amount=10&category=${selection}&difficulty=${difficulty.toLowerCase()}&type=multiple`
//   );
//   let data = await response.json();
//   //   questionsArray = data.results;
// }
// const API_KEY = "4Y7M7LY0VDS6";
// let playAgainButton = document.querySelector(".play-again");
// let searchTerm = "";
// let correctAnswerSpan = document.querySelector(".correct-answer-display");
// //A simple function that translates score into a search term for API to use
// function readScore(score) {
//   if (score == 0) {
//     searchTerm = "bad";
//   } else if (score > 1 && score <= 3) {
//     searchTerm = "try_again";
//   } else if (score > 3 && score <= 6) {
//     searchTerm = "not_bad";
//   } else if (score > 6 && score <= 9) {
//     searchTerm = "excited";
//   } else if (score == 10) {
//     searchTerm = "unstopable";
//   }
// }
// readScore(score);

// const requestUrlGifApi = `https://g.tenor.com/v1/search?q=${searchTerm}&key=${API_KEY}&limit=1`;
// async function fetchGif() {
//   let response = await fetch(
//     `https://g.tenor.com/v1/search?q=${searchTerm}&key=${API_KEY}&limit=1`
//   );
//   let data = await response.json();
//   let gifUrl = data.results[0].media[0].mediumgif.url;
//   let img = document.createElement("img");
//   img.setAttribute("src", gifUrl);
//   let gifdiv = document.createElement("div");
//   gifdiv.appendChild(img);
//   playAgainButton.parentNode.insertBefore(gifdiv, playAgainButton);
//   console.log(data.results[0].media[0].mediumgif.url);
// }
// function goToScreen5() {
//   screen4.classList.add("hide");
//   screen5.classList.remove("hide");
//   readScore(score);
//   fetchGif();
// }

// playAgainButton.addEventListener("click", goToScreen1);
// function goToScreen1() {
//   screen5.classList.add("hide");
//   screen3.classList.remove("hide");
// }
