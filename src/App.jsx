import { use, useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import fetchAll from './service/pokemonService';
import PokemonCard from '../components/PokemonCard';
import header from './assets/header.jpeg';




const App = () => {
const [detalles, setDetalles] = useState([]); 
  useEffect(() => {
   const fetchData = async () => {
    const data = await fetchAll();
    setDetalles(data);
   }
   fetchData();
   
 
}, []);

  return (
    <>
          <header className="header-bg">
            <img src={header} alt="header" class="w-100" />
          </header>
    
    <div className="pokemon-container">
    {detalles.map((pokemon) => (
      <PokemonCard 
      key={pokemon.name} 
      nombre={pokemon.name} 
      url={pokemon.imagen} 
      tipo={pokemon.tipos}/>
    ))}
    </div>
    <footer className='footer-bg'>
        <h1>© 2025 Pokédex App</h1>
      </footer>
      
    </>
  )
}

export default App
