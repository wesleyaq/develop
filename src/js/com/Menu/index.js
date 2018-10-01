import { $js, w } from '../../shared/Helpers';
import './menu.scss';
import items from './items';

export default class Menu {
    navItemHtml(item) {
        const active = (item.link === w.location.pathname ? 'menu_link-active' : '');
        return `
        <li class="menu_item">
            <a href="${item.link}" class="menu_link ${active}">${item.title}</a>
        </li>`;
    }

    render(sel) {
        const $sel = $js(sel);
        const clas = ($sel && $sel.getAttribute('data-class')? $sel.getAttribute('data-class'): '');

        let html = `
        <nav class="menu ${clas}">
            <ul class="menu_items">
                ${items.map(it => this.navItemHtml(it)).join('')}
            </ul>
        </nav>`;
        if($sel) { $sel.innerHTML = html; }
    }
}