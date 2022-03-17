/* tslint:disable:prefer-const */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import Recipes from './recipes.json';
import {RecipeModel} from './recipe-model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeList: RecipeModel[];
  url: 'https://brkfst-14d0b-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';

  constructor(private http: HttpClient) {
    // this.recipeList = Recipes;
  }

  getRecipes() {
    let recipesArray = [];
    this.http
      .get('https://brkfst-14d0b-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
      .pipe(map((responseData) => {
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            responseData['id'] = key;
            recipesArray.push({...responseData[key], id: key});
          }
        }
        return recipesArray;
      }))
      .subscribe((recipes) => {
      });

    return recipesArray;
  }

  getRecipe(id: string) {
    return this.recipeList.find(r => r.id === id);
  }

  saveRecipe(recipe: RecipeModel) {
    this.http.post(this.url, recipe)
      .subscribe(res => {
        console.log('res: ', res);
      });
  }
}

