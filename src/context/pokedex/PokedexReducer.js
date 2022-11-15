const pokedexReducer = (state, action) => {
    // console.log(action.type === "GET_ID" ? action.payload.idForm : "");
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
                loading: false,

            }
        case 'GET_ABILITIES':
            return{
                ...state,
                abilities: [state.abilities, action.payload],
                loading: false,
            }
        // case 'GET_FORMS':
        //     return{
        //         ...state,
        //         forms: action.payload.forms,
        //         loading: false,
        //     }
        // case 'GET_FORM':
        //     return{
        //         ...state,
        //         formas: [...state.forms, action.payload],
        //         loading: false,
        //     }
        default:
            return state
    }
}

export default pokedexReducer