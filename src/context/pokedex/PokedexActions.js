import axios from 'axios'

const pokedex = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',

})
export const searchPokemon = async (text) => {
    // NO NEED FOR PARAMS HERE
    // const params = new URLSearchParams({
    //     q: text
    // })
    const response = await pokedex.get(`/pokemon/${text}`)
    return response.data.items
}

// export const getPokemonInfo = async ()
