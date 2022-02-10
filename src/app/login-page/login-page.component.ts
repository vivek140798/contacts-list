import { Component, OnInit } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';
import { UserDataService } from '../shared/services/user-data.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginEnabled:boolean = true;
  user: User;
  underProcess:boolean = false;
  constructor(private userService: UserService, private UserDataService: UserDataService) { }

  ngOnInit() {
    this.user = new User();
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
  async login() {
    try {
      this.underProcess = true;
      const user = await this.userService.login('vivek', 'vivek');
      this.loginEnabled = true;
      this.underProcess = false;
    } catch (error) {
      this.underProcess = false;
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
