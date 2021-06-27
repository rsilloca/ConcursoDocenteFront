import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ListColumn } from '../../../@fury/shared/list/list-column.model';
import { POSTULANTES_TABLE_DEMO_DATA } from './postulantes-table.demo';
import { fadeInRightAnimation } from '../../../@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../../@fury/animations/fade-in-up.animation';
import { Postulante } from './postulante-create-update/postulante.model';
import { PostulanteCreateUpdateComponent } from './postulante-create-update/postulante-create-update.component';

@Component({
  selector: 'fury-postulantes',
  templateUrl: './postulantes.component.html',
  styleUrls: ['./postulantes.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class PostulantesComponent implements OnInit, AfterViewInit, OnDestroy {

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Postulante[]> = new ReplaySubject<Postulante[]>(1);
  data$: Observable<Postulante[]> = this.subject$.asObservable();
  customers: Postulante[];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Image', property: 'image', visible: true },
    { name: 'Nombres', property: 'firstName', visible: true, isModelProperty: true },
    { name: 'Apellidos', property: 'lastName', visible: true, isModelProperty: true },
    { name: 'Código Plaza', property: 'idPlaza', visible: true, isModelProperty: true },
    { name: 'N° Documento', property: 'document', visible: true, isModelProperty: true },
    { name: 'N° Celular', property: 'phoneNumber', visible: true, isModelProperty: true },
    { name: 'Nota 1', property: 'n1', visible: false, isModelProperty: true },
    { name: 'Nota 2', property: 'n2', visible: false, isModelProperty: true },
    { name: 'Email', property: 'mail', visible: false, isModelProperty: true },
    { name: 'Estado', property: 'state', visible: true, isModelProperty: true },
    { name: 'Acciones', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<Postulante> | null;

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
    return of(POSTULANTES_TABLE_DEMO_DATA.map(customer => new Postulante(customer)));
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
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // createCustomer() {
  //   this.dialog.open(PostulanteCreateUpdateComponent).afterClosed().subscribe((customer: Postulante) => {
  //     /**
  //      * Customer is the updated customer (if the user pressed Save - otherwise it's null)
  //      */
  //     if (customer) {
  //       /**
  //        * Here we are updating our local array.
  //        * You would probably make an HTTP request here.
  //        */
  //       this.customers.unshift(new Postulante(customer));
  //       this.subject$.next(this.customers);
  //     }
  //   });
  // }

  // updateCustomer(customer) {
  //   this.dialog.open(PostulanteCreateUpdateComponent, {
  //     data: customer
  //   }).afterClosed().subscribe((customer) => {
  //     /**
  //      * Customer is the updated customer (if the user pressed Save - otherwise it's null)
  //      */
  //     if (customer) {
  //       /**
  //        * Here we are updating our local array.
  //        * You would probably make an HTTP request here.
  //        */
  //       const index = this.customers.findIndex((existingCustomer) => existingCustomer.id === customer.id);
  //       this.customers[index] = new Postulante(customer);
  //       this.subject$.next(this.customers);
  //     }
  //   });
  // }

  // deleteCustomer(customer) {
  //   /**
  //    * Here we are updating our local array.
  //    * You would probably make an HTTP request here.
  //    */
  //   this.customers.splice(this.customers.findIndex((existingCustomer) => existingCustomer.id === customer.id), 1);
  //   this.subject$.next(this.customers);
  // }

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






// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'fury-postulantes',
//   templateUrl: './postulantes.component.html',
//   styleUrls: ['./postulantes.component.scss']
// })
// export class  implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
