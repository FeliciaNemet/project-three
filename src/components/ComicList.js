import { useState } from 'react';

     const ComicList = (props) => {

     return (
          <div>
          {
          props.object.items.slice(0, 5).map((item) => {
               return(
                    <p key={item.name}>{item.name}</p>
               )
          })}
          </div>
     )}

export default ComicList;
// {character.comics.items[0].name}