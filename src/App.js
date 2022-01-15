// import Header from './Components.js/Header.js';
// import Footer from './Components.js/Footer.js';
import { useEffect, useState } from 'react';
// import react from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [character, setCharacter] = useState([]);

  useEffect( () => {
    
    axios({
      url: `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=a8e885bb92f8b3282a281b15ee8b4a19&hash=a0492b78fb5d29118e5a7fda370cbcd4`,
      method: 'GET',
      dataResponse: 'json',
      params: {
        // q: 'Spider-Man'
        nameStartsWith: 'Iron Man',
        limit: 1
      }
    }).then((response) => {
      console.log(response.data.data.results)
      setCharacter(response)
    });
  }, []);


  return (
    <div className="App">
      <h1>Choose Your Character</h1>
    </div>
  );
}

export default App;
