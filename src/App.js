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
        name: "Iron Man",
        limit: 1
      }
    }).then((response) => {
      console.log(response.data.data.results)
      setCharacter(response.data.data.results)
    });
  }, [searchTerm]);

  const handleInput = (event) => {
    console.log('is this working?', event.target.value);
    setCharacter(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(character);
  }



  return (
    <div className="App">
      <h1>Choose Your Character</h1>
      <h2>Please select a character below.</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="characterChoice">Which character?</label>
        <select name="characterChoice" id="characterChoice">
          <option value defaultValue >Please choose a character</option>
          <option value="spider-man">Spider-Man</option>
          <option value="iron man">Iron Man</option>
          <option value="green- oblin">Green Goblin</option>
          <option value="doctor octopus">Doctor Octopus</option>
          <option value="daredevil">Daredevil</option>
          <option value="iron fist">Iron Fist</option>
          <option value="venom eddie brock">Venom</option>
          <option value="black panther">Black Panther</option>
          <option value="erik killmonger">Erik Killmonger</option>
        </select>
      <button>Submit</button>
      </form>
      <div>
        <h3>{}</h3>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default App;
