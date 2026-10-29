import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ChequeService } from '../../services/cheque'; // Importamos el servicio

@Component({
  selector: 'app-consultar-cheques',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './consultar-cheques.html',
  styleUrl: './consultar-cheques.css'
})
export class ConsultarChequesComponent implements OnInit {
  cheques: any[] = [];

  constructor(private chequeService: ChequeService) {}

  ngOnInit() {
    // Al cargar la pantalla, recuperamos los cheques guardados
    this.cheques = this.chequeService.obtenerMisCheques();
  }
}