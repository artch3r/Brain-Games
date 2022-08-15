const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomIndex = (array) => {
  const firstIndex = 0;
  const lastIndex = array.length - 1;
  const randomIndex = getRandomNumber(firstIndex, lastIndex);
  return randomIndex;
};

export { getRandomNumber, getRandomIndex };
