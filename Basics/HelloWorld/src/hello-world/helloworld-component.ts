import template from './template.html';

export class HelloWorld extends HTMLElement {
  private buttonEl: HTMLElement | null = null;
  private value = 0;
  private valueEl: HTMLElement | null = null;
  constructor() {
    super();
    const templateEl = document.createElement('template');
    templateEl.innerHTML = template;

    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.appendChild(templateEl.content.cloneNode(true));

    this.valueEl = shadow.getElementById('root_value');
    this.buttonEl = shadow.getElementById('root_button');

    if (this.valueEl === null || this.buttonEl === null) {
      throw Error('The template of ' + this.tagName + ' got some missing elements.');
    }

    this.valueEl.textContent = this.value.toString();
    this.buttonEl.addEventListener('click', this.handleClick);
  }

  private handleClick = () => {
    if (!this.valueEl) {
      return;
    }
    this.value += 1;
    this.valueEl.textContent = this.value.toString();
  };
}

