import Component from '../Component.js';
import Header from '../app/Header.js';
import PokemonList from './PokemonList.js';
// import SortAndSearch from './SortAndSearch.js';
import Paging from '../options/Paging.js';
import { getPokedexAPI } from '../../services/pokedex-api.js';
import hashStorage from '../../services/hash-storage.js';
import Search from '../options/Search.js';

class App extends Component {
    
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const sortAndSearchSection = dom.querySelector('.sort-and-search-here');
        const search = new Search();
        sortAndSearchSection.appendChild(search.renderDOM());
        
        // const sortAndSearch = new SortAndSearch();
        // const sortAndSearchDOM = sortAndSearch.renderDOM();
        // sortAndSearchSection.appendChild(sortAndSearchDOM);

        const pokeCardSection = dom.querySelector('.render-cards-here');
        const paging = new Paging();
        const pagingDOM = paging.renderDOM();
        pokeCardSection.appendChild(pagingDOM);

        const pokemonList = new PokemonList({ pokemon: [] });
        const pokemonListDOM = pokemonList.renderDOM();
        pokeCardSection.appendChild(pokemonListDOM);

        function loadCards() {
            const options = hashStorage.get();
            getPokedexAPI(options)
                .then(data => {
                    const pokemon = data.results;
                    // console.log(pokemon);
                    const totalCount = data.count;

                    pokemonList.update({ pokemon: pokemon });
                    paging.update({
                        totalCount: totalCount,
                        currentPage: +options.page
                    });
                });
        }

        loadCards();

        window.addEventListener('hashchange', () => {
            loadCards();
        });
    }
    
    renderHTML() {
        return /*html*/`
            <div>
                <main class="main-section">
                <section class="sort-and-search-here">
                </section>
                <section class="render-cards-here">
                </section>
                </main>
            </div>
        `;
    }
}

export default App;


 // const pokemonListDOM = pokemonList.renderDOM();
        // const pokemonSelection = dom.querySelector('.render-cards-here');
        // pokemonSelection.appendChild(pokemonListDOM);

            // const pokemonList = new PokemonList({ pokemon: data });
//         const pokemonListDOM = pokemonList.renderDOM();
//         const pokemonSelection = dom.querySelector('.render-cards-here');
//         pokemonSelection.appendChild(pokemonListDOM);
//     });

// const url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         const pokemonList = new PokemonList({ pokemon: data });
//         const pokemonListDOM = pokemonList.renderDOM();
//         const pokemonSelection = dom.querySelector('.render-cards-here');
//         pokemonSelection.appendChild(pokemonListDOM);
//     });

// function loadPokemon() {
    //             const options = hashStorage.get();
    //             getPokemon(options)
    //                 .then(data => {
    //                     const pokeList = new PokeList({ pokemons: data });
    //                     const pokeListDOM = pokeList.renderDOM();
    //                     const pokeCards = dom.querySelector('#pokecards');
    //                     pokeCards.appendChild(pokeListDOM);
    //                     const totalCount = data.count;
    //                     paging.update({
    //                         totalCount: totalCount,
    //                         currentPage: +options.page
    //                     });
    //                 });
    //         }
    //         loadPokemon();