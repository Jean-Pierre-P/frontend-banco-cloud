import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ChequeService } from '../../services/cheque';

@Component({
  selector: 'app-consultar-cheques',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultar-cheques.html',
  styleUrl: './consultar-cheques.css'
})
export class ConsultarChequesComponent implements OnInit {
  cheques: any[] = [];

  constructor(private router: Router, private chequeService: ChequeService) {}

  ngOnInit() {
    this.chequeService.obtenerMisCheques().subscribe({
      next: (data) => (this.cheques = data),
      error: (err) => console.error('Error al consultar los cheques', err)
    });
  }

  volver() {
    this.router.navigate(['/dashboard']);
  }
}