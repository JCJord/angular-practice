import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { RecipesComponent } from './recipes/recipes.component'
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component'
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component'
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component'
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'
import { DropdownDirective } from './shared/dropdown.directive'
import { ShoppingListService } from './shopping-list/shopping-list.service'
import { EmployeeComponent } from './employee/employee.component'
import { NewEmployeeComponent } from './employee/new-employee/new-employee.component'
import { EmployeeListComponent } from './employee/employee-list/employee-list.component'
import { EmployeeService } from './employee/employee.service'

import { GamesComponent } from './games/games.component'
import { GamesListComponent } from './games/games-list/games-list.component'
import { NewGameComponent } from './games/new-game/new-game.component'
import { GamesService } from './games/games.service'
import { AppRoutingModule } from './app.routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    EmployeeComponent,
    NewEmployeeComponent,
    EmployeeListComponent,

    GamesComponent,
    GamesListComponent,
    NewGameComponent,
    RecipeStartComponent,
    GameDetailComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ShoppingListService, EmployeeService, GamesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
