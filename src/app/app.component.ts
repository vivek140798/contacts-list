import { Component, OnInit } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'contactsList';
  user: User;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.user = new User();
    // this.login();
    // this.logout();
    // this.enroll();
  }
  async enroll() {
    try {
      const user = await this.userService.signup({
        username: 'test2',
        password: 'test2', firstname: 'fn', lastname: 'ln'
      });
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }
  async invalidateTokens() {
    const user = await this.userService.getActiveUser();
    console.log(user)
  }
  async login() {
    try {
      const user = await this.userService.login('vivek', 'vivek');
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }
  async logout() {
    try {
      await this.userService.logout();
      console.log('e')
    } catch (error) {
      console.log(error);
    }
  }
}
