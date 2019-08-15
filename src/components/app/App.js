import Component from '../Component.js';
import Header from '../app/Header.js';
import SortAndSearch from './SortAndSearch.js';
import PokemonList from './PokemonList.js';
// import pokemon from '../../../data/pokemon-data-set.js';

class App extends Component {
    
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const sortAndSearch = new SortAndSearch();
        const sortAndSearchDOM = sortAndSearch.renderDOM();

        const sortAndSearchSection = dom.querySelector('.sort-and-search-here');
        sortAndSearchSection.appendChild(sortAndSearchDOM);

        const url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const pokemonList = new PokemonList({ pokemon: data });
                const pokemonListDOM = pokemonList.renderDOM();
                const pokemonSelection = dom.querySelector('.render-cards-here');
                pokemonSelection.appendChild(pokemonListDOM);
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