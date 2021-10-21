import { Component, OnInit } from '@angular/core'
import { AccountService } from './account.service'
import { ProductService } from './products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService, ProductService]
})
export class AppComponent implements OnInit {
  accounts: { name: string; status: string }[] = []
  products: { name: string; price: number; amount: number }[] = []
  constructor (
    private accountsService: AccountService,
    private productsService: ProductService
  ) {}

  ngOnInit () {
    this.accounts = this.accountsService.accounts
    this.products = this.productsService.products
  }
}
