import { Route } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'teste',
    loadChildren: () => import('./testemodulo/testemodulo.module').then(m => m.TestemoduloModule)
  }
];
