import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Customer1RoutingModule } from './customer-1-routing.module';
import { Customer1Component } from './customer-1.component';


@NgModule({
  declarations: [
    Customer1Component
  ],
  imports: [
    CommonModule,
    Customer1RoutingModule
  ]
})
export class Customer1Module { }
