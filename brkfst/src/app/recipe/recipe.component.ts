import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipeModel} from '../../services/recipes/recipe-model';
import {RecipesService} from '../../services/recipes/recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./../app.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: RecipeModel;

  constructor(private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.recipe = this.recipesService.getRecipe(this.activatedRoute.snapshot.queryParams['id']);
    console.log('this.recipe: ', this.recipe);
  }
}
