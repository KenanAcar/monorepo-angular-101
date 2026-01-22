import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Customer3Component } from './customer-3.component';

const routes: Routes = [{ path: '', component: Customer3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Customer3RoutingModule { }
