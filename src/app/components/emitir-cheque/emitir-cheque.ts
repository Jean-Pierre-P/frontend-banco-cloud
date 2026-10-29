import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

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

  constructor(private router: Router) {}

  registrarCheque() {
    if (this.beneficiario && this.monto && this.fechaEmision) {
      // Aquí más adelante conectaremos con el servicio HTTP para enviar al backend Java.
      // Por ahora, simulamos el registro exitoso.
      alert(`Cheque emitido exitosamente a ${this.beneficiario} por $${this.monto}`);
      this.router.navigate(['/dashboard']);
    } else {
      alert('Por favor, completa todos los campos del cheque.');
    }
  }
}