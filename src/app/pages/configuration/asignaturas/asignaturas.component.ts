import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../../../@fury/shared/list/list-column.model';
import { ASIGNATURAS_TABLE_DEMO_DATA } from './asignaturas-table.demo';
import { Asignatura } from './asignatura-create-update/asignatura.model';
import { fadeInRightAnimation } from '../../../../@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../../../@fury/animations/fade-in-up.animation';
import { AsignaturaCreateUpdateComponent } from './asignatura-create-update/asignatura-create-update.component';
import { DEPARTAMENTOS_TABLE_DEMO_DATA } from '../departamentos/departamentos-table.demo';
import { Departamento } from '../departamentos/departamento-create-update/departamento.model';

@Component({
  selector: 'fury-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class AsignaturasComponent implements OnInit, AfterViewInit, OnDestroy {

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Asignatura[]> = new ReplaySubject<Asignatura[]>(1);
  data$: Observable<Asignatura[]> = this.subject$.asObservable();
  customers: Asignatura[];

  subjectDepartamentos$: ReplaySubject<Departamento[]> = new ReplaySubject<Departamento[]>(1);
  dataDepartamentos$: Observable<Departamento[]> = this.subjectDepartamentos$.asObservable();
  departamentos: Departamento[];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Nombre', property: 'nameAsignatura', visible: true, isModelProperty: true },
    { name: 'Descripción', property: 'description', visible: true, isModelProperty: true },
    { name: 'Departamento', property: 'idDepartamento', visible: true, isModelProperty: true },
    { name: 'Estado', property: 'state', visible: true, isModelProperty: true },
    { name: 'Acciones', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<Asignatura> | null;

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
    return of(ASIGNATURAS_TABLE_DEMO_DATA.map(customer => new Asignatura(customer)));
  }

  getDepartamentos() {
    return of(DEPARTAMENTOS_TABLE_DEMO_DATA.map(departamento => new Departamento(departamento)));
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

    this.getDepartamentos().subscribe(departamentos => {
      this.subjectDepartamentos$.next(departamentos);
    });

    this.dataDepartamentos$.pipe(
      filter(data => !!data)
    ).subscribe((departamentos) => {
      this.departamentos = departamentos;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getDepartamentoName(idDepartamento: number) {
    let departamento = this.departamentos.find(departamento => departamento.id == idDepartamento);
    return departamento ? departamento.nameDepartamento : 'Sin definir';
  }

  createCustomer() {
    this.dialog.open(AsignaturaCreateUpdateComponent).afterClosed().subscribe((customer: Asignatura) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (customer) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        this.customers.unshift(new Asignatura(customer));
        this.subject$.next(this.customers);
      }
    });
  }

  updateCustomer(customer) {
    this.dialog.open(AsignaturaCreateUpdateComponent, {
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
        this.customers[index] = new Asignatura(customer);
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
