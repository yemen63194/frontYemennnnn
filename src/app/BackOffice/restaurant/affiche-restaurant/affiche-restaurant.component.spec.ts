import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheRestaurantComponent } from './affiche-restaurant.component';

describe('AfficheRestaurantComponent', () => {
  let component: AfficheRestaurantComponent;
  let fixture: ComponentFixture<AfficheRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
