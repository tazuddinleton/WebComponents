import template from './login.html';

export class Login extends HTMLElement{
    private templateEl: HTMLTemplateElement;
    constructor(){
        super();

        this.templateEl = document.createElement('template');
        this.templateEl.innerHTML = template;

        const shadow = this.attachShadow({ mode: 'closed' });
        shadow.appendChild(this.templateEl.content.cloneNode(true));


    }
}

