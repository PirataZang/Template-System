import axios from "axios"

// Exemplo de Como utilizar o axios para consumir a PokeAPI

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
})

export async function getPokemons(limit = 20, offset = 0) {
    const { data } = await api.get(`/pokemon?limit=${limit}&offset=${offset}`)
    return data.results
}

export async function getPokemonById(id) {
    const { data } = await api.get(`/pokemon/${id}`)
    return data
}