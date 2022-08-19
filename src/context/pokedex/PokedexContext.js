import {createContext, useReducer, useEffect} from 'react'
import pokedexReducer from './PokedexReducer'
import { getPokedex } from './PokedexActions'

const PokedexContext = createContext()

export const PokedexProvider = ({children}) => {
    const initialState = {
        pokemons: [],
        pokemon:{},
        loading: false,

    }
    useEffect(() => {
        const getPokemon = async () => {
          dispatch({type: 'SET_LOADING'})
          const pokemons = await getPokedex()
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
