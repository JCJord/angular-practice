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
}
