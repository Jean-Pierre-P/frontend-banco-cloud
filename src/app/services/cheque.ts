import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {
  private chequesEmitidos: any[] = [];

  constructor() { }

  emitirCheque(cheque: any) {
    cheque.id = Math.floor(Math.random() * 10000);
    cheque.estado = 'EMITIDO';
    this.chequesEmitidos.push(cheque);
  }

  obtenerMisCheques() {
    return this.chequesEmitidos;
  }

  // Nuevas funciones para el Administrador
  obtenerTodosLosCheques() {
    return this.chequesEmitidos;
  }

  cambiarEstado(id: number, nuevoEstado: string) {
    const cheque = this.chequesEmitidos.find(c => c.id === id);
    if (cheque) {
      cheque.estado = nuevoEstado;
    }
  }
}