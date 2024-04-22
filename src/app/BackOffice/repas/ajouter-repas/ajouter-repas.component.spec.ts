import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRepasComponent } from './ajouter-repas.component';

describe('AjouterRepasComponent', () => {
  let component: AjouterRepasComponent;
  let fixture: ComponentFixture<AjouterRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterRepasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
