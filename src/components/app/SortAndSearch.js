import Component from '../Component.js';

class SortAndSearch extends Component {
    renderHTML() {
        return /*html*/`
            <section class="sort-and-search-section">
                Search: <input class="search-bar"> <br>
                Sort: <select class="sort">
                    <option selected disabled>Please select your option!</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                </select>
            </section>
        `;
    }
}

export default SortAndSearch;