import { Routes } from '@angular/router';

export const WELCOME_ROUTES: Routes = [
    { path: '', loadChildren: () => import('./customer-1/customer-1.module').then(m => m.Customer1Module) }
];
