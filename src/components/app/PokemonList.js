import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {
    
    onRender(dom) {
        const pokemon = this.props.pokemon;
        console.log(pokemon);

        pokemon.forEach(pokemon => { 
            const props = { pokemon: pokemon };
            console.log(props);
            const pokemonItemVariable = new PokemonItem(props);
            console.log(pokemonItemVariable);
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