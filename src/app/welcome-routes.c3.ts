import { Routes } from '@angular/router';

export const WELCOME_ROUTES: Routes = [
    { path: '', loadChildren: () => import('./customer-3/customer-3.module').then(m => m.Customer3Module) }
];
