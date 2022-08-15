import run, { roundsCount } from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if number is even, otherwise answer "no"';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(1, 10);
  const result = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  const answer = String(result);
  return [question, answer];
};

const runEven = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  run(description, rounds);
};

export default runEven;
