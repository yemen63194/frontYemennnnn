import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBackComponent } from './main-back.component';

describe('MainBackComponent', () => {
  let component: MainBackComponent;
  let fixture: ComponentFixture<MainBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
