import Component from '../Component.js';

class PokemonItem extends Component {
    renderHTML() {
        const pokemon = this.props.pokemon;

        return /*html*/`
            <li style="border: 4px solid ${pokemon.color_1};">
                <h2>${pokemon.pokemon}</h2>
                    <div class="card-flex">
                    <img class="card-image" src="${pokemon.url_image}" alt="${pokemon.pokemon}">
                        <div class="text-flex">
                            <h3>Info:</h3>
                            <p>Type 1: ${pokemon.type_1}</p>
                            <p>Type 2: ${pokemon.type_2}</p>
                            <p>Attack: ${pokemon.attack}</p>
                            <p>Defense: ${pokemon.defense}</p>
                        </div>
                    </div>
            </li>
            
        `;
    }
}

export default PokemonItem;