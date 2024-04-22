import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheEtablissmentFrontComponent } from './affiche-etablissment-front.component';

describe('AfficheEtablissmentFrontComponent', () => {
  let component: AfficheEtablissmentFrontComponent;
  let fixture: ComponentFixture<AfficheEtablissmentFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheEtablissmentFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheEtablissmentFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
