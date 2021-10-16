import { Component, OnInit } from '@angular/core'
import { Ingriedient } from '../shared/ingredient.module'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingriedient[] = [
    new Ingriedient('apples', 5),
    new Ingriedient('Tomatoes', 4)
  ]

  constructor () {}

  ngOnInit (): void {}
}
