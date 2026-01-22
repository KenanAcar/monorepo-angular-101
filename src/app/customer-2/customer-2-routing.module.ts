import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Customer2Component } from './customer-2.component';

const routes: Routes = [{ path: '', component: Customer2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Customer2RoutingModule { }
