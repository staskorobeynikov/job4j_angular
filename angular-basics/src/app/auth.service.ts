import {Injectable} from "@angular/core"

@Injectable({providedIn: 'root'})
export class AuthService {
  private isAuth = false

  login(): void {
    this.isAuth = true
  }

  logOut(): void {
    this.isAuth = false
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      setTimeout(() => {
        resolve(this.isAuth)
      }, 1000)
    })
  }
}
