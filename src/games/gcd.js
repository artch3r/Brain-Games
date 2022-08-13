import run from '../index.js';
import { getRandomNumber, tasksCount } from '../utils.js';

const getGcd = (number1, number2) => {
  const biggestNumber = number1 >= number2 ? number1 : number2;
  let answer = 1;
  for (let divider = 1; divider <= biggestNumber; divider += 1) {
    if (number1 % divider === 0 && number2 % divider === 0 && divider > answer) {
      answer = divider;
    }
  }
  return answer;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2);
  return [question, answer];
};

const runGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const tasks = [];
  for (let i = 0; i < tasksCount; i += 1) {
    tasks.push(generateRound());
  }
  run(description, tasks);
};

export default runGcd;
