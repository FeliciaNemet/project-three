import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { useState } from 'react';
import apiCall from './utils/apiCall.js';
import heroData from './utils/heroData.js';
import randomHero from './utils/randomHero.js';
import ComicList from './components/ComicList.js';
import './styles/sass/App.scss';

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
  //Adding an Event Listener for when the form is submitted
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
      <Header />
      <div className="wrapper">
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
      <a href="index.html">
        <button>Reset</button>
      </a>
      </div>
    {
      character &&(
        <div className="characterBox wrapper">
        <h3>{character.name}</h3>
        <img src={`${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`} alt={character.name} />
        <p className="hide">{character.description}</p>
        <h4>Here is a suggested reading list</h4>
        <ComicList object={character.comics} />
        </div>
      )
    }
    <Footer />
    </div>
  );
}
export default App;
