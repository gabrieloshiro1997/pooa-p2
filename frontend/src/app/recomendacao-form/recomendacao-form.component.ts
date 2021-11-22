import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Recomendacao } from '../recomendacao-listar/recomendacao-listar.component';

@Component({
  selector: 'app-recomendacao-form',
  templateUrl: './recomendacao-form.component.html',
  styleUrls: ['./recomendacao-form.component.css']
})
export class RecomendacaoFormComponent implements OnInit {

  recomendacao: Recomendacao = {} as Recomendacao
  constructor() { }

  ngOnInit(): void {
  }

  onSalvarRecomendacao(form: NgForm) {
    console.log(form)
    console.log(this.recomendacao)
  }
}
