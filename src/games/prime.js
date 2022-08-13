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

const runPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const tasks = [
    [],
    [],
    [],
  ];

  for (let round = 0; round < tasksCount; round += 1) {
    const question = getRandomNumber(1, 10);
    const answer = isPrime(question) ? 'yes' : 'no';
    tasks[round][0] = question;
    tasks[round][1] = answer;
  }

  run(description, tasks);
};

export default runPrime;
