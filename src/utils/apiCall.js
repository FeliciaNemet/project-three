import axios from 'axios';

const insert = (parameter) => {
     return parameter ? `/${parameter}` : ``;
}
const apiCall = (characterId = ``) => {     
return axios({
     url: `https://gateway.marvel.com/v1/public/characters${insert(characterId)}?ts=1&apikey=a8e885bb92f8b3282a281b15ee8b4a19&hash=a0492b78fb5d29118e5a7fda370cbcd4`,
     method: 'GET',
     dataResponse: 'json',
     }).then((response) => {
          return(response.data.data.results[0]);
     }).catch((error) => {
          alert(`Something went wrong, please refresh the page`);
     });
}

export default apiCall;


