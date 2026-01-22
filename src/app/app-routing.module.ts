import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WELCOME_ROUTES } from './welcome-routes';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'welcome', children: WELCOME_ROUTES },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
