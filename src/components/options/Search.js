import Component from '../Component.js';
import hashStorage from '../../services/hash-storage.js';

class Search extends Component {

    onRender(form) {
        form.addEventListener('sumbit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            const search = formData.get('search');

            hashStorage.set({
                search: search,
                page: 1
            });
        });
        const input = form.querySelector('input');

        window.addEventListener('hashchange', () => {
            input.value = hashStorage.get().search || '';
        });
    }

    renderHTML() {
        const search = hashStorage.get().search || '';

        return /*html*/`
            <form class="sort-and-search-section">
                <div class="search-bar-flex">
                    Search: <input class="search-bar" name="search" value="${search}"><br>
                    <button class="search-button">Search</button>
                </div><br>
                Sort: <select class="sort">
                        <option selected disabled>Please select your option!</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                        <option>Option 5</option>
                        </select>
            </form>
            
        `;
    }
}

export default Search;