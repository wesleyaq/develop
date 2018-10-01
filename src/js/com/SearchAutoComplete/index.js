import { js, $js, w, c } from '../../shared/Helpers';
import './searchautocomplete.scss';
import items from './items';

export default class SearchAutoComplete {
    constructor() {
        this.onSearch = this.onSearch.bind(this);
        this.$obj = null;
        this.$input = null;
    }

    renderItems(text) {
        const $items = this.$obj.querySelector(js('sacItems'));
        const fItems = items.filter(it => it.title.toLowerCase().indexOf(text.toLowerCase()) > -1);
        const itemHtml = (it) => `<li class="sac_item">${it.title}</li>`;

        let html = `
        <ul class="sac_items" data-js="sacItems">
            ${fItems.map(it => itemHtml(it)).join('')}
        </ul>`;

        if($items) { $items.remove(); }
        if(this.$input) { this.$input.insertAdjacentHTML("afterend", html); }
    }

    onSearch(e) {
        if(e.target.localName === 'input') {
            if(e.target.value.trim()) {
                this.renderItems(e.target.value)
            }
        }
    }

    render(sel) {
        this.$obj = $js(sel);
        const clas = (this.$obj && this.$obj.getAttribute('data-class')? this.$obj.getAttribute('data-class'): '');

        let html = `
        <form class="sac ${clas}" autocomplete="off">
            <input type="text" name="s" class="sac_input input" data-js="sacInput" placeholder="Busqueda..." autocomplete="off">
        </form`;
        
        if(this.$obj) {
            this.$obj.innerHTML = html;
            this.$input = this.$obj.querySelector(js('sacInput'));

            if(this.$input) { this.$input.addEventListener('keyup', this.onSearch); }
        }
    }
}