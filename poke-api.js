const pokeapi = {}

function pokeapiTopokemon(pokemonDetails){

    const pokemon = new Pokemon()
    pokemon.name = pokemonDetails.name
    pokemon.number = pokemonDetails.id

    const types = pokemonDetails.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type
    /* pokemon.photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.gif` */
    pokemon.photo = pokemonDetails.sprites.versions['generation-v']['black-white'].animated.front_default
    /* pokemon.photo = pokemonDetails.sprites.other.dream_world.front_default */

    return pokemon
}

pokeapi.getpokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
    .then(pokeapiTopokemon)
}

pokeapi.getPokemons = (offset=0, limit=10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map((pokeapi.getpokemonDetail)))
        .then((pokemonDetails) => Promise.all(pokemonDetails))
        .then((pokemonDetails) => pokemonDetails)



        .catch((error) => console.error(error))

}

Promise.all([

]).then((results) => {
    console.log(results)
})