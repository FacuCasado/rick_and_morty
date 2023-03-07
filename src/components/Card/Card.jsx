import React from "react";

function Card({name, species, gender, image, onClose}) { //* desestructuracion del props
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>Name: {name}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <img  src={image} alt="" />
      </div>
   );
}


export default Card;