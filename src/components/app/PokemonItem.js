import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const pokemons = this.props.pokemons;
        
        return /*html*/`
            <li>
                <h2>${pokemons.pokemon}</h2>
                    <div class="card-flex">
                    <img class="card-image" src="${pokemons.url_image}" alt="${pokemons.pokemon}">
                        <div class="text-flex">
                            <h3>Info:</h3>
                            <p style="text-transform: capitalize; color: ${pokemons.color_1}">Type 1: ${pokemons.type_1}</p>
                            <p style="text-transform: capitalize; color: ${pokemons.color_2}">Type 2: ${pokemons.type_2}</p>
                            <p>Attack: ${pokemons.attack}</p>
                            <p>Defense: ${pokemons.defense}</p>
                        </div>
                    </div>
            </li>
            
        `;
    }
}

export default PokemonItem;