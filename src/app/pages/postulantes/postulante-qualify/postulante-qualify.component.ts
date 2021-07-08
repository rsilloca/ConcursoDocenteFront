import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Postulante } from '../postulante-create-update/postulante.model';

@Component({
  selector: 'fury-postulante-qualify',
  templateUrl: './postulante-qualify.component.html',
  styleUrls: ['./postulante-qualify.component.scss']
})
export class PostulanteQualifyComponent implements OnInit {

  form: FormGroup;
  typeQualifier: string = "";
  currentUser: string = "";

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<PostulanteQualifyComponent>,
    @Inject(MAT_DIALOG_DATA) public postulante: Postulante
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nota: ['', Validators.required]
    });
    let localDataUser = localStorage.getItem('logged');
    if (localDataUser) {
      let dataUser = JSON.parse(localDataUser);
      let email: string = dataUser.email;
      if (email.includes('exp')) {
        this.typeQualifier = 'EXPERTO';
      } else {
        this.typeQualifier = 'CONSEJO FACULTAD'
      }
      this.currentUser = email;
    }
  }

  save() {
    let localCalificaciones = localStorage.getItem('qualifications');
    let calificaciones: any[];
    if (localCalificaciones) {
      calificaciones = JSON.parse(localCalificaciones);
    } else {
      calificaciones = [];
    }
    calificaciones.push([this.postulante.id, this.currentUser, this.form.get('nota').value]);
    localStorage.setItem('qualifications', JSON.stringify(calificaciones));
    this.dialogRef.close();
  }

}
