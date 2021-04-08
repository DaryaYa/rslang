export const shuffleArray = (array: any[]) => {
    let j, temp;
	for(let i = array.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = array[j];
		array[j] = array[i];
		array[i] = temp;
	}
	return array;
};

export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
}