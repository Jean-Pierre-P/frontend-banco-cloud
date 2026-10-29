import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autorizar-clientes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autorizar-clientes.html',
  styleUrl: './autorizar-clientes.css'
})
export class AutorizarClientesComponent {
  // Simulamos usuarios que se registraron pero necesitan aprobación
  usuariosPendientes = [
    { rut: '11111111-1', nombre: 'Juan Pérez', estado: 'PENDIENTE' },
    { rut: '22222222-2', nombre: 'María González', estado: 'PENDIENTE' },
    { rut: '33333333-3', nombre: 'Empresa Alpha SpA', estado: 'PENDIENTE' }
  ];

  constructor(private router: Router) {}

  autorizarUsuario(rut: string) {
    const usuario = this.usuariosPendientes.find(u => u.rut === rut);
    if (usuario) {
      usuario.estado = 'AUTORIZADO';
    }
  }

  volver() {
    this.router.navigate(['/dashboard']);
  }
}