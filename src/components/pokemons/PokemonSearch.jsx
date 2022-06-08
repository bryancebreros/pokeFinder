import {useState, useContext} from 'react'
import PokedexContext from '../../context/pokedex/PokedexContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchPokemon } from '../../context/pokedex/PokedexActions'

function PokemonSearch() {
    const [text, setText] = useState('')
    const {pokemons, dispatch}  = useContext(PokedexContext)
    const { setAlert} =useContext(AlertContext)
    const handleChange = (e) => setText(e.target.value)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (text === ''){
            setAlert('Please enter the Pokémon name OR number', 'error')
        } else {
            dispatch({type: 'SET_LOADING'})
            const pokemons = await searchPokemon(text)
            dispatch({type: 'GET_POKEMONS', payload: pokemons})
            setText('')
        }
    }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input value={text} onChange={handleChange} placeholder="Search" type="text" className="w-full pr-40 bg-gray-100 input input-lg text-black" />
                            <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                Go!
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {pokemons.length > 0 && (
                <div>
                    <button onClick={() => dispatch({type: 'CLEAR_POKEMONS'})} type="submit" className="btn btn-ghost btn-lg">
                        Clear
                    </button>
                </div>
            )}
        </div>
  )
}

export default PokemonSearch