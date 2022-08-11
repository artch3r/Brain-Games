import runGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomMathOperator = (operators) => operators[getRandomNumber(2)];

const generateRound = () => {
  const mathOperators = ['+', '-', '*'];
  const number1 = getRandomNumber(10);
  const number2 = getRandomNumber(10);
  const mathOperator = getRandomMathOperator(mathOperators);
  let question;
  let answer;
  switch (mathOperator) {
    case '+':
      question = `${number1} + ${number2}`;
      answer = number1 + number2;
      break;
    case '-':
      question = `${number1} - ${number2}`;
      answer = number1 - number2;
      break;
    case '*':
      question = `${number1} * ${number2}`;
      answer = number1 * number2;
      break;
    default:
      break;
  }
  return [question, answer];
};

const runCalc = () => {
  const questionText = 'What is the result of the expression?';

  const questionsAndAnswers = [
    [],
    [],
    [],
  ];

  for (let round = 0; round < 3; round += 1) {
    const [question, answer] = generateRound();
    questionsAndAnswers[round][0] = question;
    questionsAndAnswers[round][1] = answer;
  }

  runGameEngine(questionText, questionsAndAnswers);
};

export default runCalc;
