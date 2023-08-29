import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [LayoutComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class LayoutModule {}
