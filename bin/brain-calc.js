#!/usr/bin/env node

import { getRandomNumber, gameEngine } from '../src/index.js';

const questionText = 'What is the result of the expression?';

const questionsAndAnswers = [
  [],
  [],
  [],
];

const mathOperators = ['+', '-', '*'];
const getRandomMathOperator = (operators) => operators[getRandomNumber(2)];

for (let i = 0; i < 3; i += 1) {
  const number1 = getRandomNumber(10);
  const number2 = getRandomNumber(10);
  const mathOperator = getRandomMathOperator(mathOperators);
  let question;
  let answer;
  switch (mathOperator) {
    case '+':
      question = `${number1} + ${number2}`;
      answer = number1 + number2;
      break;
    case '-':
      question = `${number1} - ${number2}`;
      answer = number1 - number2;
      break;
    case '*':
      question = `${number1} * ${number2}`;
      answer = number1 * number2;
      break;
    default:
      break;
  }
  questionsAndAnswers[i][0] = question;
  questionsAndAnswers[i][1] = answer;
}

gameEngine(questionText, questionsAndAnswers);
