// import Header from './Components.js/Header.js';
// import Footer from './Components.js/Footer.js';
import { useEffect, useState } from 'react';
// import react from 'react';
import apiCall from './Utils.js';

import './App.css';

function App() {
  const [character, setCharacter] = useState('');
  const [userInput, setUserInput] = useState('');
  useEffect( () => {
    // apiCall();
    
  }, []);








  const handleInput = (event) => {
    setUserInput(event.target.value);
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    apiCall(userInput).then((data)=>{setCharacter(data)});
    
  }



  return (
    <div className="App">
      <h1>Choose Your Character</h1>
      <h2>Please select a character below.</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="characterChoice">Which character?</label>
        <select 
        name="characterChoice"
        id="characterChoice"
        onChange={handleInput}
        value={userInput}
        
        >
          <option value defaultValue >Please choose a character</option>
          <option value="1011054">Spider-Man</option>
          <option value="1009368">Iron Man</option>
          <option value="1014985">Green Goblin</option>
          <option value="1009276">Doctor Octopus</option>
          <option value="1009262">Daredevil</option>
          <option value="1011318">Iron Fist</option>
          <option value="1009663">Venom</option>
          <option value="1009187">Black Panther</option>
          <option value="1011289">Erik Killmonger</option>
        </select>
      <input type='submit' value="Submit"/>
      </form>
    {
      character &&(
        <div>
        <h3>{character.name}</h3>
        <img src={`${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`} alt={character.name} />
        </div>
      )
    }
    </div>
  );
}

export default App;
