const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ''
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = ('Who was the first American woman in space? ');
let correctAnswer = 'Sally Ride'
let candidateAnswer = ''
let questions = [
  'Who was the first American woman in space? ', 
  'True or False: 5 kilometer == 5000 meters? ',
  '(5+3)/2*10 = ? ',  
  'Give the array [8, "Orbit", "Trajectory", 45], what entry is at index2? ',
  'What is the minimum crew size for the ISS? '
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
    
    if (candidateAnswers[i] == correctAnswers[i]){
      correctAnswers++;
    }
  }
}
console.log(candidateAnswers)

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
// if (correctAnswer == candidateAnswer) {
//   console.log('Correct!');
// } else (console.log('Wrong answer.'));
  console.log(`First question answered: ${candidateAnswers[0]}, Correct answer is ${correctAnswers[0]}`)

    console.log(`Second Question answered: ${candidateAnswers[1]}, Correct answer is ${correctAnswers[1]}`)

      console.log(`Third question answerd: ${candidateAnswers[2]}, Correct answer is ${correctAnswers[2]}`)

        console.log(`Fourth question answered: ${candidateAnswers[3]}, Correct answer is ${correctAnswers[3]}`)

          console.log(`Fifth Question answered: ${candidateAnswers[4]}, Correct answer is ${correctAnswers[4]}`)
  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log('Good morning, ' + candidateName);
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