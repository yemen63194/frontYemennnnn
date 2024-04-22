import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheMedicamentComponent } from './affiche-medicament.component';

describe('AfficheMedicamentComponent', () => {
  let component: AfficheMedicamentComponent;
  let fixture: ComponentFixture<AfficheMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheMedicamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
