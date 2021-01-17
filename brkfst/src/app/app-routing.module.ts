import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeComponent} from './recipe/recipe.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'home', component: HomeComponent},
    {path: 'recipes', component: RecipesComponent},
    {path: 'recipe', component: RecipeComponent},
    {path: 'shopping-list', component: ShoppingListComponent},
    {path: '**', component: HomeComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
