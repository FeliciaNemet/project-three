// NPM Modules
import axios from 'axios';
// Util functions
// Moved the data and function to this file instead of the App.js
import heroData from './heroData.js';
import randomHero from './randomHero.js';
// Removed Insert function as the logic can be hard coded
const apiCall = (brightness, temp) => {
	const heroInformation = randomHero(heroData[brightness], temp);
	return axios({
		url: `https://gateway.marvel.com/v1/public/characters/${heroInformation.id}?ts=1&apikey=a8e885bb92f8b3282a281b15ee8b4a19&hash=a0492b78fb5d29118e5a7fda370cbcd4`,
		method: 'GET',
		dataResponse: 'json',
	});
}

export default apiCall;


