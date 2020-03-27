import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CesiumDirective } from './cesium.directive';
import { AngularCesiumModule } from 'angular-cesium';
import { AngularCesiumWidgetsModule } from 'angular-cesium';
import { EllipseLayerComponent } from './ellipse-layer/ellipse-layer.component';
import { GeometryDemoComponent } from './geometry-demo/geometry-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CesiumDirective,
    EllipseLayerComponent,
    GeometryDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
