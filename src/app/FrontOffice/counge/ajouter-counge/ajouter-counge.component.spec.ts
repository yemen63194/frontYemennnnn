import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCoungeComponent } from './ajouter-counge.component';

describe('AjouterCoungeComponent', () => {
  let component: AjouterCoungeComponent;
  let fixture: ComponentFixture<AjouterCoungeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterCoungeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterCoungeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
