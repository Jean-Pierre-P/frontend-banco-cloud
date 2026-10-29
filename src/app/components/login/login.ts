import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importante agregar FormsModule aquí
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  rut: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ingresar() {
    if (this.rut && this.password) {
      // Simulación: Si el RUT es 'admin', le asignamos el rol ADMIN, de lo contrario USER
      const rol = this.rut.toLowerCase() === 'admin' ? 'ADMIN' : 'USER';
      
      // Guardamos el rol en el almacenamiento de esta pestaña específica
      sessionStorage.setItem('userRole', rol);
      
      this.router.navigate(['/dashboard']);
    } else {
      alert('Por favor, ingresa tu RUT y contraseña.');
    }
  }
}