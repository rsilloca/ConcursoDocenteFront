import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvocatoriaRoutingModule } from './convocatoria-routing.module';
import { ConvocatoriaComponent } from './convocatoria.component';
import { CardPlazaComponent } from './card-plaza/card-plaza.component';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { MaterialModule } from 'src/@fury/shared/material-components.module';


@NgModule({
  declarations: [ConvocatoriaComponent, CardPlazaComponent],
  imports: [
    CommonModule,
    ConvocatoriaRoutingModule,
    FurySharedModule,
    MaterialModule
  ],
  exports: [CardPlazaComponent]
})
export class ConvocatoriaModule { }
