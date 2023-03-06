import React from "react";

 function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}

export default SearchBar;