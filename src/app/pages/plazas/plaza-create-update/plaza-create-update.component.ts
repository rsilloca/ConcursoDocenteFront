import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { Concurso } from '../../concursos/concurso-create-update/concurso.model';
import { CONCURSOS_TABLE_DEMO_DATA } from '../../concursos/concursos-table.demo';
import { Asignatura } from '../../configuration/asignaturas/asignatura-create-update/asignatura.model';
import { ASIGNATURAS_TABLE_DEMO_DATA } from '../../configuration/asignaturas/asignaturas-table.demo';
import { Departamento } from '../../configuration/departamentos/departamento-create-update/departamento.model';
import { DEPARTAMENTOS_TABLE_DEMO_DATA } from '../../configuration/departamentos/departamentos-table.demo';
import { Plaza } from './plaza.model';
import { Regimen } from './regimen.model';
import { REGIMENES_TABLE_DEMO_DATA } from './regimenes-table.demo';
import { Requisito } from './requisito.model';
import { REQUISITOS_TABLE_DEMO_DATA } from './requisitos-table.demo';
import { TipoPlaza } from './tipo-plaza.model';
import { TIPOS_PLAZA_TABLE_DEMO_DATA } from './tipos-plaza-table.demo';

@Component({
  selector: 'fury-plaza-create-update',
  templateUrl: './plaza-create-update.component.html',
  styleUrls: ['./plaza-create-update.component.scss']
})
export class PlazaCreateUpdateComponent implements OnInit {

  static id = 100;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  init: boolean = true;

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

  subjectAsignaturas$: ReplaySubject<Asignatura[]> = new ReplaySubject<Asignatura[]>(1);
  dataAsignaturas$: Observable<Asignatura[]> = this.subjectAsignaturas$.asObservable();
  asignaturas: Asignatura[];

  subjectRequisitos$: ReplaySubject<Requisito[]> = new ReplaySubject<Requisito[]>(1);
  dataRequisitos$: Observable<Requisito[]> = this.subjectRequisitos$.asObservable();
  requisitos: Requisito[];

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
  getAsignaturas() {
    return of(ASIGNATURAS_TABLE_DEMO_DATA.map(customer => new Asignatura(customer)));
  }
  getRequisitos() {
    return of(REQUISITOS_TABLE_DEMO_DATA.map(customer => new Requisito(customer)));
  }

  filteredOptions: Observable<string[]>;
  filteredOptionsAsignaturas: Observable<string[]>;
  filteredOptionsRequisitos: Observable<string[]>;

  asignaturasElegidas: Asignatura[];
  requisitosElegidos: Requisito[];

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<PlazaCreateUpdateComponent>,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Plaza;
    }

    this.form = this.fb.group({
      id: [PlazaCreateUpdateComponent.id++],
      idConcurso: [this.defaults.idConcurso || '',],
      idDepartamento: [this.defaults.idDepartamento || ''],
      idTipoPlaza: this.defaults.idTipoPlaza || '',
      idRegimen: this.defaults.idRegimen || '',
      quantity: this.defaults.quantity || '',
      state: this.defaults.state || '',
      idAsignatura: null,
      idRequisito: null
    });

    this.getOtherData();

    this.filteredOptions = this.form.get('idDepartamento').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.filteredOptionsAsignaturas = this.form.get('idAsignatura').valueChanges.pipe(
      startWith(''),
      map(value => this._filterAsignaturas(value))
    );

    this.filteredOptionsRequisitos = this.form.get('idRequisito').valueChanges.pipe(
      startWith(''),
      map(value => this._filterRequisitos(value))
    );

    if (this.isUpdateMode()) {
      let departamento = this.departamentos.find(departamento => departamento.id == this.defaults.idDepartamento);
      this.form.get('idDepartamento').setValue(departamento ? departamento.nameDepartamento : '');

      this.asignaturasElegidas = this.defaults.courses;
      this.requisitosElegidos = this.defaults.requirements;
    }
  }

  private _filter(value: string): string[] {
    if (!this.init) {
      this.asignaturasElegidas = [];
      this.requisitosElegidos = [];
    } else {
      this.init = false;
    }
    const filterValue = value.toLowerCase();
    return this.departamentos.filter(option => option.nameDepartamento.toLowerCase().includes(filterValue)).map(departamento => departamento.nameDepartamento);
  }

  private _filterAsignaturas(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.asignaturas.filter(option => option.nameAsignatura.toLowerCase().includes(filterValue)).map(departamento => departamento.nameAsignatura);
  }

  private _filterRequisitos(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.requisitos.filter(option => option.name.toLowerCase().includes(filterValue)).map(departamento => departamento.name);
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

    this.getAsignaturas().subscribe(customers => {
      this.subjectAsignaturas$.next(customers);
    });
    this.dataAsignaturas$.pipe(
      filter(data => !!data)
    ).subscribe((customers) => {
      this.asignaturas = customers;
    });

    this.getRequisitos().subscribe(customers => {
      this.subjectRequisitos$.next(customers);
    });
    this.dataRequisitos$.pipe(
      filter(data => !!data)
    ).subscribe((customers) => {
      this.requisitos = customers;
    });
  }

  addAsignatura() {
    let nameAsignatura = this.form.get('idAsignatura').value;
    let asignatura = this.asignaturas.find(asig => asig.nameAsignatura == nameAsignatura);
    if (asignatura) {
      this.asignaturasElegidas.push(asignatura);
      this.form.get('idAsignatura').setValue('');
    }
  }

  addRequisito() {
    let nameRequisito = this.form.get('idRequisito').value;
    let requisito = this.requisitos.find(req => req.name == nameRequisito);
    if (requisito) {
      this.requisitosElegidos.push(requisito);
      this.form.get('idRequisito').setValue('');
    }
  }

  save() {
    if (this.mode === 'create') {
      this.createCustomer();
    } else if (this.mode === 'update') {
      this.updateCustomer();
    }
  }

  createCustomer() {
    const customer = this.form.value;
    let departamento = this.departamentos.find(departamento => departamento.nameDepartamento == customer.idDepartamento);
    customer.idDepartamento = departamento ? departamento.id : 1;
    customer.courses = this.asignaturasElegidas;
    customer.requirements = this.requisitosElegidos;
    customer.state = 1;
    this.dialogRef.close(customer);
  }

  updateCustomer() {
    const customer = this.form.value;
    customer.id = this.defaults.id;
    let departamento = this.departamentos.find(departamento => departamento.nameDepartamento == customer.idDepartamento);
    customer.idDepartamento = departamento ? departamento.id : 1;
    customer.courses = this.asignaturasElegidas;
    customer.requirements = this.requisitosElegidos;
    this.dialogRef.close(customer);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}

