import run from '../index.js';
import { getRandomNumber, tasksCount } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const runEven = () => {
  const description = 'Answer "yes" if number is even, otherwise answer "no"';

  const tasks = [
    [],
    [],
    [],
  ];

  for (let round = 0; round < tasksCount; round += 1) {
    const question = getRandomNumber(10);
    const answer = isEven(question) ? 'yes' : 'no';
    tasks[round][0] = question;
    tasks[round][1] = answer;
  }

  run(description, tasks);
};

export default runEven;
