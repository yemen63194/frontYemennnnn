import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFoodComponent } from './liste-food.component';

describe('ListeFoodComponent', () => {
  let component: ListeFoodComponent;
  let fixture: ComponentFixture<ListeFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
