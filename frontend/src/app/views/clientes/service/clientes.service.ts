import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Cliente from 'src/app/global/models/cliente.model';
import ApiUrl from 'src/app/global/constant/api-urls.constant';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  listar(): Observable<Cliente[]> {
    return this.http
      .get<Cliente[]>(ApiUrl.cliente)
      .pipe(map((res) => res.map((c, i) => ({ ...c, posicao: i }))));
  }

  incluir(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(ApiUrl.cliente, cliente);
  }

  editar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${ApiUrl.cliente}/${cliente.id}`, cliente);
  }

  excluir(cliente: Cliente): Observable<Cliente> {
    return this.http.delete<Cliente>(`${ApiUrl.cliente}/${cliente.id}`);
  }
}
