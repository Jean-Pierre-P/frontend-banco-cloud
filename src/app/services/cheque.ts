import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cheque {
  id: number;
  clienteId: string;
  beneficiario: string;
  monto: number;
  fecha: string;
  estado: string;
  motivoDevolucion?: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class ChequeService {
  private readonly api = 'http://localhost:8081/api/cheques';

  constructor(private http: HttpClient) {}

  // CONFIRMADO: probado con curl
  emitirCheque(cheque: { beneficiario: string; monto: number; fecha: string }): Observable<Cheque> {
    return this.http.post<Cheque>(this.api, cheque);
  }

  // CONFIRMADO: probado con curl
  obtenerMisCheques(): Observable<Cheque[]> {
    return this.http.get<Cheque[]>(`${this.api}/mios`);
  }

  // SUPUESTO: revisar contra ChequeController (solo ADMIN)
  obtenerTodosLosCheques(): Observable<Cheque[]> {
    return this.http.get<Cheque[]>(this.api);
  }

  // SUPUESTO: revisar contra ChequeController (solo ADMIN)
  cambiarEstado(id: number, nuevoEstado: string): Observable<Cheque> {
    return this.http.patch<Cheque>(`${this.api}/${id}/estado`, { estado: nuevoEstado });
  }
}