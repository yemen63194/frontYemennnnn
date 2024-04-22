import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRepasComponent } from './list-repas.component';

describe('ListRepasComponent', () => {
  let component: ListRepasComponent;
  let fixture: ComponentFixture<ListRepasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRepasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRepasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
