import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheCoungeComponent } from './affiche-counge.component';

describe('AfficheCoungeComponent', () => {
  let component: AfficheCoungeComponent;
  let fixture: ComponentFixture<AfficheCoungeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheCoungeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfficheCoungeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
