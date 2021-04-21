import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {
  validatedForm: FormGroup;
  congrats: boolean;
  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.congrats = false;
    this.validatedForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
      age: [null, [
        Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(2),
        Validators.min(18),
        Validators.max(65),
      ]],
      agree: [false, [
        Validators.requiredTrue,
      ]],
    })
  }
  get email() {
    return this.validatedForm.get('email');
  }
  get password() {
    return this.validatedForm.get('password');
  }
  get age() {
    return this.validatedForm.get('age');
  }
  get agree() {
    return this.validatedForm.get('agree');
  }

  letGo() {
    this.congrats = true;
    setTimeout(() => { this.congrats = false; }, 4000);
  }


}
