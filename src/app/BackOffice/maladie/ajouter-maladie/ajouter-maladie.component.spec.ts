import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterMaladieComponent } from './ajouter-maladie.component';

describe('AjouterMaladieComponent', () => {
  let component: AjouterMaladieComponent;
  let fixture: ComponentFixture<AjouterMaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterMaladieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterMaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
