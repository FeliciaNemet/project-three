// import Header from './Components.js/Header.js';
// import Footer from './Components.js/Footer.js';
import { useEffect, useState } from 'react';
// import react from 'react';
import apiCall from './components/Utils.js';
import ComicList from './components/ComicList.js';
import './App.css';

function App() {
  const [character, setCharacter] = useState('');
  const [userChange, setUserChange] = useState('');
  const [temp, setTemp] = useState('');
  const [brightness, setBrightness] = useState('');


  // useEffect( () => {
  //   apiCall();
    
  // }, []);






  const handleChange = (event) => {
    // setUserChange(event.target.value);
    if (event.target.checked) {
      setTemp(event.target.value);
    }
  }

  const handleChanges = (event) => {
    // setUserChanges(event.target.value);
    if (event.target.checked) {
      setBrightness(event.target.value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    apiCall(userChange).then((data)=>{setCharacter(data)});
    console.log(temp)
    console.log(brightness)

    if 
  };

  return (
    <div className="App">
      <h1>Choose Your Character</h1>
      <h2>Please select a character below.</h2>

      <form onSubmit={handleSubmit}>
				<fieldset className="choices">
					<legend>Which do you prefer?</legend>
					<label htmlFor="Hot">Hot</label>
					<input type="radio" id="Hot" value="Hot" name="temp" checked={temp == 'Hot'}  onChange={handleChange} />
			
					<label htmlFor="Cold">Cold</label>
					<input type="radio" id="cold" value="Cold" name="temp" checked={temp == 'Cold'} onChange={handleChange}/>
				</fieldset>
			
				<fieldset className="choices">
					<legend>Do you prefer light or dark?</legend>
					<label htmlFor="Light">Light</label>
					<input type="radio" name="brightness" id="Light" value="Light" checked={brightness == 'Light'} onChange={handleChanges}/>
			
					<label htmlFor="Dark">Dark</label>
					<input type="radio" name="brightness" id="Dark" value="Dark" checked={brightness == 'Dark'} onChange={handleChanges}/>
				</fieldset>
			
				<input type="submit" value="submit"/>
			</form>
      <section className="results"></section>


      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="characterChoice">Which character?</label>
        <select 
        name="characterChoice"
        id="characterChoice"
        onChange={handleInput}
        value={userInput}
        >
          <option value defaultValue >Please choose a character</option>
          <option value="1009146">Abomination</option>
          <option value="1009262">Daredevil</option>
          <option value="1009351">Hulk</option>
          <option value="1009368">Iron Man</option>
          <option value="1009610">Spider-Man</option>
          <option value="1009652">Thanos</option>
          <option value="1009664">Thor</option>
          <option value="1009685">Ultron</option>
          <option value="1009663">Venom</option>
          <option value="1009699">Vulture</option>
          <option value="1011588">Whiplash</option>
          <option value="1009718">Wolverine</option>
          
        </select>
      <input type='submit' value="Submit"/>
      </form> */}
    {
      character &&(
        <div>
        <h3>{character.name}</h3>
        <img src={`${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`} alt={character.name} />
        <p>{character.description}</p>
        <h3>Here is a suggested reading list.</h3>
        <ComicList object={character.comics} />
        </div>
      )
    }
    </div>
  );
}

export default App;
