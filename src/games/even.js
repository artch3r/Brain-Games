import run, { roundsCount } from '../index.js';
import { getRandomNumber } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 10);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const runEven = () => {
  const description = 'Answer "yes" if number is even, otherwise answer "no"';
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  run(description, rounds);
};

export default runEven;
