import run from '../index.js';
import getRandomNumber from '../utils.js';

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

const runGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';

  const tasks = [
    [],
    [],
    [],
  ];

  for (let round = 0; round < 3; round += 1) {
    const number1 = getRandomNumber(10);
    const number2 = getRandomNumber(10);
    const question = `${number1} ${number2}`;
    const answer = getGcd(number1, number2);
    tasks[round][0] = question;
    tasks[round][1] = answer;
  }

  run(description, tasks);
};

export default runGcd;
