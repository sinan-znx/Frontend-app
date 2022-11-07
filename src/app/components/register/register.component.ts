import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', Validators.required);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  confirmPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  phone = new FormControl('', [Validators.required]);
  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    phone: this.phone,
    password: this.password,
    confirmPassword: this.confirmPassword,
  });

  //SignUp click
  signUpClicked() {
    let user = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      password: this.password.value,
    };

    console.log(user);
  }

}
