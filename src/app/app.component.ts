import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'add anyname';
  title = 'Angular Project';

  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName="";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created";
  }
  
  updateServerName(event: Event) {
     this.serverName = (<HTMLInputElement>event.target).value;
    }

}
