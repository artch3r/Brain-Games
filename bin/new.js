import readlineSync from 'readline-sync';

let number1;
let number2;
let userAnswer;
let correctAnswer;

const getRandomNumber = () => Math.round(Math.random() * 100);

const questionText = 'What is the result of the expression?';

const questionExpression = () => {
  number1 = getRandomNumber();
  number2 = getRandomNumber();
  const expression = `${number1} + ${number2}`;
  return expression;
};

const checkIsRight = () => {
  correctAnswer = number1 + number2;
  userAnswer = Number(userAnswer);
  if (userAnswer === correctAnswer) {
    return true;
  }
  return false;
};

const gameEngine = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(questionText);
  let score = 0;

  for (let turn = 1; turn <= 3; turn += 1) {
    console.log(`Question: ${questionExpression()}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (checkIsRight()) {
      console.log('Correct!');
      score += 1;
    } else if (!checkIsRight()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      Let's try again, ${name}!`);
      break;
    }
  }

  if (score === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

gameEngine(questionText, questionExpression, checkIsRight);
