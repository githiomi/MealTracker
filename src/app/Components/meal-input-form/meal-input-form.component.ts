import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MealsArrayModel } from '../../Models/MealsArrayModel/meals-array-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-meal-input-form',
  templateUrl: './meal-input-form.component.html',
  styleUrls: ['./meal-input-form.component.css']
})
export class MealInputFormComponent implements OnInit {

  @Output() submitNewMeal = new EventEmitter <MealsArrayModel>();

  newMeal = new MealsArrayModel ("", 1, "");  

  outputNewMeal(){
    this.submitNewMeal.emit(this.newMeal);
    this.newMeal = new MealsArrayModel("", 1, ""); // returns everything to default
  }

  constructor() { }

  ngOnInit(): void {
  }

}
