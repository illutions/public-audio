import { cfg } from 'illutions';

// Display runtime information and editable settings
cfg.gui.infoBox.enable = true;
cfg.gui.inspector.enable = true;

// Configure how positional sounds fade with distance
cfg.audio.enable = true;
cfg.audio.refDistance = 2;
cfg.audio.rolloffFactor = 5;

// Define how the camera orbits around the scene
cfg.orbitCtrls.load = true;
// cfg.orbitCtrls.autoRotate = true;
cfg.orbitCtrls.autoRotateSpeed = 0.5;
cfg.orbitCtrls.rotateSpeed = 0.5
cfg.orbitCtrls.enableDamping = true
cfg.orbitCtrls.dampingFactor = 0.025;
cfg.orbitCtrls.maxPolarAngle = 85;
cfg.orbitCtrls.maxDistance = 25;

// Load the Draco-compressed 3D scene
cfg.model.file = 'scene/audio.glb';
cfg.model.compress.mesh = 'draco'

// Light the scene and background with an EXR environment
cfg.envCtrls.enable = true;
cfg.envCtrls.map = ['scene/hdri.exr'];
cfg.envCtrls.dataType = 'float';
cfg.envCtrls.environmentIntensity = 0.25
cfg.envCtrls.backgroundIntensity = 0.15;
cfg.envCtrls.rotation.y = 172

// Smooth jagged edges in the rendered image
cfg.render.params.aa = true;

export { cfg };
