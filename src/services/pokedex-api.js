
const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export function getPokedexAPI(options) {

    const page = options.page || 1;
    const search = options.search;

    const url = `${URL}?page=${page || 1}&search=${search || ''}`;

    return fetch(url)
        .then(response => response.json())

        .then(data => {
            return {
                count: 100 * page,
                data: data
            };
        });
}


// .then(data => {
//     const pokemonList = new PokemonList({ pokemon: data });
//     const pokemonListDOM = pokemonList.renderDOM();
//     const pokemonSelection = dom.querySelector('.render-cards-here');
//     pokemonSelection.appendChild(pokemonListDOM);