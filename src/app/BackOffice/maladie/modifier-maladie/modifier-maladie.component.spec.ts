import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMaladieComponent } from './modifier-maladie.component';

describe('ModifierMaladieComponent', () => {
  let component: ModifierMaladieComponent;
  let fixture: ComponentFixture<ModifierMaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierMaladieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierMaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
