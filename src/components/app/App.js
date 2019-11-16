import Component from '../Component.js';
import Header from '../app/Header.js';
import PokemonList from './PokemonList.js';
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
    
        const pagingSection = dom.querySelector('.paging');
        const paging = new Paging();
        const pagingDOM = paging.renderDOM();
        pagingSection.appendChild(pagingDOM);

        const pokeCardSection = dom.querySelector('.render-cards-here');
        const pokemonList = new PokemonList({ pokemons: [] });
        const pokemonListDOM = pokemonList.renderDOM();
        pokeCardSection.appendChild(pokemonListDOM);

        function loadPokemon() {
            const options = hashStorage.get();
            getPokedexAPI(options)
                .then(data => {
                    const pokepoke = data.results;
                    const totalCount = data.results.count;

                    pokemonList.update({ pokemons: pokepoke });
                    paging.update({
                        totalCount: totalCount,
                        currentPage: +options.page
                    });
                });
        }

        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });
    }
    
    renderHTML() {
        return /*html*/`
            <div>
                <main class="main-section">
                    <section class="sort-and-search-here">
                    </section>
                    <section class="paging">
                    </section>
                    <section class="render-cards-here">
                    </section>
                </main>
            </div>
        `;
    }
}

export default App;