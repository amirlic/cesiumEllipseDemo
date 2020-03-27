import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometryDemoComponent } from './geometry-demo.component';

describe('GeometryDemoComponent', () => {
  let component: GeometryDemoComponent;
  let fixture: ComponentFixture<GeometryDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeometryDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometryDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
