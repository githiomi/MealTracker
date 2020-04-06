import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealInputFormComponent } from './meal-input-form.component';

describe('MealInputFormComponent', () => {
  let component: MealInputFormComponent;
  let fixture: ComponentFixture<MealInputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealInputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
