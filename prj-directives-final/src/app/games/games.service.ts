import { Games } from './games.model'

export class GamesService {
  games: Games[] = [
    new Games('Mortal Kombat', 'Fight', 2003, 12),
    new Games('Naruto Uzumaki Chronicles ', 'Fight', 2000, 25),
    new Games('FIFA', 'Sports', 2021, 55)
  ]

  addNewGame (name: string, genre: string, year: number, age: number) {
    this.games.push({ name: name, genre: genre, year: year, age: age })
  }

  getGames () {
    return this.games
  }

  getGame (index: number) {
    return this.games[index]
  }
}
