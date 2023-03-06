import React from 'react';
import Card from './Card';

function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {characters.map((characters)=>Card(characters))}
      </div>
   )
};


export default Cards;