//  Random Result Function to randomize the results
const randomResult = arr => {
	const randomNumber = Math.floor(Math.random() * arr.length);
	return arr[randomNumber];
};
//Filtering the options in brightness for the user's choice of temp
const randomHero = (arr, temp) => {
	const filteredOptions = arr.filter((heroData) => heroData.temp === temp);
	//Randomly select of one of the options that match users choices
	return randomResult(filteredOptions);
}
export default randomHero;