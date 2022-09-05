import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import ApiUrl from 'src/app/global/constant/api-urls.constant';
import Autor from 'src/app/global/models/autor.model';

@Injectable({
  providedIn: 'root',
})
export class AutoresService {
  constructor(private http: HttpClient) {}

  listar(): Observable<Autor[]> {
    return this.http
      .get<Autor[]>(ApiUrl.autor)
      .pipe(map((res) => res.map((c, i) => ({ ...c, posicao: i }))));
  }

  incluir(autor: Autor): Observable<Autor> {
    return this.http.post<Autor>(ApiUrl.autor, autor);
  }

  editar(autor: Autor): Observable<Autor> {
    return this.http.put<Autor>(`${ApiUrl.autor}/${autor.id}`, autor);
  }

  excluir(autor: Autor): Observable<Autor> {
    return this.http.delete<Autor>(`${ApiUrl.autor}/${autor.id}`);
  }
}
