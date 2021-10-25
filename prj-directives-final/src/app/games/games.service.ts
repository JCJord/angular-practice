import { Games } from './games.model'

export class GamesService {
  games: Games[] = [new Games('Mortal Kombat', 'Fight', 2003, 12)]

  addNewGame (name: string, genre: string, year: number, age: number) {
    this.games.push({ name: name, genre: genre, year: year, age: age })
  }

  getGames () {
    return this.games
  }
}
