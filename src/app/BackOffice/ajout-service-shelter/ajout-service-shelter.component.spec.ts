import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutServiceShelterComponent } from './ajout-service-shelter.component';

describe('AjoutServiceShelterComponent', () => {
  let component: AjoutServiceShelterComponent;
  let fixture: ComponentFixture<AjoutServiceShelterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutServiceShelterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutServiceShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
