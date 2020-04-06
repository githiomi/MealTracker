import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { MainMealComponent } from './Components/main-meal/main-meal.component';
// import { MealCaloriesComponent } from './Components/meal-calories/meal-calories.component';

const routes: Routes = [
  // { path: "", redirectTo:"/meals", pathMatch: "full" },
  // { path: "/meals", component : MainMealComponent },
  // { path: "/calories", component : MealCaloriesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
