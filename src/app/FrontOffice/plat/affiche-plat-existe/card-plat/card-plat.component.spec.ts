import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlatComponent } from './card-plat.component';

describe('CardPlatComponent', () => {
  let component: CardPlatComponent;
  let fixture: ComponentFixture<CardPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPlatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
