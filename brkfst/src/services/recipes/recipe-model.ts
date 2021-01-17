export class RecipeModel {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
  time: string;
  servings: number;
  tried: boolean;
  inShoppingList: boolean;
  stars: number;
  ingredients: IngredientsModel[];
  instructions: string[];
  nutrition: NutritionsModel[];
}

export class IngredientsModel {
  id: string;
  name: string;
  amount: number;
  measurement: string;
}

export class NutritionsModel {
  id: string;
  name: string;
  amount: number;
  measurement: string;
}
