import axios from 'axios'

const pokedex = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',

})
export const searchPokemon = async () => {
    const params = new URLSearchParams({
        offset: 0,
        limit: 300
    })
    const response = await pokedex.get(`pokemon?${params}`)
    
    return response.data.results
    
}

export const getPokedex = async () => {
    const params = new URLSearchParams({
        offset: 0,
        limit: 300
    })
    const response = await pokedex.get(`pokemon?${params}`)
    
    return response.data.results
}
