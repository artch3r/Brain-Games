import run, { roundsCount } from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRange = 1;
const maxRange = 10;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const numSqrt = Math.sqrt(num);
  for (let divider = 2; divider <= numSqrt; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(minRange, maxRange);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  run(description, rounds);
};
