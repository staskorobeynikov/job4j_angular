import { Injectable } from '@angular/core';
import {User} from '../user.model';

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
    )
  ];
  constructor() { }
  setItem() {
    this.isLoggedIn = true;
  }
  getItem(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
        resolve(this.isLoggedIn);
    });
  }
  checkAccount(user: User): boolean {
    const find = this.users.find(u => u.login === user.login && u.password === user.password);
    if (find !== undefined) {
      console.log(user);
      this.setItem();
    }
    return this.isLoggedIn;
  }
  logOut() {
    this.isLoggedIn = false;
  }
}
