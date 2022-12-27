import Pagination from "./Pagination";
import PokemonList from "./PokemonList";
import axios from 'axios'
import { useEffect, useState } from "react";

const BASE_URL = ' https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'

function App() {
  const [url, setUrl] = useState(BASE_URL)
  const [pokemon, setPokemon] = useState([])
  const [nextUrl, setNextUrl] = useState()
  const [prevUrl, setPrevUrl] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(url,
      {
        cancelToken : new axios.CancelToken(c => cancel = c)
      })
  .then(res => {
    setPokemon(res.data.results.map((pokemon) => pokemon.name ))
    setNextUrl(res.data.next)
    setPrevUrl(res.data.previous)
    setLoading(false)
  })

  return () => cancel()
  },[url])
  

  if(loading) return '...Loading'

  return (
    <>
    <PokemonList pokemon={pokemon} />
    <Pagination 
   previous={prevUrl?() => setUrl(prevUrl):null} 
    next={nextUrl?() => setUrl(nextUrl):null} />
    
    </>
  );
}

export default App;
