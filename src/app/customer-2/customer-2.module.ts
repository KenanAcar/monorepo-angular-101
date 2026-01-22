import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Customer2RoutingModule } from './customer-2-routing.module';
import { Customer2Component } from './customer-2.component';


@NgModule({
  declarations: [
    Customer2Component
  ],
  imports: [
    CommonModule,
    Customer2RoutingModule
  ]
})
export class Customer2Module { }
