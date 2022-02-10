import { Component, OnInit } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';
import { UserDataService } from '../shared/services/user-data.service';
import { User } from '../shared/models/user.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginEnabled: boolean = true;
  user: User;
  loginUnderProcess: boolean = false;
  signupUnderProcess: boolean = false;
  loginFormGroup: FormGroup;
  submitted: boolean = false;

  constructor(private userService: UserService, private UserDataService: UserDataService, private formBuilder: FormBuilder, private router: Router
  ) {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async ngOnInit() {
    this.user = new User();
    // this.logout();
//     const user = await this.userService.getActiveUser();
// console.log(user)
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
    this.submitted = true;
    this.loginUnderProcess = true;
    if (this.loginFormGroup.valid) {
      try {
        let mail = this.loginFormGroup.controls.email.value;
        let password = this.loginFormGroup.controls.password.value;
        const user = await this.userService.login(mail, password);
        this.UserDataService.setUserId(user);
        this.router.navigate(['/dashboard']);
        this.loginEnabled = true;
        this.loginUnderProcess = false;
        this.submitted = false;
      } catch (error) {
        this.loginUnderProcess = false;
        this.submitted = false;
        console.log(error);
      }
    }
    else {
      this.loginUnderProcess = false;
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
