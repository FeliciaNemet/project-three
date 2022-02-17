const UserForm = (props) => {
  // Destructuring values from props
  const { handleSubmit, handleInputChange, temp, brightness, setTemp, setBrightness } = props;

  return(
    <form onSubmit={handleSubmit}>
      <fieldset className="choices">
        <legend>Which do you prefer?</legend>
        <label htmlFor="Hot">Hot</label>
        <input 
          type="radio" 
          id="Hot" 
          value="Hot" 
          name="temp" 
          checked={temp === 'Hot'}  
          onChange={(e) => {handleInputChange(e, setTemp)}} />
        <label htmlFor="Cold">Cold</label>
        <input 
          type="radio" 
          id="cold" 
          value="Cold" 
          name="temp" 
          checked={temp === 'Cold'} 
          onChange={(e) => {handleInputChange(e, setTemp)}}/>
      </fieldset>
      <fieldset className="choices">
        <legend>Do you prefer light or dark?</legend>
        <label htmlFor="Light">Light</label>
        <input 
          type="radio" 
          name="brightness" 
          id="Light" 
          value="Light" 
          checked={brightness === 'Light'} 
          onChange={(e) => {handleInputChange(e, setBrightness)}}
        />
        <label htmlFor="Dark">Dark</label>
        <input 
          type="radio" 
          name="brightness" 
          id="Dark" 
          value="Dark" 
          checked={brightness === 'Dark'} 
          onChange={(e) => {handleInputChange(e, setBrightness)}}
        />
      </fieldset>
      <input type="submit" value="submit"/>
    </form>
  );
}

export default UserForm;