#!/usr/bin/env node

import { getRandomNumber, gameEngine } from '../src/index.js';

const questionText = 'What is the result of the expression?';

const questionExpressionFunction = () => {
  const helperForExpression = () => {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const expression = `${number1} + ${number2}`;
    return expression;
  };
  return helperForExpression;
};
const questionExpression = questionExpressionFunction();

const checkIsRightFunction = () => {
  const helperForCheckIsRight = () => {
    const correctAnswer = number1 + number2;
    if (Number(userAnswer) === correctAnswer) {
      return true;
    }
    return false;
  };
  return helperForCheckIsRight;
};
const checkIsRight = checkIsRightFunction();

gameEngine(questionText, questionExpression, checkIsRight);
