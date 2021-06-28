const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ''
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = ('1) Who was the first American woman in space? ');
let correctAnswer = 'Sally Ride'
let candidateAnswer = ''
let questions = [
  '1) Who was the first American woman in space? \n', 
  '2) True or False: 5 kilometer == 5000 meters? \n',
  '3) (5+3)/2*10 = ? \n',  
  '4) Give the array [8, "Orbit", "Trajectory", 45], what entry is at index2? \n',
  '5) What is the minimum crew size for the ISS? \n'
];
let correctAnswers = ['Sally Ride', 'True', '40', 'Trajectory', '3'];
let candidateAnswers = []


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
   candidateName = input.question('What is your name? ');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // candidateAnswer = input.question('Who was the first American Woman in space? ');}

  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]) 
    if (candidateAnswers[i].toUpperCase() == correctAnswers[i].toUpperCase()){
    }
  }
}
//console.log(candidateAnswers)

function gradeQuiz(candidateAnswers) {
correctAnswers = ['Sally Ride', 'True', '40', 'Trajectory', '3'];
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly 
 let grade = 0
let graded ;
    for (let i = 0; i < questions.length; i++ ) {
      if (candidateAnswers[i].toUpperCase() == correctAnswers[i].toLocaleUpperCase()) {
    grade += 1
      } 
       graded = grade / questions.length * 100;
//console.log(graded)
    }
    if (graded >= 80) 
    console.log('>>> Grade: 80% Passed! <<<')
    else (console.log('>>> Test Failed <<<'))

  return grade;
}
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log('Candidate Name: ' + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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