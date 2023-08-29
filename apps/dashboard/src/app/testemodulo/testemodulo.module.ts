import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestemoduloComponent } from './testemodulo.component';
import {Route, RouterModule} from "@angular/router";

const testeModuleRoutes: Route[] = [
  {
    path: '',
    component: TestemoduloComponent
  }
]

@NgModule({
  declarations: [
    TestemoduloComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(testeModuleRoutes)
  ]
})
export class TestemoduloModule { }
