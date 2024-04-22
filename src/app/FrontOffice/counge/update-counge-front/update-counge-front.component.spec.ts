import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoungeFrontComponent } from './update-counge-front.component';

describe('UpdateCoungeFrontComponent', () => {
  let component: UpdateCoungeFrontComponent;
  let fixture: ComponentFixture<UpdateCoungeFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCoungeFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCoungeFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
