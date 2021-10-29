import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { GamesComponent } from './games/games.component'
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component'
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component'
import { RecipesComponent } from './recipes/recipes.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { GameDetailComponent } from './games/game-detail/game-detail.component'

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: ':id', component: RecipeDetailComponent }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  {
    path: 'games',
    component: GamesComponent
  },
  { path: 'games/:id', component: GameDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
