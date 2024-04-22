import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFoodComponent } from './modifier-food.component';

describe('ModifierFoodComponent', () => {
  let component: ModifierFoodComponent;
  let fixture: ComponentFixture<ModifierFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
