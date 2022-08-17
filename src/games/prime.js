import run from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRange = 1;
const maxRange = 10;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const borderCheck = Math.sqrt(num);
  for (let divider = 2; divider <= borderCheck; divider += 1) {
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
  run(description, generateRound);
};
