import React from "react";

 function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' />
         <button onClick={(id)=>{onSearch(id)}}>Agregar</button>
      </div>
   );
}

export default SearchBar;