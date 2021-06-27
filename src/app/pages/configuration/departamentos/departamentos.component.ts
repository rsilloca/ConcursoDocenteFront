import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../../../@fury/shared/list/list-column.model';
import { DEPARTAMENTOS_TABLE_DEMO_DATA } from './departamentos-table.demo';
import { Departamento } from './departamento-create-update/departamento.model';
import { fadeInRightAnimation } from '../../../../@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../../../@fury/animations/fade-in-up.animation';
import { DepartamentoCreateUpdateComponent } from './departamento-create-update/departamento-create-update.component';
import { FACULTADES_TABLE_DEMO_DATA } from '../facultades/facultades-table.demo';
import { Facultad } from '../facultades/facultad-create-update/facultad.model';

@Component({
  selector: 'fury-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class DepartamentosComponent implements OnInit, AfterViewInit, OnDestroy {

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Departamento[]> = new ReplaySubject<Departamento[]>(1);
  data$: Observable<Departamento[]> = this.subject$.asObservable();
  customers: Departamento[];

  subjectFacultades$: ReplaySubject<Facultad[]> = new ReplaySubject<Facultad[]>(1);
  dataFacultades$: Observable<Facultad[]> = this.subjectFacultades$.asObservable();
  facultades: Facultad[];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Nombre', property: 'nameDepartamento', visible: true, isModelProperty: true },
    { name: 'Descripción', property: 'description', visible: true, isModelProperty: true },
    { name: 'Facultad', property: 'idFacultad', visible: true, isModelProperty: true },
    { name: 'Estado', property: 'state', visible: true, isModelProperty: true },
    { name: 'Acciones', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<Departamento> | null;

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
    return of(DEPARTAMENTOS_TABLE_DEMO_DATA.map(customer => new Departamento(customer)));
  }

  getFacultades() {
    return of(FACULTADES_TABLE_DEMO_DATA.map(facultad => new Facultad(facultad)));
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

    this.getFacultades().subscribe(facultades => {
      this.subjectFacultades$.next(facultades);
    });

    this.dataFacultades$.pipe(
      filter(data => !!data)
    ).subscribe((facultades) => {
      this.facultades = facultades;
    });

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getFacultadName(idFacultad: number) {
    let facultad = this.facultades.find(facultad => facultad.id == idFacultad);
    return facultad ? facultad.nameFacultad : 'Sin definir';
  }

  createCustomer() {
    this.dialog.open(DepartamentoCreateUpdateComponent, { autoFocus: false }).afterClosed().subscribe((customer: Departamento) => {
      /**
       * Customer is the updated customer (if the user pressed Save - otherwise it's null)
       */
      if (customer) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        this.customers.unshift(new Departamento(customer));
        this.subject$.next(this.customers);
      }
    });
  }

  updateCustomer(customer) {
    this.dialog.open(DepartamentoCreateUpdateComponent, {
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
        this.customers[index] = new Departamento(customer);
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
