import axios from 'axios'
function capName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
const pokedex = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})
export const searchPokemon = async () => {
    const params = new URLSearchParams({
        offset: 0,
        limit: 50
    })
    const response = await pokedex.get(`pokemon?${params}`)
    
    return response.data.results
    
}
export const getPokedex = async () => {
    const params = new URLSearchParams({
        offset: 0,
        limit: 12
    })
    const response = await pokedex.get(`pokemon?${params}`)
    return response.data.results
}

export const showPokemon = async (name) => {
    const pokemon = await pokedex.get(`pokemon/${name}`)
    pokemon.data.name = capName(name)
    return {pokemon: pokemon.data}
}
