import run from '../index.js';
import getRandomNumber from '../utils.js';

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
  const questionText = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const questionsAndAnswers = [
    [],
    [],
    [],
  ];

  for (let round = 0; round < 3; round += 1) {
    const question = getRandomNumber(10);
    const answer = isPrime(question) ? 'yes' : 'no';
    questionsAndAnswers[round][0] = question;
    questionsAndAnswers[round][1] = answer;
  }

  run(questionText, questionsAndAnswers);
};

export default runPrime;
