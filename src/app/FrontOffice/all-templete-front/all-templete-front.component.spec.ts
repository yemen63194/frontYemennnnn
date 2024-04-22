import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTempleteFrontComponent } from './all-templete-front.component';

describe('AllTempleteFrontComponent', () => {
  let component: AllTempleteFrontComponent;
  let fixture: ComponentFixture<AllTempleteFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTempleteFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTempleteFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
