import readlineSync from 'readline-sync';

const getRandomNumber = (finiteNumber) => Math.floor(Math.random() * finiteNumber);

const gameEngine = (questionText, questionsAndAnswers) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(questionText);
  let score = 0;

  for (let round = 0; round < questionsAndAnswers.length; round += 1) {
    const [question, correctAnswer] = questionsAndAnswers[round];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
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
