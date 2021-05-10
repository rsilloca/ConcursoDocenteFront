import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Concurso } from './concurso.model';

@Component({
  selector: 'fury-concurso-create-update',
  templateUrl: './concurso-create-update.component.html',
  styleUrls: ['./concurso-create-update.component.scss']
})
export class ConcursoCreateUpdateComponent implements OnInit {

  static id = 100;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ConcursoCreateUpdateComponent>,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Concurso;
    }

    this.form = this.fb.group({
      id: [ConcursoCreateUpdateComponent.id++],
      anio: [this.defaults.anio || '',],
      periodo: [this.defaults.periodo || ''],
      startDate: this.defaults.startDate || '',
      endDate: this.defaults.endDate || '',
      approvalDate: this.defaults.approvalDate || '',
      magistralClassDate: this.defaults.magistralClassDate || '',
      state: this.defaults.state || '',
    });
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
    customer.state = 1;
    this.dialogRef.close(customer);
  }

  updateCustomer() {
    const customer = this.form.value;
    customer.id = this.defaults.id;
    this.dialogRef.close(customer);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}

