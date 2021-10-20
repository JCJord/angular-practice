import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggler = false
  @Output() feature = new EventEmitter<string>()

  constructor () {}

  ngOnInit (): void {}

  toggleMenu () {
    this.toggler = !this.toggler
  }
  recipe (feat: string) {
    this.feature.emit(feat)
  }
  shop (feat: string) {
    this.feature.emit(feat)
  }
}
