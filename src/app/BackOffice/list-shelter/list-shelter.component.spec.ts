import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShelterComponent } from './list-shelter.component';

describe('ListShelterComponent', () => {
  let component: ListShelterComponent;
  let fixture: ComponentFixture<ListShelterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListShelterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
