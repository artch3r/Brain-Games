#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.round(Math.random() * 100);

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if number is even, otherwise answer "no"');
let score = 0;
for (let turn = 1; turn <= 3; turn += 1) {
  const number = getRandomNumber();
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (isEven(number)) {
    if (answer === 'yes') {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.
      Let's try again, ${name}!`);
      break;
    }
  } else if (!isEven(number)) {
    if (answer === 'no') {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.
      Let's try again, ${name}!`);
      break;
    }
  }
}

if (score === 3) {
  console.log(`Congratulations, ${name}!`);
}
