import React, { useState } from "react";
import styles from "./SearchBar.module.css"

function SearchBar({onSearch}) {

   const[id, setId]=useState("")

   function inputChange(event){
      setId(event.target.value)
   }

   return (
      <div className={styles.divSearch}>
         <input className={styles.searchInput} type='search' onChange={inputChange}/>
         <button className={styles.searchButton} onClick={()=>{onSearch(id)}}>Add</button>
      </div>
   );
}

export default SearchBar;