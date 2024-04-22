import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCoungeComponent } from './modifier-counge.component';

describe('ModifierCoungeComponent', () => {
  let component: ModifierCoungeComponent;
  let fixture: ComponentFixture<ModifierCoungeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCoungeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierCoungeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
