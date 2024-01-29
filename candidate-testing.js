const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';

//TODO: Variables for Part 2
let questions = 
[
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question(" Enter a Name: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(`${questions[i] } \nYour Answer: `); 
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      console.log('Correct!\n');
      } else console.log(`Incorrect! Correct Answer: ${correctAnswers[i]} \n`);
  }
} 

function gradeQuiz(candidateAnswers) {

let totalCorrectAnswers = 0;

for (let i = 0 ; i < candidateAnswers.length; i++) {
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
  totalCorrectAnswers++;
  } 
}

let grade = (totalCorrectAnswers / questions.length) * 100;

if (grade >= 80){ 
console.log(`Status: PASSED \nFinal Grade: ${grade}% - ${totalCorrectAnswers} of ${questions.length} responses correct. `)
} else { 
  console.log(`Status: FAILED \nFinal Grade: ${grade}% - ${totalCorrectAnswers} of ${questions.length} responses correct. `)
}
    return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`\nHello, ${candidateName}!`)
    askQuestion();
    gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};