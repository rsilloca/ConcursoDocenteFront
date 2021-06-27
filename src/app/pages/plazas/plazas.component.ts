import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../../@fury/shared/list/list-column.model';
import { PLAZAS_TABLE_DEMO_DATA } from './plazas-table.demo';
import { fadeInRightAnimation } from '../../../@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../../@fury/animations/fade-in-up.animation';
import { PlazaCreateUpdateComponent } from './plaza-create-update/plaza-create-update.component';
import { Plaza } from './plaza-create-update/plaza.model';
import { Concurso } from '../concursos/concurso-create-update/concurso.model';
import { TipoPlaza } from './plaza-create-update/tipo-plaza.model';
import { Regimen } from './plaza-create-update/regimen.model';
import { Departamento } from '../configuration/departamentos/departamento-create-update/departamento.model';
import { CONCURSOS_TABLE_DEMO_DATA } from '../concursos/concursos-table.demo';
import { TIPOS_PLAZA_TABLE_DEMO_DATA } from './plaza-create-update/tipos-plaza-table.demo';
import { DEPARTAMENTOS_TABLE_DEMO_DATA } from '../configuration/departamentos/departamentos-table.demo';
import { REGIMENES_TABLE_DEMO_DATA } from './plaza-create-update/regimenes-table.demo';

@Component({
  selector: 'fury-plazas',
  templateUrl: './plazas.component.html',
  styleUrls: ['./plazas.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class PlazasComponent implements OnInit, AfterViewInit, OnDestroy {

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Plaza[]> = new ReplaySubject<Plaza[]>(1);
  data$: Observable<Plaza[]> = this.subject$.asObservable();
  customers: Plaza[];

  /** OTHERS */
  subjectConcursos$: ReplaySubject<Concurso[]> = new ReplaySubject<Concurso[]>(1);
  dataConcursos$: Observable<Concurso[]> = this.subjectConcursos$.asObservable();
  concursos: Concurso[];

  subjectTiposPlaza$: ReplaySubject<TipoPlaza[]> = new ReplaySubject<TipoPlaza[]>(1);
  dataTiposPlaza$: Observable<TipoPlaza[]> = this.subjectTiposPlaza$.asObservable();
  tiposPlaza: TipoPlaza[];

  subjectRegimenes$: ReplaySubject<Regimen[]> = new ReplaySubject<Regimen[]>(1);
  dataRegimenes$: Observable<Regimen[]> = this.subjectRegimenes$.asObservable();
  regimenes: Regimen[];

  subjectDepartamentos$: ReplaySubject<Departamento[]> = new ReplaySubject<Departamento[]>(1);
  dataDepartamentos$: Observable<Departamento[]> = this.subjectDepartamentos$.asObservable();
  departamentos: Departamento[];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Código', property: 'id', visible: true, isModelProperty: true},
    { name: 'Departamento', property: 'idDepartamento', visible: true},
    { name: 'Tipo Plaza', property: 'idTipoPlaza', visible: true },
    { name: 'Regimen', property: 'idRegimen', visible: true },  
    { name: 'Concurso', property: 'idConcurso', visible: true },
    { name: 'Cantidad', property: 'quantity', visible: true, isModelProperty: true },
    { name: 'Estado', property: 'state', visible: true, isModelProperty: true },
    { name: 'Acciones', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<Plaza> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData() {
    return of(PLAZAS_TABLE_DEMO_DATA.map(customer => new Plaza(customer)));
  }

  /** GET OTHERS */
  getConcursos() {
    return of(CONCURSOS_TABLE_DEMO_DATA.map(customer => new Concurso(customer)));
  }
  getTiposPlaza() {
    return of(TIPOS_PLAZA_TABLE_DEMO_DATA.map(customer => new TipoPlaza(customer)));
  }
  getRegimenes() {
    return of(REGIMENES_TABLE_DEMO_DATA.map(customer => new Regimen(customer)));
  }
  getDepartamentos() {
    return of(DEPARTAMENTOS_TABLE_DEMO_DATA.map(customer => new Departamento(customer)));
  }

  ngOnInit() {
    this.getData().subscribe(customers => {
      this.subject$.next(customers);
    });

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(
      filter(data => !!data)
    ).subscribe((customers) => {
      this.customers = customers;
      this.dataSource.data = customers;
    });

    this.getOtherData();
  }

  getOtherData() {
    this.getConcursos().subscribe(customers => {
      this.subjectConcursos$.next(customers);
    });
    this.dataConcursos$.pipe(
      filter(data => !!data)
    ).subscribe((customers) => {
      this.concursos = customers;
    });

    this.getTiposPlaza().subscribe(customers => {
      this.subjectTiposPlaza$.next(customers);
    });
    this.dataTiposPlaza$.pipe(
      filter(data => !!data)
    ).subscribe((customers) => {
      this.tiposPlaza = customers;
    });

    this.getRegimenes().subscribe(customers => {
      this.subjectRegimenes$.next(customers);
    });
    this.dataRegimenes$.pipe(
      filter(data => !!data)
    ).subscribe((customers) => {
      this.regimenes = customers;
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

  getConcursoInfo(idConcurso: number) {
    let concurso = this.concursos.find(concurso => concurso.id == idConcurso);
    return concurso ? `${concurso.anio} - ${concurso.periodo}` : 'Sin definir';
  }

  getTipoPlazaName(idTipoPlaza: number) {
    let tipoPlaza = this.tiposPlaza.find(tipo => tipo.id == idTipoPlaza);
    return tipoPlaza ? tipoPlaza.name : 'Sin definir';
  }

  getRegimenName(idRegimen: number) {
    let regimen = this.regimenes.find(reg => reg.id == idRegimen);
    return regimen ? regimen.name : 'Sin definir';
  }

  getDepartamentoName(idDepartamento: number) {
    let departamento = this.departamentos.find(dep => dep.id == idDepartamento);
    return departamento ? departamento.nameDepartamento : 'Sin definir';
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createCustomer() {
    this.dialog.open(PlazaCreateUpdateComponent).afterClosed().subscribe((customer: Plaza) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (customer) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        this.customers.unshift(new Plaza(customer));
        this.subject$.next(this.customers);
      }
    });
  }

  updateCustomer(customer) {
    this.dialog.open(PlazaCreateUpdateComponent, {
      data: customer
    }).afterClosed().subscribe((customer) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (customer) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        const index = this.customers.findIndex((existingCustomer) => existingCustomer.id === customer.id);
        this.customers[index] = new Plaza(customer);
        this.subject$.next(this.customers);
      }
    });
  }

  deleteCustomer(customer) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    this.customers.splice(this.customers.findIndex((existingCustomer) => existingCustomer.id === customer.id), 1);
    this.subject$.next(this.customers);
  }

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
