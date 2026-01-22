import { Routes } from '@angular/router';

export const WELCOME_ROUTES: Routes = [
    { path: '', loadChildren: () => import('./customer-2/customer-2.module').then(m => m.Customer2Module) }
];
