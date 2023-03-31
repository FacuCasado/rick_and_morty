import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFavorites } from '../../Redux/actions';
import Card from '../Card/Card';
import styles from './Cards.module.css'


function Cards({ characters, onClose }) {

   const dispatch=useDispatch();

   useEffect(()=>{
      dispatch(getFavorites())
   },[])
   return (
      <div className={styles.div}>
         {characters.map(({id, name, species, gender, image})=>{
            return (
            <Card
               key={id}
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