import run, { roundsCount } from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minRange = 1;
const maxRange = 10;

const getRandomMathOperator = () => operators[getRandomIndex(operators)];

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error('Unknown operator. Check conditions');
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const mathOperator = getRandomMathOperator();
  const result = calculate(number1, number2, mathOperator);
  const question = `${number1} ${mathOperator} ${number2}`;
  const answer = String(result);
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  run(description, rounds);
};
