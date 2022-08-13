import run from '../index.js';
import { getRandomNumber, tasksCount } from '../utils.js';

const generateRound = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progression = [];
  const progressionStep = getRandomNumber(1, 5);
  progression[0] = getRandomNumber(1, 100);
  for (let progressInd = 1; progressInd < progressionLength; progressInd += 1) {
    progression[progressInd] = progression[progressInd - 1] + progressionStep;
  }
  const gapIndex = getRandomNumber(0, progressionLength - 1);
  const answer = progression[gapIndex];
  progression[gapIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const runProgression = () => {
  const description = 'What number is missing in the progression?';
  const tasks = [];
  for (let i = 0; i < tasksCount; i += 1) {
    tasks.push(generateRound());
  }
  run(description, tasks);
};

export default runProgression;
