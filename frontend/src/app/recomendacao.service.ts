import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { parseDate } from './helpers/date';
import { NovaRecomendacao } from './models/nova-recomendacao';
import { Recomendacao } from './models/recomendacao';

@Injectable({
  providedIn: 'root',
})
export class RecomendacaoService {
  constructor(private httpClient: HttpClient) {}
  private listaRecomendacoesAtualizada = new Subject<Recomendacao[]>();
  private recomendacoes: Recomendacao[] = [];
  getRecomendacoes(): void {
    this.httpClient
      .get<Recomendacao[]>('http://localhost:3000/api/recomendacao')
      .pipe(
        map((recomendacoes) => {
          return recomendacoes.map((recomendacao) => {
            return {
              id: recomendacao.id,
              descricao: recomendacao.descricao,
              data: parseDate(new Date(recomendacao.data)),
            };
          });
        })
      )
      .subscribe((recomendacoes) => {
        this.recomendacoes = recomendacoes;
        this.listaRecomendacoesAtualizada.next([...this.recomendacoes]);
      });
  }

  postRecomendacao(recomendacao: NovaRecomendacao): Observable<Recomendacao> {
    return this.httpClient.post<Recomendacao>(
      'http://localhost:3000/api/recomendacao',
      recomendacao
    );
  }

  getRecomendacoesObservable() {
    return this.listaRecomendacoesAtualizada.asObservable();
  }
}
