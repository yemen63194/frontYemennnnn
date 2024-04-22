import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherRepasComponent } from './afficher-repas.component';

describe('AfficherRepasComponent', () => {
  let component: AfficherRepasComponent;
  let fixture: ComponentFixture<AfficherRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherRepasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficherRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
