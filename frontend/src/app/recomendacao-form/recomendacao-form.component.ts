import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NovaRecomendacao } from '../models/nova-recomendacao';
import { Recomendacao } from '../models/recomendacao';
import { RecomendacaoService } from '../recomendacao.service';

@Component({
  selector: 'app-recomendacao-form',
  templateUrl: './recomendacao-form.component.html',
  styleUrls: ['./recomendacao-form.component.css'],
})
export class RecomendacaoFormComponent implements OnInit {
  constructor(
    private recomendacaoService: RecomendacaoService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}
  id: string = '';
  recomendacao: Recomendacao = {} as Recomendacao;

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id') || '';
      if (this.id) {
        this.recomendacaoService
          .getRecomendacao(this.id)
          .subscribe((recomendacao) => {
            this.recomendacao = {
              id: recomendacao.id,
              descricao: recomendacao.descricao,
              data: recomendacao.data,
            };
          });
      }
    });
  }

  onSalvarRecomendacao(form: NgForm) {
    if (form.invalid) return;

    const recomendacao: NovaRecomendacao = {
      descricao: form.value.descricao,
      data: new Date()
    };

    if (this.id) {
      this.recomendacaoService
        .putRecomendacao(this.id, recomendacao)
        .subscribe(() => this.router.navigate(['']));
    } else {
      this.recomendacaoService
        .postRecomendacao(recomendacao)
        .subscribe(() => this.router.navigate(['']));
    }
  }

  goBack() {
    this.location.back()
  }
}
