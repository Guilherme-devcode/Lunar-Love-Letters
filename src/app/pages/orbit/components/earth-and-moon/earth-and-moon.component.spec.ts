import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthAndMoonComponent } from './earth-and-moon.component';

describe('EarthAndMoonComponent', () => {
  let component: EarthAndMoonComponent;
  let fixture: ComponentFixture<EarthAndMoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthAndMoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarthAndMoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
