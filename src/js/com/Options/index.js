import { $js, w } from '../../shared/Helpers';
import './options.scss';
import items from './items';

export default class Options {
    navItemHtml(item) {
        const active = (item.link === w.location.pathname ? 'opt{s_link-active' : '');
        return `
        <li class="opts_item">
            <a href="${item.link}" class="opts_link ${active}">${item.title}</a>
        </li>`;
    }

    render(sel) {
        const $sel = $js(sel);
        const clas = ($sel && $sel.getAttribute('data-class')? $sel.getAttribute('data-class'): '');

        let html = `
        <nav class="opts ${clas}">
            <ul class="opts_items">
                ${items.map(it => this.navItemHtml(it)).join('')}
            </ul>
        </nav>`;
        
        if($sel) { $sel.innerHTML = html; }
    }
}