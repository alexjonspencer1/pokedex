import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {
    
    onRender(dom) {
        const pokemon = this.props.pokemon;

        pokemon.results.forEach(pokemon => {
            const props = { pokemon: pokemon };
            const pokemonItemVariable = new PokemonItem(props);
            const pokemonItemDOM = pokemonItemVariable.renderDOM();
            dom.appendChild(pokemonItemDOM);
        });
    }
    
    renderHTML() {
        return /*html*/`
            <ul class="wrapper">
            </ul>
        `;
    }
}

export default PokemonList;