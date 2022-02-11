import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'kinvey-angular-sdk';
import { UserDataService } from './shared/services/user-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'contactsList';
  headerTitle: string = '';
  footerText: string = '';
  isLoginPage:boolean = true;
  constructor(private router: Router, private userService: UserService, private userDataService: UserDataService) {
    router.events.subscribe((val) => {
        if(router.url.includes('login')){
          this.isLoginPage = true;
        }
        else{
          this.isLoginPage = false;
        }
    });
  }
  ngOnInit(): void {
    this.headerTitle = 'Manage your groups & contacts';
    this.footerText = 'Use this application to store your groups and contacts List';
  }

  async logout() {
    try {
      await this.userService.logout();
      this.userDataService.setUserId(null);
      this.router.navigate(['/login'])
    } catch (error) {
      console.log(error);
    }
  }
}
