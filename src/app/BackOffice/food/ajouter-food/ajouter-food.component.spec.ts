import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFoodComponent } from './ajouter-food.component';

describe('AjouterFoodComponent', () => {
  let component: AjouterFoodComponent;
  let fixture: ComponentFixture<AjouterFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
