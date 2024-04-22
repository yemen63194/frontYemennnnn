import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAideComponent } from './ajout-aide.component';

describe('AjoutAideComponent', () => {
  let component: AjoutAideComponent;
  let fixture: ComponentFixture<AjoutAideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutAideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
