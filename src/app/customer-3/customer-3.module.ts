import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Customer3RoutingModule } from './customer-3-routing.module';
import { Customer3Component } from './customer-3.component';


@NgModule({
  declarations: [
    Customer3Component
  ],
  imports: [
    CommonModule,
    Customer3RoutingModule
  ]
})
export class Customer3Module { }
