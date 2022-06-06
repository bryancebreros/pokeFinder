import {createContext, useReducer} from 'react'
import pokedexReducer from './PokedexReducer'

const PokedexContext = createContext()

export const PokedexProvider = ({children}) => {
    const initialState = {
        pokemons: [],
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
