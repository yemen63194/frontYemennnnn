import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCauseShelterComponent } from './add-cause-shelter.component';

describe('AddCauseShelterComponent', () => {
  let component: AddCauseShelterComponent;
  let fixture: ComponentFixture<AddCauseShelterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCauseShelterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCauseShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
