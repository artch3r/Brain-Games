import run from '../index.js';
import { getRandomNumber, tasksCount } from '../utils.js';

const getRandomMathOperator = (operators) => operators[getRandomNumber(0, 2)];

const calculate = (number1, number2, mathOperator) => {
  let answer;
  switch (mathOperator) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
      break;
  }
  return answer;
};

const generateRound = () => {
  const mathOperators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const mathOperator = getRandomMathOperator(mathOperators);
  const question = `${number1} ${mathOperator} ${number2}`;
  const answer = calculate(number1, number2, mathOperator);
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
