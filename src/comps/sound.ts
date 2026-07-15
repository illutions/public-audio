import { Comp } from 'illutions';
import css from './style/sound.css?inline';
import html from './html/sound.html?raw';

export class Sound extends Comp {
  private isActivated: boolean = false;
  private button: HTMLButtonElement | null = null;

  private buttonClicked = (event: MouseEvent) => {
    event.stopPropagation();

    if (this.isActivated) return;

    this.isActivated = true;
    this.events.send({ type: 'AUDIO_ON' });
    if (this.button) this.button.hidden = true;
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = html;
    this.button = this.shadowRoot.querySelector('button');

    const style = document.createElement('style');
    style.textContent = css;

    this.shadowRoot.prepend(style);

    if (this.isActivated && this.button) {
      this.button.hidden = true;
    } else {
      this.button?.addEventListener('click', this.buttonClicked, { once: true });
    }
  }

  disconnectedCallback() {
    this.button?.removeEventListener('click', this.buttonClicked);
  }
}
