import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if number is even, otherwise answer "no"';
const minRange = 1;
const maxRange = 10;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(minRange, maxRange);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  run(description, generateRound);
};
