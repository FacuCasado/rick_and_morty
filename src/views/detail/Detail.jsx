import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css"

function Details(){

    const {detailId}=useParams();
    const[character, setCharacter]=useState({});


    useEffect(() => {
      const URL_BASE="https://be-a-rym.up.railway.app/api"
      const key="82ad9bd6c4f3.467dff24f889a9ac0ead"
      fetch(`${URL_BASE}/character/${detailId}?key=${key}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
      return setCharacter({});
      }, [detailId]
    );



    return(
        <div>
          {!character.name && 
            <div className={styles.loader}>
              <span className={styles.loaderText}>loading</span>
              <span className={styles.load}></span>
            </div>
          }

          {character.name &&
          <div>
            <div className={styles.completeCard}>
              <div className={styles.divCard}>
                  <h2>{character.name}</h2>
                  <h5>Status:{character.status}</h5>
                  <h5>Specie:{character.species}</h5>
                  <h5>Gender:{character.gender}</h5>
                  <h5>Origin:{character.origin?.name}</h5>
                  
              </div>
              <div>
                <img  src={character.image} alt="" />
              </div>
           </div>
            <Link to={`/home`} >
                <button className={styles.buttonHome}>Back</button>
            </Link>
          </div>
          }
        </div>


    )
}

export default Details;