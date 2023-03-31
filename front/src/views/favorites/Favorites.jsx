import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { deleteFavorite, getFavorites } from "../../Redux/actions";
import styles from "./Favorites.module.css"
import Card from "../../components/Card/Card"



function Favorites({onClose}){

    const favorites = useSelector((state) => state.myFavorites);
    const dispatch=useDispatch();

    
    useEffect(()=>{
        dispatch(getFavorites())
     },[])
   
    return(
       <div className={styles.contenedor}>
        {
            favorites.map((fav)=>{
                return(
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                        onClose={onClose}
                    />
                )
            })
        }
       </div>
    )
}


export default Favorites







