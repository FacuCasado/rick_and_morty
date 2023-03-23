import { connect, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteFavorite } from "../../Redux/actions";
import styles from "./Favorites.module.css"

function Favorites({myFavorites}){

   
    return(
       <div className={styles.contenedor}>
        {
            myFavorites.map((fav)=>{
                return(
                    <div className={styles.cardDiv}> 

                        <button className={styles.heart}>❤️</button>
                        
                        <Link to={`/detail/${fav.id}`} >
                            <h2 >{fav.name}</h2>
                        </Link>
                
                        <div className={styles.divh3}>
                            <h3 >{fav.species}</h3>
                            <h3 >{fav.gender}</h3>
                        </div>
                        <img className={styles.img} src={fav.image} alt="" />
                    </div>
                )
            })
        }
       </div>
    )
}

function mapStateToProps(state){
    return {
        myFavorites:state.myFavorites,
    }
}

export default connect (mapStateToProps,null)(Favorites)







