import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE } from '../auth/auth.config';

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
  private readonly api = `${API_BASE}/api/cheques`;

  constructor(private http: HttpClient) {}

  emitirCheque(cheque: { beneficiario: string; monto: number; fecha: string }): Observable<Cheque> {
    return this.http.post<Cheque>(this.api, cheque);
  }

  obtenerMisCheques(): Observable<Cheque[]> {
    return this.http.get<Cheque[]>(`${this.api}/mios`);
  }

  obtenerTodosLosCheques(): Observable<Cheque[]> {
    return this.http.get<Cheque[]>(this.api);
  }

  cambiarEstado(id: number, nuevoEstado: string): Observable<Cheque> {
    return this.http.patch<Cheque>(`${this.api}/${id}/estado`, { estado: nuevoEstado });
  }

  registrarDevolucion(id: number, motivo: string): Observable<Cheque> {
    return this.http.post<Cheque>(`${this.api}/${id}/devolucion`, { motivo });
  }
}