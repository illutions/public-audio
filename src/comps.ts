import { setComps, Sound, SpotLight3D } from 'illutions';

import { Backdrop } from './scene/backdrop';
import { Cam } from './scene/cam';
import { Sound as WebSound } from './web/sound';

// Register customized asset components
export const comps = setComps({
  sounds: {
    guitar: { 
      class: Sound,
      params: { url: 'scene/guitar.wav', parent: 'Guitar', volume: 1.5, loop: true }
    },
    drums: { 
      class: Sound,
      params: { url: 'scene/drums.wav', parent: 'Drums', volume: 5, loop: true }
    },
    saxophone: { 
      class: Sound,
      params: { url: 'scene/saxophone.wav', parent: 'Saxophone', volume: 0.8, loop: true }
    },
  },
  scene: {
    backdrop: {
      class: Backdrop,
      params: { gltf: true }
    },
    cam: { 
      class: Cam,
      params: { name: 'Camera', gltf: true }
    },
    spot: {
      class: SpotLight3D,
      params: {
        gltf: true,
        obj: {
          castShadow: true,
          shadow: { mapSize: { width: 64, height: 64 } }
        }
      }
    }
  },
  web: {
    sound: WebSound,
  },
});
