import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-consultar-cheques',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './consultar-cheques.html',
  styleUrl: './consultar-cheques.css'
})
export class ConsultarChequesComponent {
  // Aquí guardaremos la lista de cheques más adelante
  cheques: any[] = [];
}