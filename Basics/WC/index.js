import {headLines} from './news_api.js';
import './news_article.js';
const loading = document.getElementById('loading');

let loading_interval = setInterval(()=> {
    loading.innerHTML += '.';
}, 1);

window.addEventListener('load', () => {
    fetchNews();
});


async function fetchNews(){
    const res = await fetch(headLines);
 
    const json = await res.json();

 
    const main = document.querySelector('main');

    json.articles.forEach(article => {
        clearInterval(loading_interval);
        loading.style= 'visibility: hidden';
        const el = document.createElement('news-article');
        el.article = article;
        main.appendChild(el);        
    });

    window.articles = json.articles;
}