import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConcursosRoutingModule } from './concursos-routing.module';
import { ConcursosComponent } from './concursos.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { ListModule } from 'src/@fury/shared/list/list.module';
import { ConcursoCreateUpdateModule } from './concurso-create-update/concurso-create-update.module';
import { BreadcrumbsModule } from 'src/@fury/shared/breadcrumbs/breadcrumbs.module';


@NgModule({
  declarations: [ConcursosComponent],
  imports: [
    CommonModule,
    ConcursosRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,

    // Core
    ListModule,
    ConcursoCreateUpdateModule,
    BreadcrumbsModule
  ]
})
export class ConcursosModule { }
