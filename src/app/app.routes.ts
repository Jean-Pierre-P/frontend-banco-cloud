import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmitirChequeComponent } from './components/emitir-cheque/emitir-cheque.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'emitir-cheque', component: EmitirChequeComponent },
  { path: '**', redirectTo: 'login' } // Redirige cualquier ruta inválida al login
];