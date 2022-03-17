export class RecipeModel {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
  prepTime: string;
  servings: number;
  tried: boolean;
  inShoppingList: boolean;
  rating: number;
  ingredients: IngredientsModel[];
  instructions: string[];
  nutritionalInfo: NutritionsModel[];
  additionalInfo: string;
  author: string;
  externalLink: string;
}

export class IngredientsModel {
  id: string;
  name: string;
  amount: number;
  measurement: string;
  optional: boolean;
}

export class NutritionsModel {
  id: string;
  name: string;
  amount: number;
  measurement: string;
}
