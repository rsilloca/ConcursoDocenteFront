import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { Facultad } from '../../facultades/facultad-create-update/facultad.model';
import { FACULTADES_TABLE_DEMO_DATA } from '../../facultades/facultades-table.demo';
import { Departamento } from './departamento.model';

@Component({
  selector: 'fury-departamento-create-update',
  templateUrl: './departamento-create-update.component.html',
  styleUrls: ['./departamento-create-update.component.scss']
})
export class DepartamentoCreateUpdateComponent implements OnInit {

  static id = 100;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  subjectFacultades$: ReplaySubject<Facultad[]> = new ReplaySubject<Facultad[]>(1);
  dataFacultades$: Observable<Facultad[]> = this.subjectFacultades$.asObservable();
  facultades: Facultad[];

  filteredOptions: Observable<string[]>;

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<DepartamentoCreateUpdateComponent>,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Departamento;
    }

    this.form = this.fb.group({
      id: [DepartamentoCreateUpdateComponent.id++],
      nameDepartamento: [this.defaults.nameDepartamento || '',],
      description: [this.defaults.description || ''],
      idFacultad: '',
      state: this.defaults.state || '',
    });

    this.getFacultades().subscribe(facultades => {
      this.subjectFacultades$.next(facultades);
    });

    this.dataFacultades$.pipe(
      filter(data => !!data)
    ).subscribe((facultades) => {
      this.facultades = facultades;
    });

    this.filteredOptions = this.form.get('idFacultad').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    if (this.isUpdateMode()) {
      let facultad = this.facultades.find(facultad => facultad.id == this.defaults.idFacultad);
      this.form.get('idFacultad').setValue(facultad ? facultad.nameFacultad : '');
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.facultades.filter(option => option.nameFacultad.toLowerCase().includes(filterValue)).map(facultad => facultad.nameFacultad);
  }

  getFacultades() {
    return of(FACULTADES_TABLE_DEMO_DATA.map(facultad => new Facultad(facultad)));
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
    let facultad = this.facultades.find(facultad => facultad.nameFacultad == customer.idFacultad);
    customer.idFacultad = facultad ? facultad.id : 1;
    customer.state = 1;
    this.dialogRef.close(customer);
  }

  updateCustomer() {
    const customer = this.form.value;
    customer.id = this.defaults.id;
    let facultad = this.facultades.find(facultad => facultad.nameFacultad == customer.idFacultad);
    customer.idFacultad = facultad ? facultad.id : 1;
    this.dialogRef.close(customer);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}

