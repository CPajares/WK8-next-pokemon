const SSR = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <>
      <h2>SSR</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("https://pokedex-carlos.herokuapp.com/pokemon");
  const pokemonsData = await response.json();

  return {
    props: { pokemons: pokemonsData }, // will be passed to the page component as props
  };
};

export default SSR;
