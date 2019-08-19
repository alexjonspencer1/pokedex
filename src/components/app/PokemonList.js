import Component from '../Component.js';
import PokemonItem from './PokemonItem.js';

class PokemonList extends Component {
    
    onRender(dom) {
        const pokemons = this.props.pokemons;
        // console.log(pokemons);
        
        if(pokemons.results) {

            pokemons.results.forEach(element => { 
                const props = { pokemons: element };
                // console.log(props);
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

// Object.keys(pokemon).forEach(function(key) { 
//     const props = { pokemon: key };