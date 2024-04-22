import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheCoungeFrontComponent } from './affiche-counge-front.component';

describe('AfficheCoungeFrontComponent', () => {
  let component: AfficheCoungeFrontComponent;
  let fixture: ComponentFixture<AfficheCoungeFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheCoungeFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheCoungeFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
