import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {User} from '../shared/user.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuth = true;
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }
  submitForm(loginForm: NgForm) {
    this.isAuth = this.authService.checkAccount(
      new User(
        loginForm.form.value.login,
        loginForm.form.value.password
      )
    );
  }
}
