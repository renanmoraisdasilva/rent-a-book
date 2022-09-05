import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Cliente from 'src/app/global/models/cliente.model';
import ApiUrl from 'src/app/global/constant/api-urls.constant';
import Livro from 'src/app/global/models/livro.model';
import Emprestimo from 'src/app/global/models/emprestimo.model';

@Injectable({
  providedIn: 'root',
})
export class EmprestimosService {
  constructor(private http: HttpClient) {}

  listar(): Observable<Emprestimo[]> {
    return this.http
      .get<Emprestimo[]>(ApiUrl.emprestimo)
      .pipe(map((res) => res.map((c, i) => ({ ...c, posicao: i }))));
  }

  incluir(emprestimo: Emprestimo): Observable<Emprestimo> {
    return this.http.post<Emprestimo>(ApiUrl.emprestimo, emprestimo);
  }

  editar(emprestimo: Emprestimo): Observable<Emprestimo> {
    return this.http.put<Emprestimo>(`${ApiUrl.emprestimo}/${emprestimo.id}`, emprestimo);
  }

  excluir(emprestimo: Emprestimo): Observable<Emprestimo> {
    return this.http.delete<Emprestimo>(`${ApiUrl.emprestimo}/${emprestimo.id}`);
  }
}
