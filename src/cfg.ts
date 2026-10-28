import { setCfg, degToRad } from 'illutions';

export const cfg = setCfg({
  // Display runtime information and editable settings
  gui: {
    infoBox: {
      enable: true,
    },
    inspector: {
      enable: true,
    },
  },

  // Configure how positional sounds fade with distance
  audio: {
    enable: true,
    refDistance: 2,
    rolloffFactor: 5,
  },

  // Load the Draco-compressed 3D scene
  model: {
    file: ['scene/audio-low.glb', 'scene/audio-med.glb', 'scene/audio-high.glb'],
    compress: {
      mesh: 'draco',
    },
  },

  // Light the scene and background with an EXR environment
  envCtrls: {
    enable: true,
    map: ['scene/qwantani_dusk_2_puresky_256.exr'],
    dataType: 'float',
    environmentIntensity: 0.25,
    backgroundIntensity: 0.15,
    rotation: {
      y: degToRad(172),
    },
  },

  // Define how the camera orbits around the scene
  orbitCtrls: {
    load: true,
    autoRotate: true,
    autoRotateSpeed: 0.5,
    rotateSpeed: 0.5,
    enableDamping: true,
    dampingFactor: 0.025,
    maxPolarAngle: degToRad(85),
    maxDistance: 25,
  },

  render: {
    // Configure renderer profiles
    profile: {
      webgpu: {
        msaa: 'render',
        aa: 'traa',
      },
      webgl: {
        msaa: 'post',
        aa: 'smaa',
      },
    },
    // Enable adaptive graphics
    adaptiveGfx: true,
  },

  debug: {
    log: 'all',
  },
});
