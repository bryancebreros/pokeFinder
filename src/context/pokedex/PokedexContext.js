import {createContext, useReducer} from 'react'
import pokedexReducer from './PokedexReducer'
import { getPokedex } from './PokedexActions'
const PokedexContext = createContext()

export const PokedexProvider = ({children}) => {
    
         
    const initialState = {
        pokemons: [],
        pokemon:{},
        loading: false,

    }
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
