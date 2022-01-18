
import axios from 'axios';

const insert = (parameter) => {
     return parameter ? `/${parameter}` : ``;
}

const apiCall = (characterId = ``) => {
     
return axios({
     url: `http://gateway.marvel.com/v1/public/characters${insert(characterId)}?ts=1&apikey=a8e885bb92f8b3282a281b15ee8b4a19&hash=a0492b78fb5d29118e5a7fda370cbcd4`,
     method: 'GET',
     dataResponse: 'json',
     // params: {
     //      name: character,
     //      limit: 1
     // }
     }).then((response) => {
          console.log(response.data.data.results);
          return(response.data.data.results[0]);
          // setCharacter(response.data.data.results)
     });
}

export default apiCall;


