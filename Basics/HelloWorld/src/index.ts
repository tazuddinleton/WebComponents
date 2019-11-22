class HelloWorld extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'closed'});
        const rootEl = document.createElement('div');
        rootEl.innerHTML = 'Hello World!';
        shadow.appendChild(rootEl);
        
    }
}
window.customElements.define('hello-world', HelloWorld);