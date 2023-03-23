import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"
import { NavLink } from "react-router-dom";
import RandomChar from "../RandomChar/RandomChar";

function Nav({onSearch}){
    return(
        <div className={styles.divNav}>

            <NavLink to="/home"  >
              <button className={styles.homeButton}>Home</button>
            </NavLink>

            <NavLink to="/about" >
              <button className={styles.aboutButton}>About</button>
            </NavLink>

            <NavLink to="/favorites"  >
              <button className={styles.favoritesButton}>Favorites</button>
            </NavLink>

            <RandomChar className={styles.randomButton} onSearch={onSearch}/>

            <SearchBar className={styles.searchBar} onSearch={onSearch}/>

            <NavLink to="/" >
              <button className={styles.aboutButton}>Logout</button>
            </NavLink>
        </div>

    )

}

export default Nav;
