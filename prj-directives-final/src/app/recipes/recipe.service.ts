import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { Recipe } from './recipe.model'

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Prato normal',
      'Top',
      'https://images.unsplash.com/photo-1596189181426-7f63a1737f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      [new Ingredient('Carne', 6), new Ingredient('Legumes', 25)]
    ),
    new Recipe(
      'Linguiça zica',
      'Toscana',
      'https://images.unsplash.com/photo-1552913903-2cffa1962dc7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
      [new Ingredient('Linguiça', 2), new Ingredient('Molho', 1)]
    ),
    new Recipe(
      'Churrasco',
      'This is simple a test',
      'https://super.abril.com.br/wp-content/uploads/2018/10/churrasco.png?w=1024',
      [
        new Ingredient('Carne', 8),
        new Ingredient('Molho', 1),
        new Ingredient('Linguiça', 3),
        new Ingredient('tomate', 2)
      ]
    ),
    new Recipe(
      'Omelete',
      'This is simple a test',
      'https://t1.rg.ltmcdn.com/pt/images/4/2/6/img_omelete_de_micro_ondas_simples_5624_600.jpg',
      [new Ingredient('Ovos', 5), new Ingredient('Salada', 2)]
    )
  ]

  constructor (private shoppingListService: ShoppingListService) {}

  getRecipes () {
    return this.recipes.slice()
  }

  addIngredientToShoppingList (ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients)
  }
}
