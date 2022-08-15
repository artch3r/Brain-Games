import run, { roundsCount } from '../index.js';
import { getRandomNumber } from '../utils.js';

const generateProgression = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progression = [];
  const progressionStep = getRandomNumber(1, 5);
  progression[0] = getRandomNumber(1, 100);
  for (let progressInd = 1; progressInd < progressionLength; progressInd += 1) {
    progression[progressInd] = progression[progressInd - 1] + progressionStep;
  }
  return progression;
};

const generateRound = () => {
  const progression = generateProgression();
  const gapIndex = getRandomNumber(0, progression.length - 1);
  const gap = progression[gapIndex];
  progression[gapIndex] = '..';
  const question = progression.join(' ');
  const answer = String(gap);
  return [question, answer];
};

const runProgression = () => {
  const description = 'What number is missing in the progression?';
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  run(description, rounds);
};

export default runProgression;
