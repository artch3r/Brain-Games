import run, { roundsCount } from '../index.js';
import { getRandomNumber } from '../utils.js';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  const numberHalf = num / 2;
  for (let divider = 2; divider <= numberHalf; divider += 1) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(1, 10);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const runPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  run(description, rounds);
};

export default runPrime;
