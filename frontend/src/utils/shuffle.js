const shuffle = arr => {
  let currentIndex = arr.length;
  let temporaryValue, randomIndex;

  let shuffledArray = [...arr];

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = shuffledArray[currentIndex];
    shuffledArray[currentIndex] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temporaryValue;
  }

  return shuffledArray;
};

export default shuffle;
