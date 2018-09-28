import { $js } from '../../shared/Helpers';
import './menu.scss';
import items from './items';

export default class Menu {
    constructor() {
        // this.menu = { items }
    }

    getItem(item) {
        return `
        <li class="menu_item">
            <a href="${item.link}" class="menu_link">${item.title}</a>
        </li>`;
    }

    render(sel) {
        let html = `
        <nav class="menu">
            <ul class="menu_items container">
                ${items.map(it => this.getItem(it)).join('')}
            </ul>
        </nav>`;
        const $sel = $js(sel);
        if($sel) { $sel.innerHTML = html; }
    }
}