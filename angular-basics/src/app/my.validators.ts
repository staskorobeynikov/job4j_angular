import {FormControl} from "@angular/forms"
import {Observable} from "rxjs"

export class MyValidators {
  static restrictedEmails(control: FormControl): {[key: string]: boolean} {
    if (['s@mail.ru', "test@mail.ru"].includes(control.value)) {
      return {restrictedEmail: true}
    }
    return null
  }

  static uniqueEmail(control: FormControl): Promise<any> | Observable<any> {
   return new Promise(resolve => {
     setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({uniqueEmail: true})
        } else {
          return resolve(null)
        }
     }, 1000)
   })
  }
}
