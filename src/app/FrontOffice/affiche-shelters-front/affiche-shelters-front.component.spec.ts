import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheSheltersFrontComponent } from './affiche-shelters-front.component';

describe('AfficheSheltersFrontComponent', () => {
  let component: AfficheSheltersFrontComponent;
  let fixture: ComponentFixture<AfficheSheltersFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheSheltersFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheSheltersFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
