import PropTypes from 'prop-types'
import { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { showPokemon } from '../../context/pokedex/PokedexActions'
import PokedexContext from '../../context/pokedex/PokedexContext'


function PokemonItem({ pokemon: {name, id}}){
    // const {pokemon, dispatch} = useContext(PokedexContext)

    // const params = useParams()
    // useEffect(() =>{
    //     dispatch({type: 'SET_LOADING'})
    //      const getPokemonData = async() => {
    //        const pokemonData = await showPokemon(params.name)
    //        dispatch({type: 'SHOW_POKEMON', payload: pokemonData})
  
    //      }
    //      getPokemonData()
    //   }, [dispatch, params.name])
    //   const {
    //     name,
    //     official_artwork
    //   } = pokemon
    return (
        <div className='card shadow-md compact side bg-base-100'>
        <div className="flex-row items-center space-x-4 card-body">
        {/* <div>
            <div className="avatar">
                <div className="rounded-full shadow w-14 h-14">
                    <img src={} alt={name} />
                </div>
            </div>
        </div> */}
        <div>
            <h2 className='card-title'>{name}</h2>
            <h2>{id}</h2>
            <Link className='text-base-content text-opacity-40' to={`/pokemon/${name}`}>Visit Page </Link>
        </div>
        </div>
        </div>
    )

}

PokemonItem.propTypes = {
    pokemon: PropTypes.object.isRequired,
}

export default PokemonItem