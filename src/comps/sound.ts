import { Comp } from 'illutions';
import css from './style/sound.css?inline';
import html from './html/sound.html?raw';

export class Sound extends Comp {
  // Track activation so audio can only be started once
  private isActivated: boolean = false;
  private isVisible: boolean = false;
  private button: HTMLButtonElement | null = null;

  // Forward the required user gesture to the app state machine
  private buttonClicked = (event: MouseEvent) => {
    event.stopPropagation();

    if (this.isActivated) return;

    this.isActivated = true;
    this.events.send({ type: 'BUTTON_CLICKED' });
    if (this.button) this.button.hidden = true;
  };

  constructor() {
    super();
    // Isolate the component markup and styles from the host page
    this.attachShadow({ mode: 'open' });
  }

  // Reveal the activation button after the progress bar has finished hiding
  public showButton(): void {
    this.isVisible = true;

    if (!this.isActivated && this.button) {
      this.button.hidden = false;
    }
  }

  // Render the activation button when the component enters the page
  connectedCallback() {
    if (!this.shadowRoot) return;

    this.shadowRoot.innerHTML = html;
    this.button = this.shadowRoot.querySelector('button');

    const style = document.createElement('style');
    style.textContent = css;

    this.shadowRoot.prepend(style);

    if (this.button) {
      this.button.hidden = this.isActivated || !this.isVisible;
    }

    if (!this.isActivated) {
      this.button?.addEventListener('click', this.buttonClicked, { once: true });
    }
  }

  // Remove the event listener when the component leaves the page
  disconnectedCallback() {
    this.button?.removeEventListener('click', this.buttonClicked);
  }
}
