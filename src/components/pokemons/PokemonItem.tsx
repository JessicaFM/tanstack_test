import { useQuery } from "@tanstack/react-query";


interface PokemonItemProps {
  name: string,
  url: string
}

export default function PokemonItem({ name, url }: PokemonItemProps) {
  const { data, isPending, isError } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: async () => {
      const res = await fetch(url);
      return res.json();
    }
  });

  if(isPending) return <div className="animate-pulse">Loading { name } ...</div>
  if(isError) return <div>Error loading { name }</div>

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-5 xl:col-span-2"
      key={name}>
        <img src={data.sprites.front_default} alt={name} className="w-12 h-12" />
        <div className="px-6 py-4">
          {name}
        </div>
    </div>
  )
}