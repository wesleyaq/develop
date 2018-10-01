// import "@babel/polyfill";
import { c, isPage } from './shared/Helpers';
import '../scss/main.scss';
import Menu from './com/Menu';
import Options from './com/Options';
import SearchAutoComplete from './com/SearchAutoComplete';

var i2b = i2b || {};

document.addEventListener("DOMContentLoaded", function() {
    const menu = new Menu();
    menu.render('menu');

    if(isPage('documentacion')) {
        const opts = new Options();
        opts.render('opts');

        const searchAC = new SearchAutoComplete();
        searchAC.render('sec');
    }
});