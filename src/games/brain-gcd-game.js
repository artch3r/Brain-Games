import { getRandomNumber, gameEngine } from '../index.js';

const brainGcdGame = () => {
  const questionText = 'Find the greatest common divisor of given numbers.';

  const questionsAndAnswers = [
    [],
    [],
    [],
  ];

  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber(10);
    const number2 = getRandomNumber(10);
    const question = `${number1} ${number2}`;
    const biggestNumber = number1 >= number2 ? number1 : number2;
    let answer = 1;
    for (let i = 1; i <= biggestNumber; i += 1) {
      if (number1 % i === 0 && number2 % i === 0 && i > answer) {
        answer = i;
      }
    }
    questionsAndAnswers[i][0] = question;
    questionsAndAnswers[i][1] = answer;
  }

  gameEngine(questionText, questionsAndAnswers);
};

export default brainGcdGame;
