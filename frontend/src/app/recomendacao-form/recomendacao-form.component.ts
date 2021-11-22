import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NovaRecomendacao } from '../models/nova-recomendacao';
import { Recomendacao } from '../models/recomendacao';
import { RecomendacaoService } from '../recomendacao.service';

@Component({
  selector: 'app-recomendacao-form',
  templateUrl: './recomendacao-form.component.html',
  styleUrls: ['./recomendacao-form.component.css'],
})
export class RecomendacaoFormComponent implements OnInit {
  recomendacao: Recomendacao = {} as Recomendacao;
  constructor(
    private recomendacaoService: RecomendacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSalvarRecomendacao(form: NgForm) {
    const novaRecomendacao: NovaRecomendacao = {
      descricao: form.value.descricao,
    };
    this.recomendacaoService
      .postRecomendacao(novaRecomendacao)
      .subscribe(() => this.router.navigate(['']));
  }
}
