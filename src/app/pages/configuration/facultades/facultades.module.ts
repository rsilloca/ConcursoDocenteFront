import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultadesRoutingModule } from './facultades-routing.module';
import { FacultadesComponent } from './facultades.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { ListModule } from 'src/@fury/shared/list/list.module';
import { FacultadCreateUpdateModule } from './facultad-create-update/facultad-create-update.module';
import { BreadcrumbsModule } from 'src/@fury/shared/breadcrumbs/breadcrumbs.module';


@NgModule({
  declarations: [FacultadesComponent],
  imports: [
    CommonModule,
    FacultadesRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,

    // Core
    ListModule,
    FacultadCreateUpdateModule,
    BreadcrumbsModule
  ],
  exports: [FacultadesComponent]
})
export class FacultadesModule { }
