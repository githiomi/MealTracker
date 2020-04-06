import { Component, OnInit } from '@angular/core';
import { MealsArrayModel } from '../../Models/MealsArrayModel/meals-array-model'
import { MealsArrayService } from '../../Services/MealsArray/meals-array.service'

@Component({
  selector: 'app-main-meal',
  templateUrl: './main-meal.component.html',
  styleUrls: ['./main-meal.component.css']
})
export class MainMealComponent implements OnInit {

  meals : MealsArrayModel[];

  constructor(public getMeals : MealsArrayService) {
    this.meals = getMeals.extractFoods();
   }

  toggleMealDetails(index){
     this.meals[index].showMealDetails = !this.meals[index].showMealDetails;
   }

  acceptededMeal(newestMeal){
    this.meals.push(newestMeal);
  }

  deleteMeal( deleteSelectedMeal, index) {
     if(deleteSelectedMeal){

      let deleteornot = confirm(`Are you sure you want to delete ${this.meals[index].foodname} from your list?`);

      if(deleteornot){
       this.meals.splice(index, 1);

        setTimeout(() => {
          alert(`Your meal has been deleted and cannot be undone!`);
        }, 1000);
     }
    }
  }

   
  ngOnInit(): void {
  }

}
