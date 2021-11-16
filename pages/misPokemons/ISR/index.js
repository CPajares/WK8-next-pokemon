import Link from "next/link";

const PokemonISR = ({ pokemons }) => {
  return (
    <>
      <h2>PokemonISR</h2>
      {pokemons.map((pokemon) => (
        <Link key={pokemon.id} href={`/misPokemons/ISR/${pokemon.id}`}>
          <p key={pokemon.id}>{pokemon.name}</p>
        </Link>
      ))}
    </>
  );
};
export const getStaticProps = async () => {
  const response = await fetch("https://pokedex-carlos.herokuapp.com/pokemon");
  const newPokemons = await response.json();
  return {
    props: {
      pokemons: await newPokemons,
    },
  };
};

export default PokemonISR;
