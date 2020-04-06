export class MealsArrayModel {

   showMealDetails:boolean;

   constructor( public foodname : string, public calories : number, public details : string){
      this.showMealDetails = false;
   }
}
