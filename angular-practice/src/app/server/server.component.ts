import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  id = 'strange'
  status = 'offline'
  serverName = 'Test'
  serverNames = ' test3'
  servers = ['testserver', 'testserver2']
  paragraphToggle = false
  log = ['']
  logNum = 0
  constructor () {
    this.status = Math.random() > 0.5 ? 'online' : 'offline'
  }
  displayDetails () {
    this.paragraphToggle = !this.paragraphToggle

    let logString = `Button Clicked ${++this.logNum}`

    this.log.push(logString)
  }
  onCreateServer () {
    this.status = 'Server created'
    this.servers.push(this.serverName)
  }

  onUpdate (e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value
  }

  getServerStatus () {
    return this.status
  }

  getColor () {
    return this.status === 'online' ? 'green' : 'red'
  }
}
