import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes: Recipe[] = [
    new Recipe(
      'Filé Angus',
      'Filé angus',
      'https://bigseventravel.com/wp-content/uploads/2020/02/Angus-Steakhouse.jpg'
    ),
    new Recipe(
      'Schnitzel',
      'Fatias de carne',
      'https://2.bp.blogspot.com/-tWf3R13K_Io/W8d2BQABBGI/AAAAAAAAMeU/FM4Y0SEf2rEzpZWHs_fbOJrQtrylcL25gCLcBGAs/s400/SCHNITZEL%2B3.jpg'
    ),
    new Recipe(
      'Joelho de porco',
      'Joelho de porco alemão ',
      'https://www.comidaereceitas.com.br/img/sizeswp/1200x675/2010/10/joelho_porco_cerveja.jpg'
    )
  ]

  constructor () {}
  onRecipeSelected (recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
  ngOnInit (): void {}
}
