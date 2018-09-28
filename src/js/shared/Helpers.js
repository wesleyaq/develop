export function js(el) { return '[data-js=' + el + ']'; }
export function $js(el) { return document.querySelector(js(el)); }