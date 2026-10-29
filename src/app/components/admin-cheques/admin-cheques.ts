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
    this.cheques = this.chequeService.obtenerTodosLosCheques();
  }

  actualizarEstado(id: number, nuevoEstado: string) {
    this.chequeService.cambiarEstado(id, nuevoEstado);
    this.cargarCheques(); // Refresca la vista
  }

  volver() {
    this.router.navigate(['/dashboard']);
  }
}