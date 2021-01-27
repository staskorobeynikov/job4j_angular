import {Injectable} from '@angular/core';
import {User} from '../user.model';
import {Router} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  users: User[] = [];

  constructor(
    private router: Router,
    private http: HttpClient
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
    this.http.get<User[]>(`${environment.urlClient}/users`)
      .subscribe(data => { this.users = data; });

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
