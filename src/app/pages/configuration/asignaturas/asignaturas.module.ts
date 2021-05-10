import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignaturasRoutingModule } from './asignaturas-routing.module';
import { AsignaturasComponent } from './asignaturas.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { ListModule } from 'src/@fury/shared/list/list.module';
import { AsignaturaCreateUpdateModule } from './asignatura-create-update/asignatura-create-update.module';
import { BreadcrumbsModule } from 'src/@fury/shared/breadcrumbs/breadcrumbs.module';


@NgModule({
  declarations: [AsignaturasComponent],
  imports: [
    CommonModule,
    AsignaturasRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,

    // Core
    ListModule,
    AsignaturaCreateUpdateModule,
    BreadcrumbsModule
  ],
  exports: [AsignaturasComponent]
})
export class AsignaturasModule { }
