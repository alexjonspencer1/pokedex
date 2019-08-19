import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {
    
    onRender(dom) {
        const pokemons = this.props.pokemons;
        
        if(pokemons.results) {

            pokemons.results.forEach(element => { 
                const props = { pokemons: element };
                const pokemonItemVariable = new PokemonItem(props);
                const pokemonItemDOM = pokemonItemVariable.renderDOM();
                dom.appendChild(pokemonItemDOM);
            });
        }
    }
    
    renderHTML() {
        return /*html*/`
            <ul class="wrapper">
            </ul>
        `;
    }
}

export default PokemonList;