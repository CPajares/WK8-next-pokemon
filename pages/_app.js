import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1>JustR-Pokémon</h1>

      <Link href="/">|||| HOME ||</Link>
      <Link href="/misPokemons/ISR">|| ISR ||</Link>
      <Link href="/misPokemons/SSG">|| SSG ||</Link>
      <Link href="/misPokemons/SSR">|| SSR ||</Link>
      <Link href="/pokemons">|| Pokemons ||||</Link>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
