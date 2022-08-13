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

  const tasks = [
    [],
    [],
    [],
  ];

  for (let round = 0; round < tasksCount; round += 1) {
    const [question, answer] = generateRound();
    tasks[round][0] = question;
    tasks[round][1] = answer;
  }

  run(description, tasks);
};

export default runProgression;
