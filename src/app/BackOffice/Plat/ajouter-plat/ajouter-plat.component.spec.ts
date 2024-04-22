import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPlatComponent } from './ajouter-plat.component';

describe('AjouterPlatComponent', () => {
  let component: AjouterPlatComponent;
  let fixture: ComponentFixture<AjouterPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPlatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
