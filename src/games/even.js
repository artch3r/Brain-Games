import run from '../index.js';
import { getRandomNumber, tasksCount } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(1, 10);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const runEven = () => {
  const description = 'Answer "yes" if number is even, otherwise answer "no"';
  const tasks = [];
  for (let i = 0; i < tasksCount; i += 1) {
    tasks.push(generateRound());
  }
  run(description, tasks);
};

export default runEven;
