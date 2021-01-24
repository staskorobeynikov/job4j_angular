import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  formErrors = {
    email: [
      { type: 'required', message: 'Данное поле обязательно к заполнению.' },
      { type: 'email', message: 'Введите корректный email.' }
    ],
    lastName: [
      { type: 'required', message: 'Данное поле обязательно к заполнению.' }
    ],
    password: [
      { type: 'required', message: 'Данное поле обязательно к заполнению.' },
      { type: 'minlength', message: 'Пароль не может содержать меньше 6 символов.' },
      { type: 'maxLength', message: 'Пароль не может содержать больше 15 символов.' },
      { type: 'nonSpec', message: 'Пароль должен содержать одну заглавную и прописную букву, цифру и спецсимвол.' }
    ],
    phone: [
      { type: 'required', message: 'Данное поле обязательно к заполнению.' },
      { type: 'pattern', message: 'Номер телефона не соответствует шаблону - +X-(XXX)-XXX-XX-XX' }
    ],
    repeatPassword: [
      { type: 'required', message: 'Данное поле обязательно к заполнению.' },
      { type: 'mismatch', message: 'Введенные пароли не совпадают.' }
    ]
  };
  constructor() { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.registrationForm = new FormGroup({
      person: new FormGroup( {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        lastName: new FormControl('', [Validators.required])
        }
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        this.specialSymbolValidator
      ]),
      repeatPassword: new FormControl('', Validators.required),
      phones: new FormArray([]),
      inputState: new FormControl(''),
      remember: new FormControl(false)
    },
      this.passwordValidator,
      );
  }

  send() {
    console.log(this.registrationForm);
  }

  phones(): FormArray {
    return this.registrationForm.get('phones') as FormArray;
  }

  addNewPhone() {
    const phone = new FormGroup({
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^((\+?7|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/)
      ]),
      type: new FormControl('')
    });
    this.phones().push(phone);
  }

  passwordValidator(groupF: FormGroup) {
    return groupF.get('password').value === groupF.get('repeatPassword').value ? null : {mismatch : true};
  }

  specialSymbolValidator(controlF: FormControl) {
    return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/)
      .test(controlF.value) ? null : {nonSpec: true};
  }

  deletePhone(i: number) {
    this.phones().removeAt(i);
  }
}
