import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'Just a test' }
  ]
  enficando = 'asdasdasdasdas'
  dadoRecebido = ''

  receivingArr = [
    { name: 'Paulaner', price: 17.99, amount: 49, store: 'Walmart' }
  ]

  onAddedServer (eventData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: eventData.serverName,
      content: eventData.serverContent
    })
  }

  onAddedBlueprint (eventData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: eventData.serverName,
      content: eventData.serverContent
    })
  }

  productReceiver (eventData: {
    name: string
    price: number
    amount: number
    store: string
  }) {
    this.receivingArr.push({
      name: eventData.name,
      price: eventData.price,
      amount: eventData.amount,
      store: eventData.store
    })
  }
}
