#! /usr/bin/env node
import inquirer from "inquirer";

console.log("ANSWER THE MULTIPLE CHOICE QUESTIONS! \n Related to TypeScript");
let score = 0;
let q1Input = await inquirer.prompt([
  {
      name: "question1",
      type: "list",
      message: `Question 1: What is TypeScript? `,
      choices:["A) A superset of JavaScript",
      "B) A programming language developed by Microsoft",
      "C) A framework for building web applications",
      "D) A database management system"]
        
  }

]);
if (q1Input.question1 == "A) A superset of JavaScript") {
  console.log("You are Right!");
  score++;
} else {
  console.log(
    "Sorrry, that's incorrect. The correct answer is 'A) A superset of JavaScript' "
  );
}
console.log(`Your Score: ${score}`);
let q2Input = await inquirer.prompt([
  {
    name: "question2",
    type: "list",
    message: "Question 2: What are the benefits of using TypeScript?",
    choices: [
      "A) Stronger type checking",
      "B) Enhanced IDE support",
      "C) Improved code maintainability",
      "D) All of the above",
    ],
  },
]);

if (q2Input.question2 == "D) All of the above") {
  console.log("You are Right!");
  score++;
} else {
  console.log(
    "Sorrry, that's incorrect. The correct answer is 'D) All of the above"
  );
}
console.log(`Your Score: ${score}`);
let q3Input = await inquirer.prompt([
  {
    name: "question3",
    type: "list",
    message: "Question 3: What is the file extension for TypeScript files?",
    choices: ["A) .js", "B) .ts", "C) .html", "D) .css"],
  },
]);
if (q3Input.question3 == "B) .ts") {
  console.log("You are Right!");
  score++;
} else {
  console.log("Sorrry, that's incorrect. The correct answer is 'B) .ts");
}
console.log(`Your Score: ${score}`);
let q4Input = await inquirer.prompt([
  {
    name: "question4",
    type: "list",
    message: "Question 4: Which programming language is TypeScript based on",
    choices: ["A) JavaScript", " B) Python", " C) Java", " D) C++"],
  },
]);
if (q4Input.question4 == "A) JavaScript") {
  console.log("You are Right!");
  score++;
} else {
  console.log("Sorrry, that's incorrect. The correct answer is 'A) JavaScript");
}
console.log(`Your Score: ${score}`);
let q5Input = await inquirer.prompt([
  {
    name: "question5",
    type: "list",
    message: "Question 5: What does TypeScript add to JavaScript?",
    choices: [
      "A) Extra features and syntax",
      "B) Faster runtime performance",
      "C) Compatibility with older browsers",
      "D) Support for mobile app development",
    ],
  },
]);

if (q5Input.question5 == "A) Extra features and syntax") {
  console.log("You are Right!");
  score++;
} else {
  console.log("Sorrry, that's incorrect. The correct answer is 'A) Extra features and syntax");
}
console.log(`Your Score: ${score}`);
let q6Input = await inquirer.prompt([
  {
    name: "question6",
    type: "list",
    message:
      "Question 6: Which keyword is used to declare a variable in TypeScript?",
    choices: ["A) let", "B) var", "C) const", "D) type"],
  },
]);
if (q6Input.question6 == "A) let") {
  console.log("You are Right!");
  score++;
} else {
  console.log("Sorrry, that's incorrect. The correct answer is 'A) let");
}
console.log(`Your Score: ${score}`);
let q7Input = await inquirer.prompt([
  {
    name: "question7",
    type: "list",
    message:
      "Question 7: Which TypeScript keyword is used to define a variable with a fixed type that cannot be changed?",

    choices: ["A) const", "B) let", "C) var", "D) type"],
  },
]);
if (q7Input.question7 == "A) const") {
  console.log("You are Right!");
  score++;
} else {
  console.log("Sorrry, that's incorrect. The correct answer is 'A) const");
}
console.log(`Your Score: ${score}`);
let q8Input = await inquirer.prompt([
  {
    name: "question8",
    type: "list",
    message:
      "Question 8: Which keyword is used to declare a function in TypeScript?",
    choices: ["A) func", "B) function", "C) def", "D) fn"],
  },
]);
if (q8Input.question8 == "B) function") {
  console.log("You are Right!");
  score++;
} else {
  console.log("Sorrry, that's incorrect. The correct answer is 'B) function");
}
console.log(`Your Score: ${score}`);
let q9Input = await inquirer.prompt([
  {
    name: "question9",
    type: "list",
    message:
      "Question 9: Which TypeScript data type is used to represent a single line character?",
    choices: ["A) char", "B) string", "C) boolean", "D) number"],
  },
]);
if (q9Input.question9 == "B) string") {
  console.log("You are Right!");
  score++;
} else {
  console.log("Sorrry, that's incorrect. The correct answer is 'B) string");
}
console.log(`Your Score: ${score}`);
let q10Input = await inquirer.prompt([
  {
    name: "question10",
    type: "list",
    message:
      "Question 10: What is the output of the following TypeScript code? \n console.log(10 > 5 && 5 < 3);",
    choices: ["A) true", "B) false", "C) Error", "D) undefined"],
  },
]);
if (q10Input.question10 == "B) false") {
  console.log("You are Right!");
  score++;
} else {
  console.log("Sorrry, that's incorrect. The correct answer is 'B) false");
}
console.log(`Your Score: ${score}`);

if (score <= 10 && score >= 6){
  console.log(`Congratulations! Your scored is 10/${score} ${"\n"}You Win the Quiz Game`);
}else if(score <= 5 && score >= 0){
console.log(` Your scored is 10/${score} ${"\n"}It's ok, keep practicing and strengthen your concepts and try next time`);

}