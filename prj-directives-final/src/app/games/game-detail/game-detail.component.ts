import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Games } from '../games.model'
import { GamesService } from '../games.service'

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game: Games

  constructor (
    private gamesService: GamesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    const id = this.route.snapshot.params['id']
    this.game = this.gamesService.getGame(id)
    console.log(this.game)
  }
}
