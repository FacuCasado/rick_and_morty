import React from "react";
import styles from "./About.module.css"

function About(){
    return(
        <div>

            <h1 className={styles.h1}>Wubba lubba dub dub</h1>
            <div className={styles.parrafo}>
                <h3>Bienvenidos a mi primera app en React. </h3>
                <p>Esta página la inicie el mismo dia que aprendi lo que significaba React, es por esto, que Rick y Morty fue creciendo al mismo tiempo que yo y lo seguira haciendo.</p>
                <p>Esto me da la certeza de que este no es el resultado final de este proyecto. </p>
                <p>Espero que lo disfruten tanto como yo.</p>
            </div>
        </div>


    )
}

export default About;