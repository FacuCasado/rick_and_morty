import React, { useState, useEffect } from "react";
import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../Redux/actions";
import { connect } from "react-redux";

function Card({id, name, species, gender, image, onClose, addFavorite, deleteFavorite, myFavorites}) { //* desestructuracion del props
   
   const [isFav, setIsFav]=useState(false)

   function handleFavorite(){
      if(isFav){
         setIsFav(false)
         deleteFavorite(id)
      }else{
         setIsFav(true)
         addFavorite({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (


      <div className={styles.div}>
         <div className={styles.cruzCorazon}>
            <button className={styles.cruz} onClick={()=>(onClose(id))}>
               <div ></div>
               <div ></div>
               <div ></div>
            </button>

            {
               isFav ? (
               <button onClick={handleFavorite} className={styles.heart}>❤️</button>
               ) : (
               <button onClick={handleFavorite} className={styles.heart}>🤍</button>
               )
            }
         </div>
         <div className={styles.nombre}>
         <Link to={`/detail/${id}`} >
            <h2 >{name}</h2>
         </Link>
         </div>
         <div className={styles.divh3}>
            <h3 >{species}</h3>
            <h3 >{gender}</h3>
         </div>
          <img className={styles.img} src={image} alt="" />
      </div>
   );
}

const mapDispatchToProps=(dispatch)=>{
   return{
      addFavorite:(character)=>{dispatch(addFavorite(character))},
      deleteFavorite:(id)=>{dispatch(deleteFavorite(id))}
   }
}
const mapStateToProps=(state)=>{
   return {myFavorites:state.myFavorites}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)