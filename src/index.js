import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.round(Math.random() * 100);

const gameEngine = (questionText, questionExpression, checkIsRight) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(questionText);
  let score = 0;

  for (let turn = 1; turn <= 3; turn += 1) {
    console.log(`Question: ${questionExpression()}`);
    const userAnswer = readlineSync.question('Your answer: ');
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

export { getRandomNumber, gameEngine };
