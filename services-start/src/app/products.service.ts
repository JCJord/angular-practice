export class ProductService {
  products = [
    {
      name: 'Erdinger',
      price: 4.0,
      amount: 323
    },
    {
      name: 'Paulaner',
      price: 4.0,
      amount: 500
    },
    {
      name: 'Itaipava',
      price: 1.0,
      amount: 13
    }
  ]

  addProduct (name: string, price: number, amount: number) {
    this.products.push({
      name: name,
      price: price,
      amount: amount
    })
  }
}
