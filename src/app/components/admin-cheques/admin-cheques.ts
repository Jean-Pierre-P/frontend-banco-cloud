import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChequeService } from '../../services/cheque';

@Component({
  selector: 'app-admin-cheques',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-cheques.html',
  styleUrl: './admin-cheques.css'
})
export class AdminChequesComponent implements OnInit {
  cheques: any[] = [];

  constructor(private router: Router, private chequeService: ChequeService) {}

  ngOnInit() {
    this.cargarCheques();
  }

  cargarCheques() {
    this.chequeService.obtenerTodosLosCheques().subscribe({
      next: (data) => (this.cheques = data),
      error: (err) => console.error('Error al listar los cheques', err)
    });
  }

  actualizarEstado(id: number, nuevoEstado: string) {
    this.chequeService.cambiarEstado(id, nuevoEstado).subscribe({
      next: () => this.cargarCheques(),
      error: (err) => {
        console.error('Error al cambiar el estado', err);
        alert('No se pudo cambiar el estado (código ' + err.status + ').');
      }
    });
  }

  devolver(id: number) {
    const motivo = prompt('Motivo de la devolución:');
    if (!motivo || !motivo.trim()) {
      return;
    }
    this.chequeService.registrarDevolucion(id, motivo.trim()).subscribe({
      next: () => this.cargarCheques(),
      error: (err) => {
        console.error('Error al registrar la devolución', err);
        alert('No se pudo registrar la devolución (código ' + err.status + ').');
      }
    });
  }

  volver() {
    this.router.navigate(['/dashboard']);
  }
}