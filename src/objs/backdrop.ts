import { Mesh, ShadowMaterial } from 'three';
import { Mesh3D } from 'illutions';

export class Backdrop extends Mesh3D {
  public override onTraverse(gltfObj: Mesh): void {
    // Turn the backdrop mesh into a transparent shadow catcher
    gltfObj.material = new ShadowMaterial({ opacity: 0.75 });

    gltfObj.castShadow = true;
    gltfObj.receiveShadow = true;
    gltfObj.frustumCulled = false;

    // Set the underlying GLTF object
    this.obj = gltfObj;
  }
}
