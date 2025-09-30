import React  from "react";
import "./Search.css";
const Search = ({onSearch}) =>{
    const handleInputChange = (e) =>{
        onSearch(e.target.value)
    }
    return(
        <div className="tarjeta ">
        <h2>Filtrar Pokemón</h2>
          <input
          type="search"
          onChange={handleInputChange}
          placeholder="Buscar Pokémon..."
        />
        </div>
    )
}
export default Search