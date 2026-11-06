import { Mesh, ShadowMaterial } from 'three';
import { Mesh3D } from 'illutions';

export class Backdrop extends Mesh3D {
  // Called once when this object is encountered while traversing the GLTF model
  public override onCreate(obj: Mesh): void {
    // Turn the backdrop mesh into a transparent shadow catcher
    obj.material = new ShadowMaterial({ opacity: 0.75 });

    obj.castShadow = true;
    obj.receiveShadow = true;
    obj.frustumCulled = false;
  }
}
