import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierRestaurantComponent } from './modifier-restaurant.component';

describe('ModifierRestaurantComponent', () => {
  let component: ModifierRestaurantComponent;
  let fixture: ComponentFixture<ModifierRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
