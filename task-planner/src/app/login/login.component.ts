import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {User} from '../shared/user.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() login: string;
  @Input() password: string;
  isAuth = true;
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  loginIn() {
    this.isAuth = this.authService.checkAccount(new User(this.login, this.password));
  }
}
