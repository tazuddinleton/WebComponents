import {HelloWorld} from './hello-world/helloworld-component';


const tmpl = `
    <style>
        h1{
            color: red;
            font-size: 2em;
        }
        .wall{
            background: lightgray;
            padding: .2em;
            text-align: center;
        }
    </style>
    <div class="wall">
        <h1>Web Components App</h1>            
    </div>
`

class AppComponent extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const el = document.createElement('div');
        el.innerHTML = tmpl;
        shadow.appendChild(el);        
    }
}
window.customElements.define('app-component', AppComponent);
