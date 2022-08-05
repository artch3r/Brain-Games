import { getRandomNumber, runGameEngine } from '../index.js';

const runProgression = () => {
  const questionText = 'What number is missing in the progression?';
  const questionsAndAnswers = [
    [],
    [],
    [],
  ];

  const getProgressionLength = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
  };

  for (let i = 0; i < 3; i += 1) {
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
    questionsAndAnswers[i][0] = question;
    questionsAndAnswers[i][1] = answer;
  }

  runGameEngine(questionText, questionsAndAnswers);
};

export default runProgression;
