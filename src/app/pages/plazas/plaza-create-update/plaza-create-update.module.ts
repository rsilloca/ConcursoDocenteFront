import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlazaCreateUpdateComponent } from './plaza-create-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FuryCardModule } from 'src/@fury/shared/card/card.module';



@NgModule({
  declarations: [PlazaCreateUpdateComponent],
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
    MatAutocompleteModule,
    FuryCardModule
  ],
  entryComponents: [PlazaCreateUpdateComponent],
  exports: [PlazaCreateUpdateComponent]
})
export class PlazaCreateUpdateModule { }
