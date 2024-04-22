import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichePlatExisteComponent } from './affiche-plat-existe.component';

describe('AffichePlatExisteComponent', () => {
  let component: AffichePlatExisteComponent;
  let fixture: ComponentFixture<AffichePlatExisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichePlatExisteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichePlatExisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
