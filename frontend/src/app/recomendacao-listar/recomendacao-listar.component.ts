import { Component, OnInit } from '@angular/core';
import { Recomendacao } from '../models/recomendacao';
import { RecomendacaoService } from '../recomendacao.service';

@Component({
  selector: 'app-recomendacao-listar',
  templateUrl: './recomendacao-listar.component.html',
  styleUrls: ['./recomendacao-listar.component.css'],
})
export class RecomendacaoListarComponent implements OnInit {
  displayedColumns: string[] = ['descricao', 'data', 'acoes'];

  constructor(private recomendacaoService: RecomendacaoService) {}
  dataSource: Recomendacao[] = [];

  ngOnInit(): void {
    this.recomendacaoService.getRecomendacoes();
    this.recomendacaoService
      .getRecomendacoesObservable()
      .subscribe((recomendacoes: Recomendacao[]) => {
        this.dataSource = recomendacoes
      });
  }

  onDeletarRecomendacao(id: string) {
    this.recomendacaoService.deleteRecomendacao(id).subscribe(() => {
      this.recomendacaoService.getRecomendacoes()
    })
  }
}
