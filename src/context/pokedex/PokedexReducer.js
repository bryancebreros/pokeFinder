const pokedexReducer = (state, action) => {
    switch(action.type) {
        case 'GET_POKEMONS':
            return{
                ...state,
                pokemons: action.payload,
                loading: false,
            }
        case 'SET_LOADING':
            return{
                ...state,
                loading: true,
            }
        case 'CLEAR_POKEMONS':
            return{
                ...state,
                pokemons: [],
            }
        case 'SHOW_POKEMON':
            return{
                ...state,
                pokemon: action.payload.pokemon,
                loading: false

            }
        
        default:
            return state
    }
}

export default pokedexReducer