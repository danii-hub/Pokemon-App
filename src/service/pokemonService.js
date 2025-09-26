const fetchAll = async () => {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1025');
      const data = await res.json();
      const detallesData = await Promise.all(
        data.results.map(async (p) => {
          const resDet = await fetch(p.url);
          const det = await resDet.json();
          return {
            name: det.name,
            tipos: det.types.map(t => t.type.name),
            imagen: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${det.id.toString().padStart(3,'0')}.png`
          };
        })
      );
      return detallesData;
    } catch (error) {
      console.error(error);
      return[];
    }
  };

export default fetchAll;