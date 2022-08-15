import run, { roundsCount } from '../index.js';
import { getRandomNumber } from '../utils.js';

const getRandomMathOperator = (operators) => operators[getRandomNumber(0, 2)];

const calculate = (number1, number2, mathOperator) => {
  switch (mathOperator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Unknown operator. Check conditions');
  }
};

const generateRound = () => {
  const mathOperators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const mathOperator = getRandomMathOperator(mathOperators);
  const result = calculate(number1, number2, mathOperator);
  const question = `${number1} ${mathOperator} ${number2}`;
  const answer = String(result);
  return [question, answer];
};

const runCalc = () => {
  const description = 'What is the result of the expression?';
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  run(description, rounds);
};

export default runCalc;
