import { type AnyStateMachine, setup } from 'xstate';
import type { App, ProgressBarHiddenEvent, SceneReadyEvent } from "illutions";

import { classes } from './classes';

// Define event-driven runtime behavior with a state machine
export function createStateMachine(app: App<typeof classes>): AnyStateMachine {
  const { audio, comps, objs3D, orbitCtrls } = app;

  return setup({
    types: {} as {
      events: ProgressBarHiddenEvent | SceneReadyEvent | { type: 'BUTTON_CLICKED' };
    },
    actions: {
      // Make the scene camera the listener for positional audio
      audioSetListener: () => audio.setListener({ object: objs3D.Camera }),
      // Load and play each instrument as soon as the scene is ready
      audioLoadAndPlay: () => {
        audio.loadAndPlay({name: 'Guitar', url: 'scene/guitar.wav', object: 'Guitar', volume: 1.5, loop: true, fade: 1});
        audio.loadAndPlay({name: 'Drums', url: 'scene/drums.wav', object: 'Drums', volume: 5, loop: true, fade: 1});
        audio.loadAndPlay({name: 'Saxophone', url: 'scene/saxophone.wav', object: 'Saxophone', volume: 0.8, loop: true, fade: 1});
      },
      // Enable camera interaction
      enableOrbitCtrls: () => orbitCtrls.enable(),
      // Reveal the button after the progress bar is gone
      showSoundButton: () => comps.Sound[0]?.showButton(),
    },
  }).createMachine({
    id: 'App',
    initial: 'Start',
    states: {
      Start: {
        on: {
          SCENE_READY: { actions: ['audioSetListener'] },
        },
      }
    },
    on: {
      PROGRESSBAR_HIDDEN: {
        actions: ['showSoundButton'],
      },
      BUTTON_CLICKED: {
        actions: ['audioLoadAndPlay', 'enableOrbitCtrls'],
      },
    },
  });
}
