// import CONFIG from '../config';
import 'whatwg-fetch';
const BaseURL = 'http://jsonplaceholder.typicode.com/';

// let fetchAsync = async (url) => await (await fetch(url)).json();

/*async function fetchAsync(url) {
    try {
        let resp = await fetch(url);
        return await resp.json();
    
    } catch(e) {
        console.log('Error!', e);
    }
    // let data = await (await (fetch(url)
    //     .then(res => {
    //         return res.json();
    //     })
    //     .catch(err => {
    //         console.log('Error: ', err);
    //     })
    // ));
    // return data;
}*/

function cFetch(url, opts = { method: 'GET' }) {
    console.log(typeof fetch, typeof Promise);
    return new Promise((resolve, reject) => {
        fetch(url, opts)
        .then((resp) => resp.json())
        .then((resp) => resolve(resp))
        .catch((error) => reject(error));
    });
}

/* export async function Get(serv) {
    return await fetchAsync(`${BaseURL}${serv}`);
}; */

export function Get(serv) {
  return cFetch(`${BaseURL}${serv}`);
};

export function GetById(serv, id) {
    return cFetch(`${BaseURL}${serv}/${id}`);
};

export function Post(serv, data) {
  return new Promise((resolve, reject) => {
    fetch(`${BaseURL}${serv}`, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then((resp) => resp.json())
    .then((resp) => {
      resolve(resp);
    })
    .catch((error) => {
      reject(error);
    });
  });
};