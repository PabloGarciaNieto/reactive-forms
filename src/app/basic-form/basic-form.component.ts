import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit, OnDestroy {
   subscription: Subscription;
   basicForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.basicForm = this.fb.group({
      email: '',
      message: '',
      car: ''
    })
    this.subscription = this.basicForm.valueChanges.subscribe(console.log);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
