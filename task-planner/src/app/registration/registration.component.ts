import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
      { type: 'minlength', message: 'Пароль не может содержать меньше 4 символов.' },
      { type: 'pattern', message: 'Пароль может содержать только строчные и прописные буквы, цифры.' }
    ]
  };
  constructor() { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.registrationForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      lastName: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern(/^[A-z0-9]*$/)
      ]),
      phone: new FormControl(''),
      inputState: new FormControl(''),
      remember: new FormControl(false)
    });
  }

  send() {
    console.log(this.registrationForm);
  }
}
