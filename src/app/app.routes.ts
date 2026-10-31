import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { DashboardComponent } from './components/dashboard/dashboard';
import { EmitirChequeComponent } from './components/emitir-cheque/emitir-cheque';
import { ConsultarChequesComponent } from './components/consultar-cheques/consultar-cheques';
import { AdminChequesComponent } from './components/admin-cheques/admin-cheques';
import { AutorizarClientesComponent } from './components/autorizar-clientes/autorizar-clientes';
import { authGuard, adminGuard } from './auth/auth.guard';

export const routes: Routes = [
  // Al entrar a la app, el guard del dashboard envía al login de Cognito si no hay sesión
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },

  // Cliente (grupo USER) y también visibles para ADMIN
  { path: 'emitir-cheque', component: EmitirChequeComponent, canActivate: [authGuard] },
  { path: 'consultar-cheques', component: ConsultarChequesComponent, canActivate: [authGuard] },

  // Solo administrador (grupo ADMIN)
  { path: 'admin-cheques', component: AdminChequesComponent, canActivate: [adminGuard] },
  { path: 'autorizar-clientes', component: AutorizarClientesComponent, canActivate: [adminGuard] },

  { path: '**', redirectTo: 'dashboard' },
];