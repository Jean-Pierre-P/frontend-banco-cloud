import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChequeService {
  // Lista temporal que simula la base de datos
  private chequesEmitidos: any[] = [];

  constructor() { }

  emitirCheque(cheque: any) {
    // Le asignamos un ID aleatorio y el estado inicial "EMITIDO"
    cheque.id = Math.floor(Math.random() * 10000);
    cheque.estado = 'EMITIDO';
    this.chequesEmitidos.push(cheque);
  }

  obtenerMisCheques() {
    return this.chequesEmitidos;
  }
}