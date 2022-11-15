import { useEffect, useState } from "react";
import axios from "axios";

export default function usePokemonSearch(query, pokemonNumber){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [pokemons, setPokemons] = useState([])
    const [hasMore, setHasMore] = useState(false)
    

    useEffect(() => {
        setPokemons([])
    },[query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon-species/',
            params: {q: query, number: pokemonNumber},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setPokemons(prevPokemons => {
                return [...new Set([...prevPokemons, res.data.map(p => p.name)])]
            })
            setHasMore(20 > 906)
            setLoading(false)

        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
        })
        return () => cancel()
    }, [query, pokemonNumber])

    return {loading, error, pokemons, hasMore}
}