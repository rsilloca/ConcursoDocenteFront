import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Postulante } from './postulante.model';

@Component({
  selector: 'fury-postulante-create-update',
  templateUrl: './postulante-create-update.component.html',
  styleUrls: ['./postulante-create-update.component.scss']
})
export class PostulanteCreateUpdateComponent implements OnInit {

  static id = 100;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<PostulanteCreateUpdateComponent>,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Postulante;
    }

    this.form = this.fb.group({
      id: [PostulanteCreateUpdateComponent.id++],
      firstName: [this.defaults.firstName || '',],
      lastName: [this.defaults.lastName || ''],
      document: this.defaults.document || '',
      email: this.defaults.email || '',
      state: this.defaults.state || '',
      phoneNumber: this.defaults.phoneNumber || '',
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
