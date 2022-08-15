import run, { roundsCount } from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  const biggestNumber = x >= y ? x : y;
  let answer = 1;
  for (let divider = 1; divider <= biggestNumber; divider += 1) {
    if (x % divider === 0 && y % divider === 0 && divider > answer) {
      answer = divider;
    }
  }
  return answer;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const result = getGcd(number1, number2);
  const question = `${number1} ${number2}`;
  const answer = String(result);
  return [question, answer];
};

const runGcd = () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  run(description, rounds);
};

export default runGcd;
