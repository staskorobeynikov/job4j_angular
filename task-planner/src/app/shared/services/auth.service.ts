import { Injectable } from '@angular/core';
import {User} from '../user.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  users: User[] = [
    new User(
      'root',
      'root'
    ),
    new User(
      'root10',
      'root'
    ),
    new User(
      'root100',
      'root'
    ),
    new User(
      'root1000',
      'root'
    ),
    new User(
      'anonymous',
      'root'
    )
  ];
  constructor(
    private router: Router
  ) { }
  setItem() {
    localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
  }
  getItem(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      resolve(JSON.parse(localStorage.getItem('isLoggedIn')));
    });
  }
  checkAccount(user: User): boolean {
    const find = this.users.find(u => u.login === user.login && u.password === user.password);
    if (find !== undefined) {
      this.isLoggedIn = true;
      this.setItem();
    }
    return this.isLoggedIn;
  }
  logOut() {
    this.isLoggedIn = false;
    this.setItem();
    this.router.navigate(['login']);
  }
}
