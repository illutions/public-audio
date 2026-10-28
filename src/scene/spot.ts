import { SpotLight } from 'three';
import { Light3D } from 'illutions';

export class Spot extends Light3D {
  // Called once when this object is encountered while traversing the GLTF model
  public override onTraverse(objGltf: SpotLight): void {
    // Enable a soft, low-resolution shadow for the GLTF spotlight
    objGltf.castShadow = true;
    objGltf.shadow.mapSize.set(64, 64);
  }
}
