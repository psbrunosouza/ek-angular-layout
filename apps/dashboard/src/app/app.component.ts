import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'dashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'dashboard';
  //
  // formGroup: FormGroup;
  //
  // constructor(private fb: FormBuilder) {
  //   this.formGroup = this.fb.group({
  //     title: ['']
  //   })
  // }

  userFormGroup = this.fb.group({
    username: ['asdasd', [ Validators.required ]],
    phone: this.fb.group({
      phoneNumber: ['', [ Validators.required ]],
    })
  })

  constructor(private fb: FormBuilder) {
  }
}
