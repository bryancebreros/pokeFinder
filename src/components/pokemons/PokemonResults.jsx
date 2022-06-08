import {useContext} from 'react'
import Spinner from '../layouts/Spinner'
import PokemonItem from '../pokemons/PokemonItem'
import PokedexContext from '../../context/pokedex/PokedexContext'
function PokemonResults() {
    const {pokemons, loading} = useContext(PokedexContext)

    if(!loading){
      return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {pokemons.map((pokemon) => (
            <PokemonItem  pokemon={pokemon} />
          ))}
        </div>

      )
          
    } else {
      return <Spinner />
    }
  
}

export default PokemonResults