import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-duklen',
  templateUrl: './duklen.component.html',
  styleUrls: ['./duklen.component.css']
})
export class DuklenComponent implements OnInit {
  @Input() casas: string

  element = [{ type: 'server', name: 'TestServer', content: 'Just a test' }]

  @Output() products = new EventEmitter<{
    name: string
    price: number
    amount: number
    store: string
  }>()

  constructor () {}

  ngOnInit (): void {}

  exportContent () {
    this.products.emit({
      name: 'banana',
      price: 2.5,
      amount: 1000,
      store: 'bananeiro Store'
    })

    this.products.emit({
      name: 'Erdinger',
      price: 6.5,
      amount: 543,
      store: 'Julius Store'
    })
  }
}
