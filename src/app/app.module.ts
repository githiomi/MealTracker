import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMealComponent } from './Components/main-meal/main-meal.component';
import { MealDetailsComponent } from './Components/meal-details/meal-details.component';
import { MealInputFormComponent } from './Components/meal-input-form/meal-input-form.component';
import { MealCaloriesComponent } from './Components/meal-calories/meal-calories.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMealComponent,
    MealDetailsComponent,
    MealInputFormComponent,
    MealCaloriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
