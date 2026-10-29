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
      const nuevoCheque = {
        beneficiario: this.beneficiario,
        monto: this.monto,
        fecha: this.fechaEmision
      };
      this.chequeService.emitirCheque(nuevoCheque);
      this.router.navigate(['/consultar-cheques']);
    } else {
      alert('Por favor, completa todos los campos del cheque.');
    }
  }

  volver() {
    this.router.navigate(['/dashboard']);
  }
}