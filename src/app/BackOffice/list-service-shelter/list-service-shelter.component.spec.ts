import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServiceShelterComponent } from './list-service-shelter.component';

describe('ListServiceShelterComponent', () => {
  let component: ListServiceShelterComponent;
  let fixture: ComponentFixture<ListServiceShelterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServiceShelterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListServiceShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
