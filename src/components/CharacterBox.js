// Components
import ComicList from "./ComicList";

const CharacterBox = ({ character }) => {
  // Destructuring values from the character prop
  const { comics, description, name, thumbnail} = character;

  return (
    <div className="characterBox wrapper">
      <h3>{name}</h3>
      <img 
        src={`${thumbnail.path}/standard_xlarge.${thumbnail.extension}`} 
        alt={name} 
      />
      <p className="hide">{description}</p>
      <h4>Here is a suggested reading list</h4>
      <ComicList object={comics} />
    </div>
  );
}

export default CharacterBox;