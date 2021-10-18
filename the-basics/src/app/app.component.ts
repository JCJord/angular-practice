import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-practice'
  featureSelected = ''

  featureSelector (feat: string) {
    this.featureSelected = feat
  }
}
