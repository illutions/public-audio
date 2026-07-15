import { type AnyStateMachine, setup } from 'xstate';
import type * as Ilu from "illutions";

import { classes } from './classes';

export function createStateMachine(app: Ilu.App<typeof classes>): AnyStateMachine {
  const { audio, objs3D, orbitCtrls } = app;

  return setup({
    types: {} as {
      events: Ilu.SceneReadyEvent | { type: 'AUDIO_ON' };
    },
    actions: {
      audioSetListener: () => audio.setListener({ object: objs3D.Camera }),
      audioOnOffFirst: () => {
        audio.loadAndPlay({name: 'Guitar', url: 'scene/guitar.wav', object: 'Guitar', volume: 1.5, loop: true, fade: 1});
        audio.loadAndPlay({name: 'Drums', url: 'scene/drums.wav', object: 'Drums', volume: 5, loop: true, fade: 1});
        audio.loadAndPlay({name: 'Saxophone', url: 'scene/saxophone.wav', object: 'Saxophone', volume: 0.8, loop: true, fade: 1});
      },
      enableOrbitCtrls: () => orbitCtrls.enable(),
    },
  }).createMachine({
    id: 'App',
    initial: 'Start',
    states: {
      Start: {
        on: {
          SCENE_READY: { actions: 'audioSetListener' },
        },
      }
    },
    on: {
      AUDIO_ON: {
        actions: ['audioOnOffFirst', 'enableOrbitCtrls'],
      },
    },
  });
}
