import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../../@fury/shared/list/list-column.model';
import { fadeInRightAnimation } from '../../../@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../../@fury/animations/fade-in-up.animation';
import { Postulante } from '../postulantes/postulante-create-update/postulante.model';
import { POSTULANTES_TABLE_DEMO_DATA } from '../postulantes/postulantes-table.demo';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { CONCURSOS_TABLE_DEMO_DATA } from '../concursos/concursos-table.demo';
import { PLAZAS_TABLE_DEMO_DATA } from '../plazas/plazas-table.demo';
import { Concurso } from '../concursos/concurso-create-update/concurso.model';
import { Plaza } from '../plazas/plaza-create-update/plaza.model';
import { Departamento } from '../configuration/departamentos/departamento-create-update/departamento.model';
import { DEPARTAMENTOS_TABLE_DEMO_DATA } from '../configuration/departamentos/departamentos-table.demo';

@Component({
  selector: 'fury-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class RankingComponent implements OnInit, AfterViewInit, OnDestroy {

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Postulante[]> = new ReplaySubject<Postulante[]>(1);
  data$: Observable<Postulante[]> = this.subject$.asObservable();
  customers: Postulante[];

  /** OTHERS */
  subjectConcursos$: ReplaySubject<Concurso[]> = new ReplaySubject<Concurso[]>(1);
  dataConcursos$: Observable<Concurso[]> = this.subjectConcursos$.asObservable();
  concursos: Concurso[];

  subjectPlazas$: ReplaySubject<Plaza[]> = new ReplaySubject<Plaza[]>(1);
  dataPlazas$: Observable<Plaza[]> = this.subjectPlazas$.asObservable();
  plazas: Plaza[];

  subjectDepartamentos$: ReplaySubject<Departamento[]> = new ReplaySubject<Departamento[]>(1);
  dataDepartamentos$: Observable<Departamento[]> = this.subjectDepartamentos$.asObservable();
  departamentos: Departamento[];

  @Input()
  columns: ListColumn[] = [
    { name: 'Puesto', property: 'puesto', visible: true },
    { name: 'NOMBRES', property: 'firstName', visible: true, isModelProperty: true },
    { name: 'APELLIDOS', property: 'lastName', visible: true, isModelProperty: true },
    { name: 'puntaje', property: 'puntaje', visible: true },
    { name: 'ganador', property: 'ganador', visible: true }
  ] as ListColumn[];
  pageSize = 100;
  dataSource: MatTableDataSource<Postulante> | null;

  idPlaza: number;
  concurso: Concurso;
  otherRankings: Plaza[] = [];

  concursoStr: string = '';
  infoPlaza: string = '';

  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        let url = `${window.location.protocol}//${window.location.host}${event.url}`;
        window.open(url, '_self');
      }
    });
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData() {
    return of(POSTULANTES_TABLE_DEMO_DATA.map(customer => new Postulante(customer)));
  }

  /** GET OTHERS */

  getConcursos() {
    return of(CONCURSOS_TABLE_DEMO_DATA.map(customer => new Concurso(customer)));
  }
  getPlazas() {
    return of(PLAZAS_TABLE_DEMO_DATA.map(customer => new Plaza(customer)));
  }
  getDepartamentos() {
    return of(DEPARTAMENTOS_TABLE_DEMO_DATA.map(customer => new Departamento(customer)));
  }

  ngOnInit() {
    this.idPlaza = +this.route.snapshot.paramMap.get('plaza') || 2;

    this.getPlazas().subscribe(customers => {
      this.subjectPlazas$.next(customers);
    });
    this.dataPlazas$.pipe(
      filter(data => !!data)
    ).subscribe((customers) => {
      this.plazas = customers;
    });

    let plaza = this.plazas.find(plaza => plaza.id == this.idPlaza);
    if (plaza) {
      this.getRankingUsers();
      this.getInfoRanking();
      let concurso = this.concursos.find(concurso => concurso.id == plaza.idConcurso);
      if (concurso) {
        this.concurso = concurso;
        this.concursoStr = `${concurso.anio} - ${concurso.periodo}`;
      }
      let departamento = this.departamentos.find(depa => depa.id == plaza.idDepartamento);
      this.infoPlaza = `PLAZA ${plaza.id} - ${departamento ? departamento.nameDepartamento : ''}`;
      this.getOtherRankings();
    }
  }

  getInfoRanking() {
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
  }

  getRankingUsers() {
    this.getData().subscribe(customers => {
      this.subject$.next(customers);
    });

    this.customers = [];
    this.dataSource = new MatTableDataSource();

    this.data$.pipe(
      filter(data => !!data)
    ).subscribe((customers: Postulante[]) => {
      customers.sort((a, b) => {
        let puntajeA = (a.n1 + a.n2) / 2;
        let puntajeB = (b.n1 + b.n2) / 2;
        if (puntajeA > puntajeB) {
          return -1;
        }
        if (puntajeA < puntajeB) {
          return 1;
        }
        return 0;
      });
      customers.forEach(c => {
        if (c.idPlaza == this.idPlaza) {
          this.customers.push(c);
          this.dataSource.data.push(c);
        }
      });
    });
  }

  getOtherRankings() {
    if (!this.concurso) return;
    this.plazas.forEach(p => {
      if (p.idConcurso == this.concurso.id && p.id != this.idPlaza) {
        this.otherRankings.push(p);
      }
    });
  }

  getDepartamentoName(idDepartamento: number) {
    let departamento = this.departamentos.find(depa => depa.id == idDepartamento);
    return departamento ? departamento.nameDepartamento : 'Sin departamento';
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  share() { }

  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  ngOnDestroy() {
  }
}
