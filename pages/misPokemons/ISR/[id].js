import { useRouter } from "next/router";

const PokemonISR = ({ pokemons }) => {
  const route = useRouter();
  if (route.isFallback) {
    return <p>Loading</p>;
  }
  return (
    <>
      <h2>{pokemons.name}</h2>
    </>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch(`https://pokedex-carlos.herokuapp.com/pokemon`);
  const newPokemons = await response.json();
  const paths = newPokemons.map((pokemon) => ({
    params: { id: `${pokemon.id}` },
  }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(
    `https://pokedex-carlos.herokuapp.com/pokemon/` + id
  );
  const newPokemons = await response.json();

  return {
    props: {
      pokemons: newPokemons,
    },
    revalidate: 20,
  };
};
export default PokemonISR;
