import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { DashboardComponent } from './components/dashboard/dashboard';
import { EmitirChequeComponent } from './components/emitir-cheque/emitir-cheque';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'emitir-cheque', component: EmitirChequeComponent },
  { path: '**', redirectTo: 'login' }
];