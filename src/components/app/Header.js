import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <img class="page-logo" src="assets/pokeball.png" alt="pokeball-logo">
                <h1>Pokedex!</h1>
            </header>
        `;
    }
}

export default Header;