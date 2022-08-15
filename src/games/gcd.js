import run, { roundsCount } from '../index.js';
import { getRandomNumber } from '../utils.js';

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
  const result = getGcd(number1, number2);
  const question = `${number1} ${number2}`;
  const answer = String(result);
  return [question, answer];
};

const runGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  run(description, rounds);
};

export default runGcd;
