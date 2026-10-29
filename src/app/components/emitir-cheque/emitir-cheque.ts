import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ChequeService } from '../../services/cheque'; // Importamos el servicio

@Component({
  selector: 'app-emitir-cheque',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './emitir-cheque.html',
  styleUrl: './emitir-cheque.css'
})
export class EmitirChequeComponent {
  beneficiario: string = '';
  monto: number | null = null;
  fechaEmision: string = '';

  // Inyectamos el servicio en el constructor
  constructor(private router: Router, private chequeService: ChequeService) {}

  registrarCheque() {
    if (this.beneficiario && this.monto && this.fechaEmision) {
      const nuevoCheque = {
        beneficiario: this.beneficiario,
        monto: this.monto,
        fecha: this.fechaEmision
      };
      
      // Guardamos el cheque en el servicio
      this.chequeService.emitirCheque(nuevoCheque);
      
      // Redirigimos a la tabla para verlo
      this.router.navigate(['/consultar-cheques']);
    } else {
      alert('Por favor, completa todos los campos del cheque.');
    }
  }
}