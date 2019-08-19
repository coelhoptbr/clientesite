import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = 'https://clienteapi.herokuapp.com/clientes';

  constructor(private http: HttpClient) { }

  incluirCliente(incliente: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, incliente);
  }

  excluirCliente(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  listarClientes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
