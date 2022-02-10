import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'contactsList';
  headerTitle: string = '';
  footerText: string = '';
  constructor() { }
  ngOnInit(): void {
    this.headerTitle = 'Manage your groups & contacts';
    this.footerText = 'Use this application to store your groups and contacts List';
  }
}
