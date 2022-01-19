// import Header from './Components.js/Header.js';
// import Footer from './Components.js/Footer.js';
import { useState } from 'react';
// import react from 'react';
import apiCall from './utils/apiCall.js';
import heroData from './utils/heroData.js';
import randomHero from './utils/randomHero.js';
import ComicList from './components/ComicList.js';
import './App.css';

function App() {
  const [character, setCharacter] = useState('');
  const [temp, setTemp] = useState('');
  const [brightness, setBrightness] = useState('');

  const handleChange = (event) => {
    if (event.target.checked) {
      setTemp(event.target.value);
    }
  }

  const handleChanges = (event) => {
    if (event.target.checked) {
      setBrightness(event.target.value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = heroData
  

      if (temp === 'Hot' && brightness === 'Light'){

        const heroData = randomHero(data[brightness], temp)
        apiCall(heroData.id).then((data)=>{setCharacter(data)});

      } else if (temp === 'Hot' && brightness === 'Dark'){
        const heroData = randomHero(data[brightness], temp)
        apiCall(heroData.id).then((data)=>{setCharacter(data)});

      } else if (temp === 'Cold' && brightness === 'Light'){
      const heroData = randomHero(data[brightness], temp)
        apiCall(heroData.id).then((data)=>{setCharacter(data)});
        

      } else if (temp === 'Cold' && brightness === 'Dark'){
      const heroData = randomHero(data[brightness], temp)
        apiCall(heroData.id).then((data)=>{setCharacter(data)});
      
      }





};

  return (
    <div className="App">
      <h1>Choose Your Character</h1>
      <h2>Please select a character below.</h2>

      <form onSubmit={handleSubmit}>
				<fieldset className="choices">
					<legend>Which do you prefer?</legend>
					<label htmlFor="Hot">Hot</label>
					<input type="radio" id="Hot" value="Hot" name="temp" checked={temp === 'Hot'}  onChange={handleChange} />
			
					<label htmlFor="Cold">Cold</label>
					<input type="radio" id="cold" value="Cold" name="temp" checked={temp === 'Cold'} onChange={handleChange}/>
				</fieldset>
			
				<fieldset className="choices">
					<legend>Do you prefer light or dark?</legend>
					<label htmlFor="Light">Light</label>
					<input type="radio" name="brightness" id="Light" value="Light" checked={brightness === 'Light'} onChange={handleChanges}/>
			
					<label htmlFor="Dark">Dark</label>
					<input type="radio" name="brightness" id="Dark" value="Dark" checked={brightness === 'Dark'} onChange={handleChanges}/>
				</fieldset>
			
				<input type="submit" value="submit"/>
			</form>
      <section className="results"></section>

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
