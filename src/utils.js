const getRandomNumber = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
};

const tasksCount = 3;

export { getRandomNumber, tasksCount };
