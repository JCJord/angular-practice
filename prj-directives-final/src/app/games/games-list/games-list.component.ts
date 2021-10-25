import { Component, OnInit } from '@angular/core'
import { Games } from '../games.model'
import { GamesService } from '../games.service'

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  games: Games[]

  constructor (private gamesService: GamesService) {}

  ngOnInit (): void {
    this.games = this.gamesService.getGames()
  }
}
