import runGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

const runEven = () => {
  const questionText = 'Answer "yes" if number is even, otherwise answer "no"';

  const questionsAndAnswers = [
    [],
    [],
    [],
  ];

  for (let round = 0; round < 3; round += 1) {
    const question = getRandomNumber(10);
    const answer = isEven(question) ? 'yes' : 'no';
    questionsAndAnswers[round][0] = question;
    questionsAndAnswers[round][1] = answer;
  }

  runGameEngine(questionText, questionsAndAnswers);
};

export default runEven;
