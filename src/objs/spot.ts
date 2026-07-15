import { SpotLight } from 'three';
import { Light3D } from 'illutions';

export class Spot extends Light3D {
  public override onTraverse(light: SpotLight): void {
    // Casting a blurred shadow
    light.castShadow = true;
    light.shadow.mapSize.set(64, 64);

    this.obj = light;
  }
}
