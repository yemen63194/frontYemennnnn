import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterEtablissementComponent } from './ajouter-etablissement.component';

describe('AjouterEtablissementComponent', () => {
  let component: AjouterEtablissementComponent;
  let fixture: ComponentFixture<AjouterEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterEtablissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
