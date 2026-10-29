import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  rolUsuario: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.rolUsuario = sessionStorage.getItem('userRole') || 'USER';
  }

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
}