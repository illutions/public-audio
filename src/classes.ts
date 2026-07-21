import { Backdrop } from './objs/backdrop';
import { Camera } from './objs/camera';
import { Spot } from './objs/spot';
import { Sound } from './comps/sound';

export const classes = {
  // Register customized web components
  comps: {
    Sound,
  },
  // Register the customized 3D objects
  objs3D: {
    Backdrop,
    Camera,
    Spot
  },
};
