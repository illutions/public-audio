import { type AnyStateMachine, setup } from 'xstate';

import type { ProgressBarHiddenEvent, SceneReadyEvent } from "illutions";

import type { MyApp } from './index';


// Define event-driven runtime behavior with a state machine
export const stm = (app: MyApp): AnyStateMachine => {
  const { comps, audio, orbitCtrls } = app;

  return setup({
    types: {} as {
      events: ProgressBarHiddenEvent | SceneReadyEvent | { type: 'Button_Clicked' };
    },
    actions: {
      // Make the scene camera the listener for positional audio
      audioSetListener: () => audio.setListener({ obj: comps.scene.cam }),
      // Load and play each instrument as soon as the scene is ready
      audioLoadAndPlay: () => {
        comps.sound.guitar.loadAndStart();
        comps.sound.drums.loadAndStart();
        comps.sound.saxophone.loadAndStart();
      },
      // Enable camera interaction
      enableOrbitCtrls: () => orbitCtrls.enable(),
      // Reveal the button after the progress bar is gone
      showSoundButton: () => comps.web.sound[0]?.showButton(),
    },
  }).createMachine({
    id: 'App',
    initial: 'INIT',
    states: {
      INIT: {
        on: {
          Scene_Ready: { actions: ['audioSetListener'] },
        },
      }
    },
    on: {
      ProgressBar_Hidden: {
        actions: ['showSoundButton'],
      },
      Button_Clicked: {
        actions: ['audioLoadAndPlay', 'enableOrbitCtrls'],
      },
    },
  });
};
