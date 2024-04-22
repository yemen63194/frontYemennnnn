import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAideComponent } from './list-aide.component';

describe('ListAideComponent', () => {
  let component: ListAideComponent;
  let fixture: ComponentFixture<ListAideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
