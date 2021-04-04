export const getRandomIndex = (length) => Math.floor(Math.random() * length);

export const getRandomItem = (arr) => arr[getRandomIndex(arr.length)];

export const shuffleArr = (arr) => arr.sort(() => Math.random() - 0.5);

export const fillAnArray = (arr, maxLength, duplicate) => {
  let resultArr = [];

  while (resultArr.length < maxLength) {
    const item = getRandomItem(arr);
    
    if ( !resultArr.includes(item.wordTranslate) && item.wordTranslate !== duplicate ) {
      resultArr.push(item.wordTranslate)
    }
  }
  
  return resultArr;
};
