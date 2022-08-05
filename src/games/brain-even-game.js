import runGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const runEven = () => {
  const questionText = 'Answer "yes" if number is even, otherwise answer "no"';

  const questionsAndAnswers = [
    [],
    [],
    [],
  ];

  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber(10);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    questionsAndAnswers[i][0] = question;
    questionsAndAnswers[i][1] = answer;
  }

  runGameEngine(questionText, questionsAndAnswers);
};

export default runEven;
