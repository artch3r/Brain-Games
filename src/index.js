import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.round(Math.random() * 10);

const gameEngine = (questionText, questionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(questionText);

  for (let round = 0; round < questionsAndAnswers.length; round += 1) {
    const [question, correctAnswer] = questionsAndAnswers[round];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      Let's try again, ${name}!`);
      break;
    }
    console.log(`Congratulations, ${name}!`);
  }
};

export { getRandomNumber, gameEngine };
