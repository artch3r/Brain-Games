import run from '../index.js';
import { getRandomNumber, tasksCount } from '../utils.js';

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
  const tasks = [];
  for (let i = 0; i < tasksCount; i += 1) {
    tasks.push(generateRound());
  }
  run(description, tasks);
};

export default runPrime;
