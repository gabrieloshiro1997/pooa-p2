import { Component, OnInit } from '@angular/core';
import { parseDate } from '../helpers/date';

export interface Recomendacao {
  descricao: string;
  data: string;
}

const ELEMENT_DATA: Recomendacao[] = [
  { descricao: 'Utilizar Álcool em gel', data: parseDate(new Date())},
  { descricao: 'Utilizar máscara', data: parseDate(new Date()) },
];
@Component({
  selector: 'app-recomendacao-listar',
  templateUrl: './recomendacao-listar.component.html',
  styleUrls: ['./recomendacao-listar.component.css'],
})
export class RecomendacaoListarComponent implements OnInit {
  displayedColumns: string[] = ['name', 'symbol', 'acoes'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit(): void {}
}
