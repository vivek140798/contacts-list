import { Component, OnInit } from '@angular/core';
import { PingService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'contactsList';
  constructor(private pingService: PingService) {}
  ngOnInit(): void {
      this.verify();
  }
  async verify() {
    try {
      const response = await this.pingService.ping();
      console.log("Kinvey is up! "
                 + "Version: " + response.version
                 + " Response: " + response.kinvey
      );
    } catch (error) {
      console.log("Kinvey Ping Failed. Response: ${error.description}");
    }
  }
}
