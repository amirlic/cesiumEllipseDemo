import { Component, OnInit, ViewChild } from '@angular/core';
import {AcLayerComponent, AcNotification, ActionType, MapsManagerService} from 'angular-cesium';
import { Observable } from 'rxjs';
import { MockDataProviderService } from './mock-data-provider.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-ellipse-layer',
  templateUrl: './ellipse-layer.component.html',
  styleUrls: ['./ellipse-layer.component.css']
})
export class EllipseLayerComponent implements OnInit {
  @ViewChild(AcLayerComponent, {static: false}) layer: AcLayerComponent;

  ellipses$: Observable<AcNotification>;
  Cesium = Cesium;
  show = true;
  map: any;

  constructor(private tracksDataProvider: MockDataProviderService, mapsManagerService: MapsManagerService) {
    this.map = mapsManagerService;
  }

  ngAfterViewInit(): void {
    // Create an ellipse.
    let viewer = this.map.getMap().getCesiumViewer();

    let scene = viewer.scene;

    var color = new Cesium.ColorGeometryInstanceAttribute(0.0, 0.0, 1.0, 0.5);

    ///////////////////////////////////////////////////ellipse
    var ellipseInstance = new Cesium.GeometryInstance({
      geometry : new Cesium.EllipseGeometry({
        center : Cesium.Cartesian3.fromDegrees(34.29868, 31.33983),
        semiMinorAxis : 3300.0,
        semiMajorAxis : 4300.0
      }),
      id : 'ellipse',
      attributes : {
        color : color
      }
    });
    var ellipseInstance2 = new Cesium.GeometryInstance({
      geometry : new Cesium.EllipseGeometry({
        center : Cesium.Cartesian3.fromDegrees(34.29868, 31.32733),
        semiMinorAxis : 2800.0,
        semiMajorAxis : 4000.0
      }),
      id : 'ellipse',
      attributes : {
        color : color
      }
    });
    var ellipseInstance3 = new Cesium.GeometryInstance({
      geometry : new Cesium.EllipseGeometry({
        center : Cesium.Cartesian3.fromDegrees(34.29868, 31.32933),
        semiMinorAxis : 3000.0,
        semiMajorAxis : 4000.0
      }),
      id : 'ellipse',
      attributes : {
        color : color
      }
    });
    ////////////////////////////////////////////////ellipse

    ////////////////////////////////////////////////outline
    var outlineInstance = new Cesium.GeometryInstance({
      geometry : new Cesium.EllipseOutlineGeometry({
        center : Cesium.Cartesian3.fromDegrees(34.29868, 31.33983),
        semiMinorAxis : 3300.0,
        semiMajorAxis : 4300.0
      }),
      attributes : {
        color : Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.BLUE)
      }
    });
    var outlineInstance2 = new Cesium.GeometryInstance({
      geometry : new Cesium.EllipseOutlineGeometry({
        center : Cesium.Cartesian3.fromDegrees(34.29868, 31.32733),
        semiMinorAxis : 2800.0,
        semiMajorAxis : 4000.0
      }),
      attributes : {
        color : Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.BLUE)
      }
    });
    var outlineInstance3 = new Cesium.GeometryInstance({
      geometry : new Cesium.EllipseOutlineGeometry({
        center : Cesium.Cartesian3.fromDegrees(34.29868, 31.32933),
        semiMinorAxis : 3000.0,
        semiMajorAxis : 4000.0
      }),
      attributes : {
        color : Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.BLUE)
      }
    });
    ////////////////////////////////////////////////outline

    viewer.scene.primitives.add(new Cesium.GroundPrimitive({
      geometryInstances : [ellipseInstance,ellipseInstance2,ellipseInstance3],
    }));

    // Add both ellipse outline instances to primitives.
    viewer.scene.primitives.add(new Cesium.Primitive({
      geometryInstances : [outlineInstance,outlineInstance2,outlineInstance3],
      appearance : new Cesium.PerInstanceColorAppearance({
        flat : true,
        renderState : {
          lineWidth : Math.min(2.0, scene.maximumAliasedLineWidth)
        }
      })
    }));

    viewer.zoomTo(viewer.entities);

    // let ellipse = new Cesium.EllipseGeometry({
    //   center : Cesium.Cartesian3.fromDegrees(34.79868, 31.92933),
    //   semiMajorAxis : 5000000.0,
    //   semiMinorAxis : 3000000.0,
    //   rotation : Cesium.Math.toRadians(60.0)
    // });
    // // Add both ellipse outline instances to primitives.
    // scene.primitives.add(new Cesium.Primitive({
    //   geometryInstances : [ellipse],
    //   appearance : new Cesium.PerInstanceColorAppearance({
    //     flat : true,
    //     material : Cesium.Color.BLUE,
    //     renderState : {
    //       lineWidth : Math.min(2.0, scene.maximumAliasedLineWidth)
    //     }
    //   })
    // }));//Sandcastle_End
    //
    // viewer.zoomTo(viewer.entities);
  }

  ngOnInit() {
    this.ellipses$ = this.tracksDataProvider.get$().pipe(map(entity => ({
      id: entity.id,
      actionType: ActionType.ADD_UPDATE,
      entity: entity,
    })));
  }

  removeAll() {
    this.layer.removeAll();
  }

  setShow($event: boolean) {
    this.show = $event;
  }
}
