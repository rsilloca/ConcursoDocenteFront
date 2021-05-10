import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { fadeInRightAnimation } from 'src/@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from 'src/@fury/animations/fade-in-up.animation';
import { Concurso } from '../../concursos/concurso-create-update/concurso.model';
import { CONCURSOS_TABLE_DEMO_DATA } from '../../concursos/concursos-table.demo';
import { Departamento } from '../../configuration/departamentos/departamento-create-update/departamento.model';
import { DEPARTAMENTOS_TABLE_DEMO_DATA } from '../../configuration/departamentos/departamentos-table.demo';
import { Plaza } from '../../plazas/plaza-create-update/plaza.model';
import { PLAZAS_TABLE_DEMO_DATA } from '../../plazas/plazas-table.demo';

@Component({
  selector: 'fury-convocatoria',
  templateUrl: './convocatoria.component.html',
  styleUrls: ['./convocatoria.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class ConvocatoriaComponent implements OnInit {

  subjectConcursos$: ReplaySubject<Concurso[]> = new ReplaySubject<Concurso[]>(1);
  dataConcursos$: Observable<Concurso[]> = this.subjectConcursos$.asObservable();
  concursos: Concurso[];

  subjectPlazas$: ReplaySubject<Plaza[]> = new ReplaySubject<Plaza[]>(1);
  dataPlazas$: Observable<Plaza[]> = this.subjectPlazas$.asObservable();
  plazas: Plaza[];
  
  subjectDepartamentos$: ReplaySubject<Departamento[]> = new ReplaySubject<Departamento[]>(1);
  dataDepartamentos$: Observable<Departamento[]> = this.subjectDepartamentos$.asObservable();
  departamentos: Departamento[];

  idConcurso: number;
  plazasConcurso: Plaza[] = [];
  concurso: Concurso;

  constructor(private route: ActivatedRoute) { }

  getConcursos() {
    return of(CONCURSOS_TABLE_DEMO_DATA.map(customer => new Concurso(customer)));
  }
  getPlazas() {
    return of(PLAZAS_TABLE_DEMO_DATA.map(customer => new Plaza(customer)));
  }
  getDepartamentos() {
    return of(DEPARTAMENTOS_TABLE_DEMO_DATA.map(customer => new Departamento(customer)));
  }

  ngOnInit(): void {
    this.idConcurso = +this.route.snapshot.paramMap.get('concurso') || 2;

    this.getPlazas().subscribe(customers => {
      this.subjectPlazas$.next(customers);
    });
    this.dataPlazas$.pipe(
      filter(data => !!data)
    ).subscribe((customers) => {
      this.plazas = customers;
    });

    this.getConcursos().subscribe(customers => {
      this.subjectConcursos$.next(customers);
    });
    this.dataConcursos$.pipe(
      filter(data => !!data)
    ).subscribe((customers) => {
      this.concursos = customers;
    });

    this.getDepartamentos().subscribe(customers => {
      this.subjectDepartamentos$.next(customers);
    });
    this.dataDepartamentos$.pipe(
      filter(data => !!data)
    ).subscribe((customers) => {
      this.departamentos = customers;
    });

    this.concurso = this.concursos.find(c => c.id == this.idConcurso);

    this.plazas.forEach(p => {
      if (p.idConcurso == this.idConcurso) {
        this.plazasConcurso.push(p);
      }
    });
  }

  getDepartamentoName(idDepartamento: number) {
    let departamento = this.departamentos.find(depa => depa.id == idDepartamento);
    return departamento ? departamento.nameDepartamento : 'Sin departamento';
  }

}
