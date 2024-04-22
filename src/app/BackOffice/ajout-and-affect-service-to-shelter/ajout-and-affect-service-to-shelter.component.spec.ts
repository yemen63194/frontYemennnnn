import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAndAffectServiceToShelterComponent } from './ajout-and-affect-service-to-shelter.component';

describe('AjoutAndAffectServiceToShelterComponent', () => {
  let component: AjoutAndAffectServiceToShelterComponent;
  let fixture: ComponentFixture<AjoutAndAffectServiceToShelterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAndAffectServiceToShelterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutAndAffectServiceToShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
