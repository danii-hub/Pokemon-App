import { use, useState } from "react";
import "./App.css";
import { useEffect } from "react";
import fetchAll from "./service/pokemonService";
import PokemonCard from "../components/PokemonCard";
import header from "./assets/header.jpeg";

const App = () => {
  const [detalles, setDetalles] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAll();
      setDetalles(data);
    };
    fetchData();
  }, []);
  //Operador ternario
  const detallesFiltrados =
    busqueda === ""
      ? detalles 
      : detalles.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
        );

  return (
    <>
      <header className="header-bg">
        <img src={header} alt="header" className="w-100" />

        <div className="tarjeta ">
        <h2>Filtrar Pokemón</h2>
          <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar Pokémon..."
        />
        </div>
      </header>

      <div className="pokemon-container">
        {detallesFiltrados.map((pokemon) => (
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
