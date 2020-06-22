import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = 'Tester';
  serverCreated = false;
  servers = ['testserver', 'tarers 2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)

  }

  ngOnInit(): void {
  }


  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateSeverName(event: any) {
    console.log(event.target.value);
    this.serverName = event.target.value;
  }

}
