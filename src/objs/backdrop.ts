import { Mesh, ShadowMaterial } from 'three';
import { Mesh3D } from 'illutions';

export class Backdrop extends Mesh3D {
  public override onTraverse(mesh: Mesh): void {
    // Transforming the backdrop into a shadow catcher
    mesh.material = new ShadowMaterial({ opacity: 0.75 });

    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.frustumCulled = false;

    this.obj = mesh;
  }
}
