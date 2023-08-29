import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { ButtonModule } from '@ekaizen/components';
import { TextModule } from '../text/text.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TextModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule {}
