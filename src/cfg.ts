import { cfg } from 'illutions';

// Show infos
cfg.gui.infoBox.enable = true;
cfg.gui.inspector.enable = true;

// Set audio
cfg.audio.enable = true;
cfg.audio.refDistance = 2;
cfg.audio.rolloffFactor = 5;

// Set how camera rotates, pans and zooms around a target
cfg.orbitCtrls.load = true;
cfg.orbitCtrls.autoRotate = true;
cfg.orbitCtrls.autoRotateSpeed = 0.5;
cfg.orbitCtrls.rotateSpeed = 0.5
cfg.orbitCtrls.enableDamping = true
cfg.orbitCtrls.dampingFactor = 0.025;
cfg.orbitCtrls.maxPolarAngle = 85;
cfg.orbitCtrls.maxDistance = 25;

// Load compressed GLTF/GLB model
cfg.model.file = 'scene/audio.glb';
cfg.model.compress.mesh = 'draco'

// Set scene environment map
cfg.envCtrls.enable = true;
cfg.envCtrls.map = ['scene/hdri.exr'];
cfg.envCtrls.dataType = 'float';
cfg.envCtrls.environmentIntensity = 0.25
cfg.envCtrls.backgroundIntensity = 0.15;
cfg.envCtrls.rotation.y = 172

// Set antialias
cfg.render.params.aa = true;

export { cfg };
