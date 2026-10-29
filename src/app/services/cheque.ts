import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {
  // Clave secreta para nuestra base de datos temporal en el navegador
  private dbKey = 'bancoCloud_ChequesDB';

  constructor() {
    // Si es la primera vez, creamos la tabla de cheques vacía
    if (!localStorage.getItem(this.dbKey)) {
      localStorage.setItem(this.dbKey, JSON.stringify([]));
    }
  }

  // Función interna para leer la base de datos compartida
  private leerBaseDeDatos(): any[] {
    const data = localStorage.getItem(this.dbKey);
    return data ? JSON.parse(data) : [];
  }

  // Función interna para guardar los cambios
  private guardarBaseDeDatos(cheques: any[]) {
    localStorage.setItem(this.dbKey, JSON.stringify(cheques));
  }

  emitirCheque(cheque: any) {
    const cheques = this.leerBaseDeDatos();
    cheque.id = Math.floor(Math.random() * 10000);
    cheque.estado = 'EMITIDO';
    
    cheques.push(cheque);
    this.guardarBaseDeDatos(cheques);
  }

  obtenerMisCheques() {
    return this.leerBaseDeDatos();
  }

  obtenerTodosLosCheques() {
    return this.leerBaseDeDatos();
  }

  cambiarEstado(id: number, nuevoEstado: string) {
    const cheques = this.leerBaseDeDatos();
    const cheque = cheques.find((c: any) => c.id === id);
    
    if (cheque) {
      cheque.estado = nuevoEstado;
      this.guardarBaseDeDatos(cheques);
    }
  }
}