import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MealsArrayModel } from '../../Models/MealsArrayModel/meals-array-model';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrls: ['./meal-details.component.css']
})
export class MealDetailsComponent implements OnInit {

  @Input() mealDetails : MealsArrayModel;

  @Output() deleteSelectedMeal = new EventEmitter<boolean>();

  deleteMeal( unhealthy : boolean){
    this.deleteSelectedMeal.emit(unhealthy);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
