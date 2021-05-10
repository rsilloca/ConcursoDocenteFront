import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { Departamento } from '../../departamentos/departamento-create-update/departamento.model';
import { DEPARTAMENTOS_TABLE_DEMO_DATA } from '../../departamentos/departamentos-table.demo';
import { Asignatura } from './asignatura.model';

@Component({
  selector: 'fury-asignatura-create-update',
  templateUrl: './asignatura-create-update.component.html',
  styleUrls: ['./asignatura-create-update.component.scss']
})
export class AsignaturaCreateUpdateComponent implements OnInit {

  static id = 100;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  subjectDepartamentos$: ReplaySubject<Departamento[]> = new ReplaySubject<Departamento[]>(1);
  dataDepartamentos$: Observable<Departamento[]> = this.subjectDepartamentos$.asObservable();
  departamentos: Departamento[];

  filteredOptions: Observable<string[]>;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<AsignaturaCreateUpdateComponent>,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Asignatura;
    }

    this.form = this.fb.group({
      id: [AsignaturaCreateUpdateComponent.id++],
      nameAsignatura: [this.defaults.nameAsignatura || '',],
      description: [this.defaults.description || ''],
      idDepartamento: this.defaults.idDepartamento || '',
      state: this.defaults.state || '',
    });

    this.getDepartamentos().subscribe(departamentos => {
      this.subjectDepartamentos$.next(departamentos);
    });

    this.dataDepartamentos$.pipe(
      filter(data => !!data)
    ).subscribe((departamentos) => {
      this.departamentos = departamentos;
    });

    this.filteredOptions = this.form.get('idDepartamento').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    if (this.isUpdateMode()) {
      let departamento = this.departamentos.find(departamento => departamento.id == this.defaults.idDepartamento);
      this.form.get('idDepartamento').setValue(departamento ? departamento.nameDepartamento : '');
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.departamentos.filter(option => option.nameDepartamento.toLowerCase().includes(filterValue)).map(departamento => departamento.nameDepartamento);
  }

  getDepartamentos() {
    return of(DEPARTAMENTOS_TABLE_DEMO_DATA.map(departamento => new Departamento(departamento)));
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
    customer.state = 1;
    this.dialogRef.close(customer);
  }

  updateCustomer() {
    const customer = this.form.value;
    customer.id = this.defaults.id;
    let departamento = this.departamentos.find(departamento => departamento.nameDepartamento == customer.idDepartamento);
    customer.idDepartamento = departamento ? departamento.id : 1;
    this.dialogRef.close(customer);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}

