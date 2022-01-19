
const randomResult = arr => {
		const randomNumber = Math.floor(Math.random() * arr.length);
		return arr[randomNumber];
	};

const randomHero = (arr, temp) => {
     const filteredOptions = arr.filter((heroData) => {
		return (heroData.temp === temp);
	});
          const randomHero = randomResult(filteredOptions)
          return randomHero;

}



export default randomHero;