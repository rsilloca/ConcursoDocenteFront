import { Component, Input, OnInit } from '@angular/core';
import { Concurso } from 'src/app/pages/concursos/concurso-create-update/concurso.model';
import { Plaza } from 'src/app/pages/plazas/plaza-create-update/plaza.model';

@Component({
  selector: 'card-plaza',
  templateUrl: './card-plaza.component.html',
  styleUrls: ['./card-plaza.component.scss']
})
export class CardPlazaComponent implements OnInit {

  @Input() plaza: Plaza;
  @Input() concurso: Concurso;
  @Input() departamentoName: string;
  @Input() rankingMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
