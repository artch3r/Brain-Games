import { getRandomNumber, gameEngine } from '../index.js';

const brainEvenGame = () => {
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

  gameEngine(questionText, questionsAndAnswers);
};

export default brainEvenGame;
