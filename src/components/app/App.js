import Component from '../Component.js';
import Header from '../app/Header.js';
import SortAndSearch from './SortAndSearch.js';
import PokemonList from './PokemonList.js';
import pokemon from '../../../data/pokemon-data-set.js';

class App extends Component {
    
    onRender(dom) {
        const header = new Header();
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const sortAndSearch = new SortAndSearch();
        const sortAndSearchDOM = sortAndSearch.renderDOM();
        dom.appendChild(sortAndSearchDOM);

        const props = {
            pokemon: pokemon
        };

        const pokemonList = new PokemonList(props);
        const pokemonListDOM = pokemonList.renderDOM();

        const pokeCardSection = dom.querySelector('.main-section');
        pokeCardSection.appendChild(pokemonListDOM);

    }
    
    renderHTML() {
        return /*html*/`
            <div>
            <section class="section-for-grid">
            </section>
                <main class="main-section">
                </main>
            </div>
        `;
    }
}

export default App;