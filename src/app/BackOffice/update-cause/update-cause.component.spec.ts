import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCauseComponent } from './update-cause.component';

describe('UpdateCauseComponent', () => {
  let component: UpdateCauseComponent;
  let fixture: ComponentFixture<UpdateCauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCauseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
