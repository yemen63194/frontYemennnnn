import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutShelterComponent } from './ajout-shelter.component';

describe('AjoutShelterComponent', () => {
  let component: AjoutShelterComponent;
  let fixture: ComponentFixture<AjoutShelterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutShelterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
