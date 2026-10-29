import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink], // Agregamos RouterLink
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  rolUsuario: string = '';

  ngOnInit() {
    // Recuperamos el rol del almacenamiento, por defecto será USER
    this.rolUsuario = localStorage.getItem('userRole') || 'USER';
  }
}