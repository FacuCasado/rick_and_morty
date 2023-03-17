import React from "react";
import { useState } from "react";
import validation from "./validation";

function Forms2({login}){

    const [userData, setUserData]=useState({
        username:"",
        password:""
    })
    const [errors, setError]=useState({
        errorUser:"",
        errorPass:""
    })

    const handleInput=(event)=>{
        const property = event.target.name;
        const value = event.target.value;
        setUserData({...userData, [property]:value,})
        setError(validation(property, value))
    };
    

    const handleSubmit=(event)=>{
        event.preventDefault();
        login(userData);
    }



    return(
        <form onSubmit={handleSubmit}>

        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" name="username" value={userData.username} onChange={handleInput}>
            </input>
            <br/>
            <span>{errors.errorUser}</span>
        </div>


        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" value={userData.password} onChange={handleInput}>
            </input>
            <br/>
            <span>{errors.errorPass}</span>
        </div>

        <button type='submit'>Loging</button>

        </form>
    )
}

export default Forms2;