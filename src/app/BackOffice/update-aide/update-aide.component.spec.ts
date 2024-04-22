import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAideComponent } from './update-aide.component';

describe('UpdateAideComponent', () => {
  let component: UpdateAideComponent;
  let fixture: ComponentFixture<UpdateAideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
