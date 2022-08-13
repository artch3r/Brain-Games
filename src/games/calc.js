import run from '../index.js';
import { getRandomNumber, tasksCount } from '../utils.js';

const getRandomMathOperator = (operators) => operators[getRandomNumber(0, 2)];

const generateRound = () => {
  const mathOperators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
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
  return [question, answer];
};

const runCalc = () => {
  const description = 'What is the result of the expression?';
  const tasks = [];
  for (let i = 0; i < tasksCount; i += 1) {
    tasks.push(generateRound());
  }
  run(description, tasks);
};

export default runCalc;
