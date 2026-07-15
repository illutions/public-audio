import { App } from 'illutions';

import { cfg } from './cfg';
import { classes } from './classes';
import { createStateMachine } from './stm';

document.addEventListener('DOMContentLoaded', () => {
  App.run(cfg, classes, createStateMachine);
}); 