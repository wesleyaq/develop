import "@babel/polyfill";
import '../scss/main.scss';
import Users from './com/Users/Users';
import Menu from './com/Menu';
// import style from "../scss/main.scss";

document.addEventListener("DOMContentLoaded", function() {
    const menu = new Menu();
    menu.render('menu');

    const users = new Users();
    users.listRender('users');
});