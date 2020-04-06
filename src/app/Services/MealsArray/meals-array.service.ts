import { Injectable } from '@angular/core';
import { MealsArrayModel } from '../../Models/MealsArrayModel/meals-array-model'

@Injectable({
  providedIn: 'root'
})
export class MealsArrayService {

  mealEntered : MealsArrayModel;

  extractFoods(){
    return [
      new MealsArrayModel("fries", 300, "they are just the best"),
      new MealsArrayModel("nduma", 50, "best when deep-fried"),
      new MealsArrayModel("smokies", 100, "Pasua is the best")
    ]
  }

  constructor() { }
}
