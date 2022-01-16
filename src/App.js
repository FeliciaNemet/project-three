// import Header from './Components.js/Header.js';
// import Footer from './Components.js/Footer.js';
import { useEffect, useState } from 'react';
// import react from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [character, setCharacter] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('')

  useEffect( () => {
    
    axios({
      url: `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=a8e885bb92f8b3282a281b15ee8b4a19&hash=a0492b78fb5d29118e5a7fda370cbcd4`,
      method: 'GET',
      dataResponse: 'json',
      params: {
        name: character,
        limit: 1
      }
    }).then((response) => {
      console.log(response.data.data.results)
      setCharacter(response.data.data.results)
    });
  }, [character]);








  const handleInput = (event) => {
    console.log('is this working?', event.target.value);
    setCharacter(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserInput(userInput);
  }



  return (
    <div className="App">
      <h1>Choose Your Character</h1>
      <h2>Please select a character below.</h2>

      <form onSubmit={ (e) => {handleSubmit(e)} }>
        <label htmlFor="characterChoice">Which character?</label>
        <select 
        name="characterChoice"
        id="characterChoice"
        onChange={handleInput}
        value={userInput}>
          <option default value >Please choose a character</option>
          <option value="Spider-Man (1602)">Spider-Man</option>
          <option value="Iron Man">Iron Man</option>
          <option value="Green Goblin (Barry Norman Osborn)">Green Goblin</option>
          <option value="Doctor Octopus">Doctor Octopus</option>
          <option value="Daredevil">Daredevil</option>
          <option value="Iron Fist (Bei Bang-Wen)">Iron Fist</option>
          <option value="Venom (Flash Thompson)">Venom</option>
          <option value="Black Panther">Black Panther</option>
          <option value="Killmonger">Killmonger</option>
        </select>
      {/* <button>Submit</button> */}
      </form>
      {character.map( (characterData) => {
        return (
          <div key={characterData.id}>
            <h3>{characterData.name}</h3>
            <img src="" alt="" />
          </div>
        )
      })}
    </div>
  );
}

export default App;
