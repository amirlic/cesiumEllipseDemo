import { Injectable } from '@angular/core';
import { from, interval } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockDataProviderService {

  constructor() {
  }

  get$(amount = 5) {
    const staticEntities = this.initEntities(amount);
    return from(staticEntities.map(entity => {
      //entity.position = Cesium.Cartesian3.fromDegrees(-100.0 + 5 + (10 * Math.random()), 40.0);
      entity.position = Cesium.Cartesian3.fromDegrees(34.79868, 31.92933 + (0.2 * Math.random()));
      // entity.material = new Cesium.GridMaterialProperty({
      //   color : Cesium.Color.RED.withAlpha(0.5),
      //   cellAlpha : 0.01,
      //   lineCount : new Cesium.Cartesian2(85, 85),
      // });
      entity.material = new Cesium.ColorMaterialProperty(Cesium.Color.RED.withAlpha(0.5));
      return entity;
    }));
    //return from(staticEntities);
  }

  getDataSteam$(amount = 50, intervalMs = 1000) {
    const staticEntities = this.initRandom(amount);

    return interval(intervalMs).pipe(
      map(intervalValue => {
        return staticEntities.map(entity => {
          const cartographic = Cesium.Cartographic.fromCartesian(entity.position);
          cartographic.longitude = Cesium.Math.toRadians(intervalValue);
          cartographic.latitude = Cesium.Math.toRadians(intervalValue);
          entity.position = Cesium.Cartographic.toCartesian(cartographic);
          entity.material = new Cesium.GridMaterialProperty({
            color : Cesium.Color.RED.withAlpha(0.5),
            cellAlpha : 0.01,
            lineCount : new Cesium.Cartesian2(45, 45),
          });
          return entity;
        });
      }),
      flatMap(entity => entity));
  }

  private initEntities(amount) {
    const staticEntities = [];
    for (let i = 0; i < amount; i++) {
      staticEntities.push({
        id: i.toString(),
        position: Cesium.Cartesian3.fromDegrees(-100.0 + (1 * 5), 40.0),
      });
    }
    return staticEntities;
  }

  private initRandom(amount) {
    const randomSign = 1;
    const staticEntities = [];
    for (let i = 0; i < amount; i++) {
      const lat = 20 * 1;
      const long = 140 * 1;
      const altitude = 50000 * 1;
      staticEntities.push({
        id: i.toString(),
        position: Cesium.Cartesian3.fromDegrees(long, lat, altitude),
      });
    }
    return staticEntities;
  }
}
