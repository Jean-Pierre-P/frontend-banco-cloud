import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ChequeService } from '../../services/cheque';

@Component({
  selector: 'app-emitir-cheque',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './emitir-cheque.html',
  styleUrl: './emitir-cheque.css'
})
export class EmitirChequeComponent {
  beneficiario: string = '';
  monto: number | null = null;
  fechaEmision: string = '';

  constructor(private router: Router, private chequeService: ChequeService) {}

  registrarCheque() {
    if (this.beneficiario && this.monto && this.fechaEmision) {
      this.chequeService
        .emitirCheque({
          beneficiario: this.beneficiario,
          monto: this.monto,
          fecha: this.fechaEmision
        })
        .subscribe({
          next: () => this.router.navigate(['/consultar-cheques']),
          error: (err) => {
            console.error('Error al emitir el cheque', err);
            alert('No se pudo emitir el cheque (código ' + err.status + ').');
          }
        });
    } else {
      alert('Por favor, completa todos los campos del cheque.');
    }
  }

  volver() {
    this.router.navigate(['/dashboard']);
  }
}