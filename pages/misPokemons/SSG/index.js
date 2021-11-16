const SSG = ({ pokemons }) => {
  return (
    <>
      <h2>SSG</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(`https://pokedex-carlos.herokuapp.com/pokemon`);
  const newPokemons = await response.json();

  return {
    props: {
      pokemons: await newPokemons,
    },
  };
};
export default SSG;
