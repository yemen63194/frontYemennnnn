import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDonateurAvecAideComponent } from './list-donateur-avec-aide.component';

describe('ListDonateurAvecAideComponent', () => {
  let component: ListDonateurAvecAideComponent;
  let fixture: ComponentFixture<ListDonateurAvecAideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDonateurAvecAideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDonateurAvecAideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
