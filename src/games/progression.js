import run, { roundsCount } from '../index.js';
import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';
const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 5;
const minRange = 1;
const maxRange = 100;

const generateProgression = () => {
  const progressionLength = getRandomNumber(minLength, maxLength);
  const progression = [];
  const progressionStep = getRandomNumber(minStep, maxStep);
  progression[0] = getRandomNumber(minRange, maxRange);
  for (let progressInd = 1; progressInd < progressionLength; progressInd += 1) {
    progression[progressInd] = progression[progressInd - 1] + progressionStep;
  }
  return progression;
};

const generateRound = () => {
  const progression = generateProgression();
  const firstIndex = 0;
  const lastIndex = progression.length - 1;
  const gapIndex = getRandomNumber(firstIndex, lastIndex);
  const gap = progression[gapIndex];
  progression[gapIndex] = '..';
  const question = progression.join(' ');
  const answer = String(gap);
  return [question, answer];
};

export default () => {
  const rounds = [];
  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(generateRound());
  }
  run(description, rounds);
};
