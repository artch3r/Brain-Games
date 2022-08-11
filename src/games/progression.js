import runGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const getProgressionLength = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
};

const generateRound = () => {
  const progressionLength = getProgressionLength(5, 10);
  const progression = [];
  const progressionStep = getRandomNumber(5);
  progression[0] = getRandomNumber(100);
  for (let progressInd = 1; progressInd < progressionLength; progressInd += 1) {
    progression[progressInd] = progression[progressInd - 1] + progressionStep;
  }
  const gapIndex = getRandomNumber(progressionLength - 1);
  const answer = progression[gapIndex];
  progression[gapIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const runProgression = () => {
  const questionText = 'What number is missing in the progression?';

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

export default runProgression;
