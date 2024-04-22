import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieretablissementComponent } from './modifieretablissement.component';

describe('ModifieretablissementComponent', () => {
  let component: ModifieretablissementComponent;
  let fixture: ComponentFixture<ModifieretablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifieretablissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifieretablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
