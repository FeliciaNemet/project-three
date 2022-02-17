// NPM modules
import { useState } from 'react';
// Components
import CharacterBox from './components/CharacterBox.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import UserForm from './components/UserForm.js';
// Utils
import apiCall from './utils/apiCall.js';
// Styles
import './styles/sass/App.scss'; // Deleted old index.css and App.css as they are not being used

// Changed to ES6 to match other components
const App = () => {
  const [character, setCharacter] = useState('');
  const [temp, setTemp] = useState('');
  const [brightness, setBrightness] = useState('');

  // Refactored user handle function
  const handleInputChange = (event, callback) => {
    event.target.checked && callback(event.target.value);
  }

  // Created function to reset content
  const handleResetState = () => {
    setCharacter("");
    setTemp("");
    setBrightness("");
  }

  //Adding an Event Listener for when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    // Refactored logic to be more readable
    if(temp && brightness){
       // Also removed the if logic as the randomHero function already does the heavy lifting for us!
      apiCall(brightness, temp).then((response) => {
        const { results } = response.data.data;
        setCharacter(results[0]);
      }).catch((error) => {
        // Moved the catch logic here as axios returns a promise which we are accessing above
        alert(`Something went wrong, please refresh the page`);
      });
    } else {
      alert(`Please insure that the form is complete!`);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        {/* Moved Form to it's own seperate component */}
        <UserForm 
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          brightness={brightness}
          setBrightness={setBrightness}
          temp={temp}
          setTemp={setTemp}
        />
        {/* Refactored button to be more semantic and to move logic programmatically */}
        <button onClick={() => {handleResetState()}}> Reset </button>
      </div>
      {/* Moved this logic to it's own component  */}
      { character && <CharacterBox character={character}/> }
      <Footer />
    </div>
  );
}
export default App;
