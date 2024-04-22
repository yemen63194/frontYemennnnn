import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheCauseBackComponent } from './affiche-cause-back.component';

describe('AfficheCauseBackComponent', () => {
  let component: AfficheCauseBackComponent;
  let fixture: ComponentFixture<AfficheCauseBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheCauseBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheCauseBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
