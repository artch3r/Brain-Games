import run, { roundsCount } from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';
const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 5;
const minRange = 1;
const maxRange = 100;

const createProgression = (start, step, length) => {
  const progression = [];
  progression[0] = start;
  for (let i = 1; i < length; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(minRange, maxRange);
  const step = getRandomNumber(minStep, maxStep);
  const length = getRandomNumber(minLength, maxLength);
  const progression = createProgression(start, step, length);
  const gapIndex = getRandomIndex(progression);
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
