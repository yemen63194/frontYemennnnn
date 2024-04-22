import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAideDonateurComponent } from './ajout-aide-donateur.component';

describe('AjoutAideDonateurComponent', () => {
  let component: AjoutAideDonateurComponent;
  let fixture: ComponentFixture<AjoutAideDonateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAideDonateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutAideDonateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
