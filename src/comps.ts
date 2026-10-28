import { setComps, Sound as AudioSound } from 'illutions';

import { Backdrop } from './scene/backdrop';
import { Cam } from './scene/cam';
import { Spot } from './scene/spot';
import { Sound } from './web/sound';

// Register customized asset components
export const comps = setComps({
  sounds: {
    guitar: { class: AudioSound, params: { url: 'scene/guitar.wav', parent: 'Guitar', volume: 1.5, loop: true } },
    drums: { class: AudioSound, params: { url: 'scene/drums.wav', parent: 'Drums', volume: 5, loop: true } },
    saxophone: { class: AudioSound, params: { url: 'scene/saxophone.wav', parent: 'Saxophone', volume: 0.8, loop: true } },
  },
  scene: {
    backdrop: Backdrop,
    cam: { class: Cam, params: { name: 'Camera', gltf: true } },
    spot: Spot
  },
  web: {
    sound: Sound,
  },
});
