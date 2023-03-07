import React from 'react';
import Card from '../Card/Card';

const onClose=() => window.alert('Emulamos que se cierra la card')

function Cards(props) {
   const { characters } = props; //* desesctructuracion
   return (
      <div>
         {characters.map(({name, species, gender, image})=>{
            return (<Card
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
            />)
         })}
      </div>
   )
};


export default Cards;