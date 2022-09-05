import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Cliente from 'src/app/global/models/cliente.model';
import ApiUrl from 'src/app/global/constant/api-urls.constant';
import Livro from 'src/app/global/models/livro.model';

@Injectable({
  providedIn: 'root',
})
export class LivrosService {
  constructor(private http: HttpClient) {}

  listar(): Observable<Livro[]> {
    return this.http
      .get<Livro[]>(ApiUrl.livro)
      .pipe(map((res) => res.map((c, i) => ({ ...c, posicao: i }))));
  }

  incluir(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(ApiUrl.livro, livro);
  }

  editar(livro: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${ApiUrl.livro}/${livro.id}`, livro);
  }

  excluir(livro: Livro): Observable<Livro> {
    return this.http.delete<Livro>(`${ApiUrl.livro}/${livro.id}`);
  }
}
