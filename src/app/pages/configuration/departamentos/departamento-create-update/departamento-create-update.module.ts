import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentoCreateUpdateComponent } from './departamento-create-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';



@NgModule({
  declarations: [DepartamentoCreateUpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  entryComponents: [DepartamentoCreateUpdateComponent],
  exports: [DepartamentoCreateUpdateComponent]
})
export class DepartamentoCreateUpdateModule { }
