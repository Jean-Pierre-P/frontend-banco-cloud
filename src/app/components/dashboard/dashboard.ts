import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  constructor(private router: Router, public auth: AuthService) {}

  irAEmitir() {
    this.router.navigate(['/emitir-cheque']);
  }

  irAConsultar() {
    this.router.navigate(['/consultar-cheques']);
  }

  irAAdminCheques() {
    this.router.navigate(['/admin-cheques']);
  }

  irAAutorizar() {
    this.router.navigate(['/autorizar-clientes']);
  }

  cerrarSesion() {
    this.auth.logout();
  }
}