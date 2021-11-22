import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { parseDate } from './helpers/date';
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
              id: recomendacao._id,
              descricao: recomendacao.descricao,
              data: parseDate(new Date(recomendacao.data)),
            };
          });
        })
      )
      .subscribe((recomendacoes) => {
        console.log('recomendacoes', recomendacoes);
        this.recomendacoes = recomendacoes;
        this.listaRecomendacoesAtualizada.next([...this.recomendacoes]);
      });
  }

  getRecomendacoesObservable() {
    return this.listaRecomendacoesAtualizada.asObservable();
  }
}
