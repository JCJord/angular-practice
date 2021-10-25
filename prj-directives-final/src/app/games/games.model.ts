export class Games {
  public name: string
  public genre: string
  public year: number
  public age: number

  constructor (name: string, genre: string, year: number, age: number) {
    this.name = name
    this.genre = genre
    this.year = year
    this.age = age
  }
}
