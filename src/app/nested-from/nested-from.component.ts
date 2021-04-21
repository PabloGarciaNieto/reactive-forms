import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-nested-from',
  templateUrl: './nested-from.component.html',
  styleUrls: ['./nested-from.component.scss']
})
export class NestedFromComponent implements OnInit {

  nestedForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    });
    this.nestedForm = this.fb.group({
      email: '',
      cellPhone: phone,
      homePhone: phone
    });

  }

}
