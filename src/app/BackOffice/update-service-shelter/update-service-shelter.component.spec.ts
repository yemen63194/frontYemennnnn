import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateServiceShelterComponent } from './update-service-shelter.component';

describe('UpdateServiceShelterComponent', () => {
  let component: UpdateServiceShelterComponent;
  let fixture: ComponentFixture<UpdateServiceShelterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateServiceShelterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateServiceShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
