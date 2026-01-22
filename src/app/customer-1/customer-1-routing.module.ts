import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Customer1Component } from './customer-1.component';

const routes: Routes = [{ path: '', component: Customer1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Customer1RoutingModule { }
