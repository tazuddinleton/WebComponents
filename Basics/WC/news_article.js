

export class NewsArticle extends HTMLElement{
    constructor(){
        super();
        
        this.root = this.attachShadow({mode: 'open'});
    }

    

    set article(article){

        this.root.innerHTML = `
            <style>
                a{
                    text-decoration:none;                    
                }
                img{
                    width: 100%;
                    max-height: 200px
                }
                p{
                    color: #999;
                    background: #eee;
                    padding: 2px;
                }
                h2{
                    background: #ddd;
                    color: red;
                    padding: 4px;
                }
                h2:hover{
                    
                }
            </style>
            <a href="${article.url}">

            <h2>${article.title}</h2>
            <img src="${article.urlToImage || ''}" />
            <p>${article.description}</p>
            </a>
        `;
    }
}

customElements.define('news-article', NewsArticle);