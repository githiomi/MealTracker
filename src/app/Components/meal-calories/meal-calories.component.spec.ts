import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealCaloriesComponent } from './meal-calories.component';

describe('MealCaloriesComponent', () => {
  let component: MealCaloriesComponent;
  let fixture: ComponentFixture<MealCaloriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealCaloriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealCaloriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
