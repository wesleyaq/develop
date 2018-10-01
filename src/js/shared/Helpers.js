export function js(el) { return '[data-js="' + el + '"]'; }
export function $js(el) { return document.querySelector(js(el)); }

const ENTER_KEY = 13,
  c = console.log,
  d = document,
  w = window,
  j = JSON,
  ls = localStorage

export {
  ENTER_KEY,
  c,
  d,
  w,
  j,
  ls
}

export function isPage(page) {
  return d.querySelector('body').getAttribute('data-page') === page;
}