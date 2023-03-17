import React from 'react';
import titulo from '../../img/Rick_and_Morty.png'
import styles from "./Title.module.css"

function Title() {
  return(
    <img className={styles.foto} src={titulo} alt="Rick and morty" />
  )
}

export default Title;