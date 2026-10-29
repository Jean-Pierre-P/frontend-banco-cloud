import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { DashboardComponent } from './components/dashboard/dashboard';
import { EmitirChequeComponent } from './components/emitir-cheque/emitir-cheque';
import { ConsultarChequesComponent } from './components/consultar-cheques/consultar-cheques';
import { AdminChequesComponent } from './components/admin-cheques/admin-cheques'; // Nueva importación

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'emitir-cheque', component: EmitirChequeComponent },
  { path: 'consultar-cheques', component: ConsultarChequesComponent },
  { path: 'admin-cheques', component: AdminChequesComponent },
  { path: '**', redirectTo: 'login' }
];