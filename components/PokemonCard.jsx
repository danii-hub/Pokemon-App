import { use, useState } from 'react'
import { useEffect } from 'react';

const tipoColor = {
  fire: 'red',
  water: 'blue',
  grass: 'green',
  electric: 'yellow',
  ice: 'cyan',
  fighting: 'orange',
  poison: 'purple',
  ground: 'brown',
  flying: 'skyblue',
  psychic: 'pink',
  bug: 'lightgreen',
  rock: 'grey',
  ghost: 'indigo',
  dragon: 'darkblue',
  dark: 'black',
  steel: 'silver',
  fairy: 'hotpink',
  normal: 'darkgrey'
};

const PokemonCard = ({ nombre, url, tipo }) => {
  return (
    <div className="pokemon-container">
      <div className="pokemon-card">
        <h2>{nombre}</h2>
        <div className="tipos">
          {(tipo || []).map((t) => (
            <span
              key={t}
              className="tipo-badge"
              style={{ backgroundColor: tipoColor[t] || 'grey' }}
            >
              {t.toUpperCase()}
            </span>
          ))}
        </div>
        <a href={`https://www.pokemon.com/es/pokedex/${nombre}`}>
                <img
                    src={url}
                    alt={nombre}
                />
            </a>
      </div>
    </div>
  );
};


export default PokemonCard;