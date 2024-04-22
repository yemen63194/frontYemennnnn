import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeetablissementComponent } from './listeetablissement.component';

describe('ListeetablissementComponent', () => {
  let component: ListeetablissementComponent;
  let fixture: ComponentFixture<ListeetablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeetablissementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeetablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
