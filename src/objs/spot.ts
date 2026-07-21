import { SpotLight } from 'three';
import { Light3D } from 'illutions';

export class Spot extends Light3D {
  public override onTraverse(gltfObj: SpotLight): void {
    // Enable a soft, low-resolution shadow for the GLTF spotlight
    gltfObj.castShadow = true;
    gltfObj.shadow.mapSize.set(64, 64);

    // Set the underlying GLTF object
    this.obj = gltfObj;
  }
}
