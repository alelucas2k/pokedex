const pokemonList = document.getElementById('pokemonList')
const loadMore = document.getElementById('loadMore')

//qtd de pokemons da primeira geração
const maxRecords = 1080
//parametros de controle da quantidade de pokemons puxados na api
const limit = 10
let offset = 0


function loadmoreitens(offset, limit){

    pokeapi.getPokemons(offset, limit).then((pokemons = []) => (
        // concatenando e transformando a lista de pokemons em html
        pokemonList.innerHTML += pokemons.map((pokemon) => ` 
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number} </span>
                    <span class="name"> ${pokemon.name}</span>
                    
                    <div class="details">
                            <ol class="types">
                                ${pokemon.types.map((type) => `<li class="type ${type}" > ${type}</li>`).join(' ')}
                            </ol>
        
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
        `).join('')
    ))
}

loadmoreitens(offset, limit)

// função p esconder o botão de more quando chegar no limit pre-definido
loadMore.addEventListener('click', () => {
    offset += limit
    Recordwnxtpage = offset + limit 

    if(Recordwnxtpage >= maxRecords){
        newLimit = (maxRecords - offset)
        loadmoreitens(offset, newLimit)

        loadMore.parentElement.removeChild(loadMore)
    } else {
        loadmoreitens(offset, limit)
    }
})
