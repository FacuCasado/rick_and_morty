import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css'


function Cards({ characters, onClose }) {
   return (
      <div className={styles.div}>
         {characters.map(({id, name, species, gender, image})=>{
            return (
            <Card
               id={id}
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