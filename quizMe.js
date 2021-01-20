// importing readline package
const readlineSync = require("readline-sync");
let score = 0;

let userName = readlineSync.question("May I know your Name? ");
console.log(
  `Hi ${userName}, Welcome to 'How well do you know Prajval'. Let's get started. Your initial score is set to zero.`
);
console.log("---------------------------------------------");

// funciton for q&a
function quiz(question, answer) {
  console.log(question);
  let userReply = readlineSync.question("Your Answer? ");

  if (userReply.toLowerCase() === answer) {
    score++;
    console.log(`Correct! Your score is increased to ${score}`);
    console.log("---------------------------------------------");
  } else {
    console.log(`Wrong! The correct answer is: ${answer.toUpperCase()}`);
    console.log("---------------------------------------------");
  }
}

let q1 = {
  question: "What is my Name?",
  answer: "prajval",
};

let q2 = {
  question: "Which city I am located?",
  answer: "bengaluru",
};

let q3 = {
  question: "How many dogs do I have?",
  answer: "2",
};

let q4 = {
  question: "Which breed are my dogs?",
  answer: "german shepherd",
};

let q5 = {
  question: "What is my dream career?",
  answer: "full stack web developer",
};

let qArr = [q1, q2, q3, q4, q5];

for (let i = 0; i < qArr.length; i++) {
  console.log(`QUESTION [${i + 1}.]`);
  quiz(qArr[i].question, qArr[i].answer);
}

console.log("-----------------THE END---------------");
console.log(`Congrats, your total score is: ${score}`);
