import {createContext, useReducer, useEffect} from 'react'
import pokedexReducer from './PokedexReducer'
import { getKanto } from './PokedexActions'

const PokedexContext = createContext()

export const PokedexProvider = ({children}) => {
    const initialState = {
        pokemons: [],
        pokemon:{},
        // forms: [],
        // formas: [],
        abilities: [],
        loading: false,

    }
    useEffect(() => {
        const getPokemon = async () => {
          dispatch({type: 'SET_LOADING'})
          const pokemons = await getKanto()
          dispatch({type: 'GET_POKEMONS', payload: pokemons})
        }
        getPokemon()
    }, [])
    
    const [state, dispatch] = useReducer(pokedexReducer, initialState)
    return (
        <PokedexContext.Provider
            value={{
                ...state, 
                dispatch
            }}
        >
            {children}
        </PokedexContext.Provider>
    )
}
export default PokedexContext
