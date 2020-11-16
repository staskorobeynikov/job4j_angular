import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {User} from '../shared/user.model';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuth = true;
  @ViewChild('loginForm') form: NgForm;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  submitForm() {
    // console.log(this.form);
    this.isAuth = this.authService.checkAccount(
      new User(
        this.form.value.auth.login,
        this.form.value.auth.password
      )
    );
    if (this.isAuth) {
      this.router.navigate(['tasks']);
    }
  }

  setAnonymous() {
    this.form.form.patchValue(
      {
        auth: {
          login: 'anonymous',
          password: 'root'
        }
      }
    );
  }
}
