import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShelterComponent } from './update-shelter.component';

describe('UpdateShelterComponent', () => {
  let component: UpdateShelterComponent;
  let fixture: ComponentFixture<UpdateShelterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateShelterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
