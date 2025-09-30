import { use, useState } from "react";
import "./App.css";
import { useEffect } from "react";
import fetchAll from "./service/pokemonService";
import PokemonCard from "../components/PokemonCard";
import header from "./assets/header.jpeg";
import Search from "../components/Search";

const App = () => {
  const detallesFiltrados = (query) => {
    query === ""
      ? setBusqueda(detalles)
      : setBusqueda(detalles.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(query.toLowerCase())
        ))};

  const [detalles, setDetalles] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAll();
      setDetalles(data);
      setBusqueda(data);
    };
    fetchData();
  }, []);
  
  return (
    <>
      <header className="header-bg">
        <img src={header} alt="header" className="w-100" />
        <Search onSearch={detallesFiltrados}/>
      </header>

      <div className="pokemon-container">
        {busqueda.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            nombre={pokemon.name}
            url={pokemon.imagen}
            tipo={pokemon.tipos}
          />
        ))}
      </div>
      <footer className="footer-bg">
        <h1>© 2025 Pokédex App</h1>
      </footer>
    </>
  );
};

export default App;
