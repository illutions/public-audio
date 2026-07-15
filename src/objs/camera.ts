import { Cam3D } from 'illutions';

export class Camera extends Cam3D {
  protected override onReady(): void {
    // Align the camera with the target object.
    const aim = this.scene.getObjectByName('Aim');
    if (!aim) return;
    aim.getWorldPosition(this.objTarget.position);
    this.obj.lookAt(this.objTarget.position);
  }
}