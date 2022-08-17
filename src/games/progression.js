import run from '../index.js';
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
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(minRange, maxRange);
  const step = getRandomNumber(minStep, maxStep);
  const length = getRandomNumber(minLength, maxLength);
  const progression = createProgression(start, step, length);
  const hiddenIndex = getRandomIndex(progression);
  const hidden = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  const answer = String(hidden);
  return [question, answer];
};

export default () => {
  run(description, generateRound);
};
