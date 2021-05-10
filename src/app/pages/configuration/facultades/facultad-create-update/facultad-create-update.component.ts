import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Facultad } from './facultad.model';

@Component({
  selector: 'fury-facultad-create-update',
  templateUrl: './facultad-create-update.component.html',
  styleUrls: ['./facultad-create-update.component.scss']
})
export class FacultadCreateUpdateComponent implements OnInit {

  static id = 4;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<FacultadCreateUpdateComponent>,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Facultad;
    }

    this.form = this.fb.group({
      id: [FacultadCreateUpdateComponent.id++],
      nameFacultad: [this.defaults.nameFacultad || '',],
      description: [this.defaults.description || ''],
      state: this.defaults.state || 1,
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

