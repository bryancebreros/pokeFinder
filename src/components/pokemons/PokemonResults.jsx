import {useContext} from 'react'
import Spinner from '../layouts/Spinner'
import PokemonItem from '../pokemons/PokemonItem'
import PokedexContext from '../../context/pokedex/PokedexContext'


function PokemonResults() {
    const {pokemons, loading, dispatch} = useContext(PokedexContext)
    
    // const handleClick = async () => {
    //   dispatch({type: 'SET_LOADING'})
    //   const pokemons = await getGalar()
    //   dispatch({type: 'GET_POKEMONS', payload: pokemons})
      
    // }
    if(!loading){
      return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {pokemons.map((pokemon) => (
            <PokemonItem key={pokemon.url} pokemon={pokemon} />
          ))}
          {/* <button className='btn btn-lg btn-success btn-wide' onClick={handleClick}>Show More <svg className="h-6 w-6 fill-current md:h-8 md:w-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg></button> */}
        </div>

      )
          
    } else {
      return <Spinner />
    }
  
}

export default PokemonResults