import { Component, OnInit } from '@angular/core';
import {MapsManagerService} from "angular-cesium";

@Component({
  selector: 'app-geometry-demo',
  templateUrl: './geometry-demo.component.html',
  styleUrls: ['./geometry-demo.component.css']
})
export class GeometryDemoComponent implements OnInit {

  map: any;

  constructor(mapsManagerService: MapsManagerService) {
    this.map = mapsManagerService.getMap();
  }

  ngOnInit(): void {

  }

}
