import React from "react";
import validation from "./validation";
import styles from "./Forms.module.css"
import titulo from "../../img/Rick_and_Morty.png"


class Forms extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:"",
            password:"",
            errorUser:"",
            errorPass:"",
          };
    }
    render(){

        const handleInput=(event)=>{
            const property = event.target.name;
            const value = event.target.value;
            this.setState({[property]:value})
            this.setState(validation(property, value))
        };

        const handleSubmit=(event)=>{
            event.preventDefault();
            this.props.login(this.state)
        }
     

        return(
            
            <form onSubmit={handleSubmit} className={styles.form}>
                
                <div className={styles.baseForm}>
                    <div className={styles.contenedores}>
                        <label htmlFor="username" className={styles.labels}>Username:</label>
                        <input className={this.state.errorUser ? styles.error : styles.success} type="text" name="username" value={this.state.username} onChange={handleInput}>
                        </input>
                    </div>
                    <span className={styles.mensajes} >*Ingrese un mail válido*</span>


                    <div className={styles.contenedores}>
                        <label htmlFor="password" className={styles.labels}>Password:</label>
                        <input className={this.state.errorPass ? styles.error : styles.success} type="password" name="password" value={this.state.password} onChange={handleInput}>
                        </input>
                    </div>
                    <span className={styles.mensajes}>*La contraseña debe contener un número*</span>
                    <div>
                        <button type='submit' className={styles.logingButton}>Loging</button>
                    </div>
                    <span className={styles.mensajes}>¿Primera vez?</span>
                </div>
            </form>
            
        )
    }


}


export default Forms;