/* tslint:disable:prefer-const */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Recipes from './recipes.json';
import {RecipeModel} from './recipe-model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeList: RecipeModel[];

  constructor(private http: HttpClient) {
    this.recipeList = Recipes;
  }

  getRecipes() {
    return this.recipeList;
  }

  getRecipe(id: string) {
    return this.recipeList.find(r => r.id === id);
  }
}

