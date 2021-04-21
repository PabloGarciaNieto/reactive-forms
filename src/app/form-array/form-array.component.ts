import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms'
@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  arrayForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.arrayForm = this.fb.group({
      email: '',
      phones: this.fb.array([])
    });
  }
  get phoneForms() {
    return this.arrayForm.get('phones') as FormArray;
  }
addPhone() {
  const phone = this.fb.group({
    area: [],
    prefix: [],
    line: []
  });
  this.phoneForms.push(phone);
}
deletePhone(i) {
  this.phoneForms.removeAt(i);
}
}
