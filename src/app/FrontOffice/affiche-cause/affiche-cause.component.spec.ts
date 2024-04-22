import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheCauseComponent } from './affiche-cause.component';

describe('AfficheCauseComponent', () => {
  let component: AfficheCauseComponent;
  let fixture: ComponentFixture<AfficheCauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheCauseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
