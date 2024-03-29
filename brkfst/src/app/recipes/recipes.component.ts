import {HttpResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {RecipeModel} from '../../services/recipes/recipe-model';
import {RecipesService} from '../../services/recipes/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css', './../app.component.css']
})
export class RecipesComponent implements OnInit {
  pageTitle = 'Recipes';
  recipes: any;
  loading = true;

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit() {
    console.log('oninit');
    this.pageTitle = 'Recipes';
    this.recipes = this.recipesService.getRecipes();

  }

  onRemoveFromList(event: any) {
    console.log('onRemoveFromList: ', event);
  }

  onAddToList(event) {
    console.log('onRemoveFromList: ', event);
  }
}
