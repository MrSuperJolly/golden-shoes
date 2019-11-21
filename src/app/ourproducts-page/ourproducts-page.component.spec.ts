import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurproductsPageComponent } from './ourproducts-page.component';

describe('OurproductsPageComponent', () => {
  let component: OurproductsPageComponent;
  let fixture: ComponentFixture<OurproductsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurproductsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurproductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
