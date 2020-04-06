import { Component, OnInit, Input } from '@angular/core';
import { MealsArrayModel } from 'src/app/Models/MealsArrayModel/meals-array-model';

@Component({
  selector: 'app-meal-calories',
  templateUrl: './meal-calories.component.html',
  styleUrls: ['./meal-calories.component.css']
})
export class MealCaloriesComponent implements OnInit {

  @Input() foodCalories : MealsArrayModel;

  constructor() { }

  ngOnInit(): void {
  }

}
