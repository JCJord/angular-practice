import { Component, OnInit } from '@angular/core'
import { ProductService } from '../products.service'

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  constructor (private productService: ProductService) {}

  ngOnInit (): void {}

  onCreateProduct (name: string, price: number, amount: number) {
    this.productService.addProduct(name, price, amount)
  }
}
