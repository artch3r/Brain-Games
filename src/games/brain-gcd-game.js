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
    for (let divider = 1; divider <= biggestNumber; divider += 1) {
      if (number1 % divider === 0 && number2 % divider === 0 && divider > answer) {
        answer = divider;
      }
    }
    questionsAndAnswers[i][0] = question;
    questionsAndAnswers[i][1] = answer;
  }

  gameEngine(questionText, questionsAndAnswers);
};

export default brainGcdGame;
