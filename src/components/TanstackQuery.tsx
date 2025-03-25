import { useQuery } from "@tanstack/react-query";
import PokemonItem from "./pokemons/PokemonItem";

async function fetchPokemonList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
  return response.json();
}

export default function TanStackQuery() {
  const { isPending, isError, data, error } = 
  useQuery({
    queryKey: ['pokemons'],
    queryFn: fetchPokemonList
  })

  if(isPending) {
    return <span>Loading ...</span>
  }

  if(isError) {
    return <span>Error: { error.message }</span>
  }
  return(
    <div className="container">
      <div className="grid grid-cols-6 gap-4">
      {data.results.map((pokemon) => (
        <PokemonItem 
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
      </div>
      
    </div>
  )
}