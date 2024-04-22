import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMaladieComponent } from './liste-maladie.component';

describe('ListeMaladieComponent', () => {
  let component: ListeMaladieComponent;
  let fixture: ComponentFixture<ListeMaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMaladieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
