import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.registrationForm = new FormGroup({
      email: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
      inputState: new FormControl(''),
      remember: new FormControl(false)
    });
  }

  send() {
    console.log(this.registrationForm);
  }
}
